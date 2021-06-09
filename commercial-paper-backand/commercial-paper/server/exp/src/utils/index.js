const FabricCAServices = require("fabric-ca-client");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const { X509 } = require("jsrsasign");

module.exports.getConnectedProfile = function getConnectedProfile(company) {
  try {
    let mspId = {
      org2: "Org2MSP",
      org1: "Org1MSP",
    };

    let ccpPath;
    let connectionProfile;
    let caInfo;
    let caTLSCACerts;
    let mspid = mspId[company];
    let ca;

    switch (mspid) {
      case "Org1MSP":
        // load the network configuration
        ccpPath = path.resolve("../exp/gateway/connection-org1.yaml");
        connectionProfile = yaml.safeLoad(fs.readFileSync(ccpPath, "utf8"));
        caInfo = connectionProfile.certificateAuthorities["ca.org1.example.com"];
        break
        
      case "Org2MSP":
        // load the network configuration
        ccpPath = path.resolve("../exp/gateway/connection-org2.yaml");
        connectionProfile = yaml.safeLoad(fs.readFileSync(ccpPath, "utf8"));
        caInfo = connectionProfile.certificateAuthorities["ca.org2.example.com"];
        break

      default:
        return { error: "Invalid company mspid." };
    }
    caTLSCACerts = caInfo.tlsCACerts.pem;
    ca = new FabricCAServices(caInfo.url);
    return { connectionProfile, ca, caTLSCACerts, mspid };


  } catch (e) {
    console.error(e);
    throw new Error(e.message);
  }
};

module.exports.pemParse = function pemParse(pemStr) {
  let c = new X509();
  c.readCertPEM(pemStr);
  debugger
  let data = c.getSubjectString();
  let org = data.slice(data.indexOf("org"), data.indexOf("org") + 4);
  let name = data.split(/[=|+|\n]/).reverse()[0];
  let company = {
    org1:"digibank",
    org2:"magnetocorp"
  }

  return { org, name, company: company[org] };
};
