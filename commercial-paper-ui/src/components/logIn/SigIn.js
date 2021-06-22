import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axiosInstance from '../../api/axiosInstance';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { DropzoneArea } from 'material-ui-dropzone';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(https://www.hyperledger.org/wp-content/uploads/2019/01/Screen-Shot-2019-01-09-at-12.13.06-PM-e1554391908445.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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


const SignIn = ({changeAuthForm, setUser, loader}) => {
  const classes = useStyles();
  const [countFiles] = useState(0)
    const [certFile, setCertFile] = useState(null)
    const [keyFile, setKeyFile] = useState(null)
    const [openInfo, setOpenInfo] = useState(['success', false])
    const [infoMsg, setInfoMsg] = useState('')
    const history = useHistory()
    
    const changeAuth = () => {
        changeAuthForm()
      }
    

    const LogIngRequest = async () => {
        if(certFile === null || keyFile === null)  {
            setInfoMsg('Please, choose a files')
            setOpenInfo(['error', true])
        }
        loader(true)
        const resp = await axiosInstance.post("/api/login", { 'certificate': certFile, 'privateKey': keyFile })
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
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
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
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={LogIngRequest}

            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2">

                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={changeAuth}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

      </Grid>
      <Snackbar open={openInfo[1]} autoHideDuration={3000} onClose={handleClose} >
        <Alert onClose={handleClose} severity={openInfo[0]} >
          {infoMsg}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
export default SignIn;
