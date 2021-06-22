
const CommercialPaper = require('../contract/lib/paper.js');
const { login } = require("./utils/login.js");

module.exports = async function buy (certificate, privateKey, issuer, paperNumber, currentOwner, price, purchaseDateTime) {
    price = (((price) * 98)/100)

    try {

        const { network, company, gateway } = await login(certificate, privateKey);
            
        const contract = await network.getContract('papercontract', 'org.papernet.commercialpaper');

        console.log('Submit commercial paper buy transaction.');
                                                      
        const buyResponse = await contract.submitTransaction('buy', issuer, paperNumber, currentOwner, company, `${price}`, purchaseDateTime);

        let paper = CommercialPaper.fromBuffer(buyResponse);

        console.log(`${paper.issuer} commercial paper : ${paper.paperNumber} successfully purchased by ${paper.owner}`);

        gateway.disconnect();
        return paper;
        
    } catch (error) {

        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);

    } finally {

        console.log('Disconnect from Fabric gateway.');
        
    }
}
