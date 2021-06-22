import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axiosInstance from '../../api/axiosInstance';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { DropzoneArea } from 'material-ui-dropzone';
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { useHistory } from "react-router-dom"


/**
 * @param {string} certText 
 * @returns {boolean}
 */
 const isCertificate = certText => {
    return certText.startsWith('-----BEGIN CERTIFICATE-----') && certText.match(/-----END CERTIFICATE-----\s*$/)
}

/**
 * @param {string} prKeyText 
 * @returns {boolean}
 */
const isPrivateKey = prKeyText => {
    return prKeyText.startsWith('-----BEGIN PRIVATE KEY-----') && prKeyText.match(/-----END PRIVATE KEY-----\s*$/)
}

const LogIn = ({changeAuthForm, setUser, loader}) => {
    const [countFiles] = useState(0)
    const [certFile, setCertFile] = useState(null)
    const [keyFile, setKeyFile] = useState(null)
    const [openInfo, setOpenInfo] = useState(['success', false])
    const [infoMsg, setInfoMsg] = useState('')
    const history = useHistory()
    
    const signUp = (e) => {
        changeAuthForm()
      }

    const LogIngRequest = async () => {
        if(certFile === null || keyFile === null)  {
            setInfoMsg('Please, choose a files')
            setOpenInfo(['error', true])
        }
        loader(true)
        const resp = await axiosInstance.post("/api/login", { 'certificate': certFile, 'privateKey': keyFile })
        const name = resp.data.name
        setUser(resp.data)
        history.push('/papers')
        loader(false)
        return resp;
    }

    const handleClose = (event) => {
        setOpenInfo(false);
    };

     const fileUpload = files => {
        if(files.length < countFiles) return
        files.forEach(item => {
            if(item === undefined) return
            let reader = new FileReader()
            reader.readAsText(item);

            reader.onload = function(){
                let result = reader.result
                if(isCertificate(result)){
                    setCertFile(result)
                    setInfoMsg('Certificate uploaded')
                    localStorage.setItem('certificate', result)
                } else if(isPrivateKey(result)){
                    setKeyFile(result)
                    setInfoMsg('Private key uploaded')
                    localStorage.setItem('privateKey', result)
                } 
            }
  
        })        
    }

    return (
        <Container component="main" maxWidth="xs">
            <div>
      
                <p>Please select the file that you issued after registration</p>
                <DropzoneArea
                    acceptedFiles={['application/*']}
                    showPreviews={true}
                    showPreviewsInDropzone={false}
                    useChipsForPreview
                    previewText="Selected files"
                    dropzoneText="Drop files here"
                    filesLimit={2}
                    onChange={fileUpload}
                />
                <Button  
                    variant="contained"                
                    fullWidth
                    onClick={LogIngRequest}
                    >
                    Sign in</Button>
                <Grid 
                    container
                    justify="flex-end"
                    >
                    <Link onClick={signUp}
                    href="#">
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
            </div>
            <Snackbar open={openInfo[1]} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={openInfo[0]}>
                    {infoMsg}
                </Alert>
            </Snackbar>
        </Container>

    )
}

export default LogIn