const fireApp =require("./adminapp");
const { getAuth } = require("firebase-admin/auth");

const createUserOnFirebase =async function(email,phoneNumber,password){
    let user = {
        email,
        emailVerified: false,
        phoneNumber:phoneNumber,
        password,
        disabled: false,
    };
    if(!email) delete user.email;
    if(!phoneNumber) delete user.phoneNumber;
    return await getAuth(fireApp)
    .createUser(user)
    .then((userRecord) => {
        return {state:true,result:userRecord};
    })
    .catch((error) => {
        return {state:false,result:error};
    });
}
const userVerification = async function(idToken,uid){
    // idToken comes from the client app
    return await getAuth(fireApp)
    .verifyIdToken(idToken)
    .then((decodedToken) => {
     if(decodedToken.uid===uid){
        return {state:true,result:decodedToken};
     }
     return {state:false, result:decodedToken};
    })
    .catch((error) => {
        return {state:false,result:error};
    });
}
module.exports = {
    createUserOnFirebase,
    userVerification,
}
