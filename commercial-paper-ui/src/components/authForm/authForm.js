import React, {useState} from 'react';
import Registration from '../registration/Reg';
import LogIn from "../logIn/logIn";

const AuthForm = ({user, setUser}) => {
    const [auth, setAuth] = useState(false);
    const changeAuthForm = () => {
        setAuth(!auth)
    } 
    return (
        <div>
            {auth ? <Registration  changeAuthForm={changeAuthForm} user={user} setUser={setUser}/> : <LogIn changeAuthForm={changeAuthForm} user={user} setUser={setUser}/>}
        </div>
        )
}

export default AuthForm;