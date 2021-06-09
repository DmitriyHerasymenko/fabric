import React, { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import Button from '@material-ui/core/Button';

const Registration = (e) => {
  const [mail, setMail] = useState('');
  const [company, setCompany] = useState('org2');
  const [certificate, setCertificate] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const LogIngRequest = async () => {
    console.log("loginREs", certificate, privateKey)
    const resp = await axiosInstance.post("/api/login", { 'certificate': certificate, 'privateKey': privateKey })
    console.log("respLogin", resp)
    return resp;
  }

  const SignUp = async () => {
    const resp = await axiosInstance.post("/api/registeruser", { 'name': mail, 'company': company })
    const certificateReplace = resp.data.certificate.replace(/\\n/g, '\n').replace(/"/g, '');
    const privateKeyReplace = resp.data.privateKey.replace(/\\r\\n/g, '\n').replace(/"/g, '')

    setCertificate(certificateReplace)
    setPrivateKey(privateKeyReplace)
    //download(certificate, "certificate")
    //download(privateKey, "privateKey")
    //console.log("ser", certificate, privateKey);
    const login = await LogIngRequest();
    localStorage.setItem("mail", mail);
    localStorage.setItem("certificate", certificate);
    localStorage.setItem("privateKey", privateKey);
    //console.log("replace", certificateReplace, privateKeyReplace);
  }


  const handleName = e => setMail(e.target.value)
  const handleCompany = e => setCompany(e.target.value)

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
    <div style={{ marginTop: 20 }} >
      <label>
        Mail:
    <input
          type="text"
          name="name"
          onChange={handleName}
        />
      </label>
      <label>
        Organization:
        <select onChange={handleCompany}>
          <option value="org2">Magnetocorp</option>
          <option value="org1">Digibank</option>
        </select>
      </label>
      <Button value="submit" onClick={SignUp}>SignUp</Button>
    </div>
  );
}

export default Registration;