const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')


const registerUser = require("./src/registerUser");
const {login} = require("./src/utils/login");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(bodyParser());


app.post("/api/login", (req, res) => {
  const {certificate, privateKey } = req.body;
  login(certificate, privateKey).then((data) => {
    res.send({name: data.name, company: data.org});
  });
});


app.post("/api/registeruser", (req, res) => {
    const { name, company} = req.body;
    registerUser( name, company).then((data) => {
      res.send(data? data: {error: "no response"});
    });
  });



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
