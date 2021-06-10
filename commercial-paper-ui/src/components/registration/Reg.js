import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axiosInstance from '../../api/axiosInstance';



const Registration = ({changeAuthForm}) => {
    const [mail, setMail] = useState('');
    const [company, setCompany] = useState('org2');
    const [certificate, setCertificate] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [files, setFiles] = useState(false);
    const changeAuth = (e) => {
        changeAuthForm()
      
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
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
            margin: theme.spacing(3),
        },
        select: {
            marginTop: "25px"
        }
    }));

    const classes = useStyles();

    const saveLocalStorage = () => {
        localStorage.setItem("mail", mail);
        localStorage.setItem("certificate", certificate);
        localStorage.setItem("privateKey", privateKey);
    }

    const SignUp = async () => {
        if (mail != '') {
            const resp = await axiosInstance.post("/api/registeruser", { 'name': mail, 'company': company });
                const certificateReplace = resp.data.certificate.replace(/\\n/g, '\n').replace(/"/g, '');
                const privateKeyReplace = resp.data.privateKey.replace(/\\r\\n/g, '\n').replace(/"/g, '');

                setCertificate(certificateReplace)
                setPrivateKey(privateKeyReplace)
                saveLocalStorage();
                if (files) {
                    download(certificate, "certificate")
                    download(privateKey, "privateKey")
                }
        }

    }

    const handleName = e => setMail(e.target.value)
    const handleCompany = e => setCompany(e.target.value)
    const saveFiles = () => setFiles(!files)

    const download = (text, filename) => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleName}
                    />
                    <Select
                        className={classes.select}
                        labelId="demo-simple-select-helper-label"
                        id="simple-select"
                        fullWidth
                        onChange={handleCompany}
                        defaultValue="org2"

                    >
                        <MenuItem value="org2" >Magnetocorp</MenuItem>
                        <MenuItem value="org1">Digibank</MenuItem>
                    </Select>
                    <Button

                        variant="contained"
                        color="primary"
                        onClick={SignUp}
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" onClick={saveFiles} />}
                        label="Save Files"
                    />
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={changeAuth}>
                                {"Do u have account? LogIn"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Registration
