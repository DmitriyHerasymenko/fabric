import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axiosInstance from '../../api/axiosInstance';
import LogIn from '../logIn/logIn';
import { Mail } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-betwen'
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  const [certificate, setCertificate] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [mail, setMail] = useState("");

  const LogIngRequest = async () => {
    const resp = await axiosInstance.post("/api/login", { 'certificate': certificate, 'privateKey': privateKey })
    const name = resp.data.name
    setMail(resp.data.name)
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
    console.log(data)
    LogIngRequest();
  }

  const logOut = () => {
    console.log("eeee");
    setMail("")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Commercial Paper
          </Typography>
          {mail === "" ? <Button color="inherit" onClick={enterFabric}>Login</Button> : <Button color="inherit" onClick={logOut}>{mail} log out</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
