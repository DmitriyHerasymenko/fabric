const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')


const registerUser = require("./src/registerUser");
const {login} = require("./src/utils/login");
const queryApp = require("./src/queryapp");
const issue = require("./src/issue");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(bodyParser());


app.post("/api/login", (req, res) => {
  const {certificate, privateKey } = req.body;
  login(certificate, privateKey).then((data) => {
    res.send({name: data.name, company: data.org})
  });
});


app.post("/api/registeruser", (req, res) => {
    const {name, company} = req.body;
    registerUser( name, company).then((data) => {
      res.send(data? data: {error: "no response"});
    });
  });

  app.post("/api/history", (req, res) => {
  
    const { certificate, privateKey, paperNumber } = req.body;
    queryApp( certificate, privateKey, paperNumber )
    .then(data => {
        res.send(data)
    });
  });
  
  app.post("/api/issue", (req, res) => {
  
    const { certificate, privateKey, paperNumber,  redeemDate, cost } = req.body;//releaseDate,
    issue(certificate, privateKey, paperNumber, redeemDate, cost)
    .then(data => {
        res.send(data);
    });
  });


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
