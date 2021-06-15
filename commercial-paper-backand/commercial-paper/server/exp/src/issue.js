const CommercialPaper = require("../contract/lib/paper.js");
const { login } = require("./utils/login.js");

module.exports = async function issue(
  certificate,
  privateKey,
  paperNumber,
  redeemDate,
  cost
) {
  const { network, company, gateway } = await login(certificate, privateKey);
  try {
    
    if (!paperNumber) paperNumber = '00001';
    else{;
      intPaperNumber = (+paperNumber) + 1
      paperNumber = (intPaperNumber+'').padStart(5, '0');
      console.log(paperNumber);
    }

    let date = new Date()
    currentDate = date.toLocaleDateString()

    const contract = await network.getContract("papercontract");


    console.log("Submit commercial paper issue transaction.");

    const issueResponse = await contract.submitTransaction(
      "issue",
      company,
      paperNumber,
      currentDate,
      redeemDate,
      cost
    );

    console.log("Process issue transaction response." + issueResponse);

    let paper = CommercialPaper.fromBuffer(issueResponse);

    console.log(
      `${paper.issuer} commercial paper : ${paper.paperNumber} successfully issued for value ${paper.faceValue}`
    );
    console.log("Transaction complete.");
    return  paper;
    
  } catch (error) {
    console.log(`Error processing transaction. ${error}`);
    console.log(error.stack);
  } finally {
    
    console.log("Disconnect from Fabric gateway.");
    gateway.disconnect();
  }
};

