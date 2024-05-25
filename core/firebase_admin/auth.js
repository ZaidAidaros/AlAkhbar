const fireApp =require("./adminapp");
const { getAuth } = require("firebase-admin/auth");

const createUserOnFirebase =async function(email,phoneNumber,password){
    let user = {
        email,
        emailVerified: false,
        phoneNumber,
        password,
        disabled: false,
    };
    if(!email) {
        delete user.email;
        delete user.emailVerified;
    }
    if(!phoneNumber) {
        delete user.phoneNumber;
    }
    return await getAuth(fireApp)
    .createUser(user)
    .then((userRecord) => {
        return {state:true,result:userRecord};
    })
    .catch((error) => {
        return {state:false,result:error};
    });
}

const getUserByUid = async function(uid){
    return await getAuth(fireApp).getUser(uid).then((user)=>{
        return {state:true, result:user};
    }).catch((error) => {
        return {state:false, result:error};
    });
};
const checkFireToken = async function(token){
    return await getAuth(fireApp).verifyIdToken(token).then((user)=>{
        return {state:true, result:user};
    }).catch((error) => {
        return {state:false, result:error};
    });
};
const updateFireUser = async function(uid,data){
    return await getAuth(fireApp).updateUser(uid,data).then((user)=>{
        return {state:true, result:user};
    }).catch((error) => {
        return {state:false, result:error};
    });
};
const deleteFireUser = async function(uid){
    return await getAuth(fireApp).deleteUser(uid).then((result)=>{
        return {state:true, result};
    }).catch((error) => {
        return {state:false, result:error};
    });
};

module.exports = {
    createUserOnFirebase,
    getUserByUid,
    checkFireToken,
    updateFireUser,
    deleteFireUser,
}
