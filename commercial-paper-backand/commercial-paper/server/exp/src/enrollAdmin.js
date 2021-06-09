const { authentication, enrollment } = require('./utils/auth')


module.exports = async function enrollAdmin(mspid, ca, connectionProfile, admin, adminPass) {
   
  try {
    const identity = await enrollment(ca, mspid, admin, adminPass, "admin",)

    const gateway = await authentication(identity.certificate, identity.privateKey, mspid, connectionProfile, identity.label);

    return gateway;
    
  } catch (error) {
    console.error(`Failed to enroll client ${admin}: ${error}`);
  }
}

