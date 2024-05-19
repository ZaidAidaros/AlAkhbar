var admin = require("firebase-admin");

var firebaseServiceAccount = require("./alakhbar-web-app-firebase-adminsdk");

const fireApp = admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceAccount)
});

module.exports = fireApp;