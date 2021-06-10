import React, {useState} from 'react';
import Registration from '../registration/Reg';
import LogIn from "../logIn/logIn";

const AuthForm = () => {
    const [auth, setAuth] = useState(false);
    const changeAuthForm = () => {
        setAuth(!auth)
    } 
    return (
        <div>
            {auth ? <Registration changeAuthForm={changeAuthForm}/> : <LogIn changeAuthForm={changeAuthForm}/>}
        </div>
        )
}

export default AuthForm;