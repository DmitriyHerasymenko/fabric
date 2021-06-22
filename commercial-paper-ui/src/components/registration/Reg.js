import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axiosInstance from '../../api/axiosInstance';
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'



const Registration = ({ changeAuthForm, user, setUser, loader }) => {
    const history = useHistory()
    const [mail, setMail] = useState('');
    const [company, setCompany] = useState('org2');
    const [certificate, setCertificate] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [openInfo, setOpenInfo] = useState(['success', false])
    const [infoMsg, setInfoMsg] = useState('')
    const [error, serError] = useState(false)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    const changeAuth = () => {
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
        },
        textField: {
            margin: theme.spacing(1)}
        ,
    }));

    const classes = useStyles();

    const SignUp = async () => {
        if (mail === '' || !re.test(mail)) {
            serError(true)
            setInfoMsg('You must enter a name, it must be like name@domen.com')
            setMail('')
            setOpenInfo(['error', true])
            return
        }
        if (company === '') {
            setInfoMsg('You must choice a company')
            setOpenInfo(['error', true])
            return
        }
        loader(true)
        const resp = await axiosInstance.post("/api/registeruser", { 'name': mail, 'company': company });
        if (resp.data.error === "no response") {
            setInfoMsg('This name is already in use')
            setOpenInfo(['error', true]);
            return
        }

        const certificateReplace = resp.data.certificate.replace(/\\n/g, '\n').replace(/"/g, '');
        const privateKeyReplace = resp.data.privateKey.replace(/\\r\\n/g, '\n').replace(/"/g, '');


        setCertificate(certificateReplace)
        setPrivateKey(privateKeyReplace)
        loader(false)
        download(certificateReplace, "certificate.pem")
        download(privateKeyReplace, "privateKey.pem")
        setOpenInfo(['success', true])
        setInfoMsg('Registration success')
        serError(false)
        history.push('/papers')

    }

    const handleName = e => setMail(e.target.value)
    const handleCompany = e => setCompany(e.target.value)
    const handleClose = e => setOpenInfo(false);

    setUser(mail)

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
                        error={error}
                        autoFocus
                        onChange={handleName}
                    />
                    <FormControl
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    >
                        <Select
                            className={classes.select}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleCompany}
                            defaultValue="org2"
                        
                        >

                            <MenuItem value="org2" >Magnetocorp</MenuItem>
                            <MenuItem value="org1">Digibank</MenuItem>
                        </Select>
                    </FormControl>
                    <Button

                        variant="contained"
                        color="primary"
                        onClick={SignUp}
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={changeAuth}>
                                {"Do u have account? LogIn"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Snackbar open={openInfo[1]} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={openInfo[0]}>
                    {infoMsg}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default Registration
