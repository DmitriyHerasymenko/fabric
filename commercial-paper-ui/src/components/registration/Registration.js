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


const Registration = ({ changeAuthForm, user, setUser, loader }) => {
  const classes = useStyles();
  const history = useHistory()
  const [mail, setMail] = useState('');
  const [company, setCompany] = useState('org2');
  const [openInfo, setOpenInfo] = useState(['success', false])
  const [infoMsg, setInfoMsg] = useState('')
  const [error, serError] = useState(false)
  //eslint-disable-next-line
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const changeAuth = () => {
    changeAuthForm()
  }

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
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
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
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={SignUp}

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
                  {"Don't have an account? Sign In"}
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
export default Registration;
