import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axiosInstance from '../../api/axiosInstance';

const LogIn = () => {

    const [certificate, setCertificate] = useState("");
    const [privateKey, setPrivateKey] = useState("");

    const LogIngRequest = async () => {
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

    return (
        <div>
            {/* <h1>LogIn</h1>
            <label>
                Certificate:
                <input
                    type="text"
                    name="name"
                />
            </label>
            <label>
                PrivateKey:
                <input
                    type="text"
                    name="name"
                />
            </label> */}
            <Button value="submit" onClick={enterFabric} >Login</Button>
        </div>
    )
}

export default LogIn