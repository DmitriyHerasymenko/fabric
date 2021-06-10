import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axiosInstance from '../../api/axiosInstance';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { DropzoneArea } from 'material-ui-dropzone';


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

const LogIn = ({changeAuthForm}) => {

    const [certificate, setCertificate] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [openInfo, setOpenInfo] = useState(['success', false])
    const [infoMsg, setInfoMsg] = useState('')
    const [countFiles, setCount] = useState(0)
    const [certFile, setCertFile] = useState(null)
    const [keyFile, setKeyFile] = useState(null)
    const signUp = (e) => {
        changeAuthForm()
      
    }

    useEffect( () => {
		localStorage.clear()
	}, [])

    const LogIngRequest = async () => {
        const certificate = localStorage.getItem('certificate')
        const privateKey = localStorage.getItem('privateKey')
        const resp = await axiosInstance.post("/api/login", { 'certificate': certificate, 'privateKey': privateKey })
        const name = resp.data.name
        alert("hello" + " " + name)
        return resp;
    }

    const getData = () => {
        const certificate = localStorage.getItem('certificate');
        const privateKey = localStorage.getItem('privateKey');
        setCertificate(certificate);
        setPrivateKey(privateKey);
    }

    const enterFabric = () => {
        const data = getData();
        LogIngRequest();
     }

     const fileUpload = files => {
        
        if( files.length < countFiles) return
        files.map(item => {
     
            if(item == undefined) return
            let info = 'success'
            let reader = new FileReader()
            reader.readAsText(item);
            reader.onload = function(){
                let result = reader.result
                if(isCertificate(result)){
                    setCertFile(item.name)
                    setInfoMsg('Certificate uploaded')
                    localStorage.setItem('certificate', result)
                } else if(isPrivateKey(result)){
                    setKeyFile(item.name)
                    setInfoMsg('Private key uploaded')
                    localStorage.setItem('privateKey', result)
                } else{
                    info = 'error'
                    setInfoMsg('Wrong file')
                }
                setOpenInfo([info, true])
                setCount(files.length)
            }
  
            
        })        
    }

    return (
        <div>
        <Container component="main" maxWidth="xs">
            <div>
                <Typography 
                    component="h1"
                    >
                    Sign in
                </Typography>
                <p>Please select the file that you issued after registration</p>
                <DropzoneArea
                    acceptedFiles={['.txt']}
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
                    onClick={enterFabric}
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
        </Container>
        </div>
    )
}

export default LogIn