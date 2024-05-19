const router = require("express").Router();
const {
  logIn,
  logOut,
  signUp,
  resetPassword,
  verifyEmailPhone,
  foregetpassword,
  emailVerifyByFirebase
} = require("../controllers/authController");
const { apiAuthRoutes } = require("../core/api_routes");
router.get(apiAuthRoutes.logOut, logOut);
router.get(apiAuthRoutes.verifyEP, verifyEmailPhone);
router.post(apiAuthRoutes.verifyEmailFire, emailVerifyByFirebase);
router.post(apiAuthRoutes.logIn, logIn);
router.post(apiAuthRoutes.signUp, signUp);
router.post(apiAuthRoutes.foregetpassword, foregetpassword);
router.post(apiAuthRoutes.resetpassword, resetPassword);

module.exports = router;
