import React, {useEffect, useState} from 'react';
import Registration from '../registration/Registration';
import LogIn from "../logIn/SigIn";
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles';

const makeTheme = makeStyles(theme => ({
    loader: {
        zIndex: "12"
    },
    circle: {
        color: '#fff',
        width: 50,
        height: 50
    }
}))

const AuthForm = ({user, setUser}) => {
    const classes = makeTheme()
    const [auth, setAuth] = useState(false);
    const [loader, setLoader] = useState(false);
    const changeAuthForm = () => {
        setAuth(!auth)
    } 
    useEffect(() => {console.log("user", user)}, [localStorage.getItem('user')])
    
    return (
        <div>
            {
            auth ? 
            <Registration  changeAuthForm={changeAuthForm} user={user} setUser={setUser} loader={setLoader}/> : 
            <LogIn changeAuthForm={changeAuthForm} user={user} setUser={setUser} loader={setLoader}/>
            }
            <Backdrop className={classes.loader} open={loader}>
                <CircularProgress className={classes.circle} />
            </Backdrop>

        </div>
        )
}

export default AuthForm;