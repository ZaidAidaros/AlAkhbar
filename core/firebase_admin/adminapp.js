const admin = require("firebase-admin");

const firebaseServiceAccount = require("./alakhbarFirebseServiceAccount");
const fireApp = admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceAccount)
});

module.exports = fireApp;