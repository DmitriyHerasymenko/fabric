import React, {useState} from 'react';
import Registration from '../registration/Reg';
import LogIn from "../logIn/logIn";
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
    return (
        <div>
            {auth ? <Registration  changeAuthForm={changeAuthForm} user={user} setUser={setUser} loader={setLoader}/> : <LogIn changeAuthForm={changeAuthForm} user={user} setUser={setUser} loader={setLoader}/>}
            <Backdrop className={classes.loader} open={loader}>
                <CircularProgress className={classes.circle} />
            </Backdrop>

        </div>
        )
}

export default AuthForm;