const router = require("express").Router();
const {
  logIn,
  signUp,
  resetPassword,
  verifyEmailPhone,
  verifyEmailPhoneByFirebase,
  resetPasswordByFirebase,
  foregetpassword,
} = require("../controllers/authController");
const { apiAuthRoutes } = require("../core/api_routes");
router.get(apiAuthRoutes.verifyEP, verifyEmailPhone);
router.get(apiAuthRoutes.verifyEPByFire, verifyEmailPhoneByFirebase);
router.post(apiAuthRoutes.logIn, logIn);
router.post(apiAuthRoutes.signUp, signUp);
router.post(apiAuthRoutes.foregetpassword, foregetpassword);
router.post(apiAuthRoutes.resetpassword, resetPassword);
router.post(apiAuthRoutes.resetpasswordByFire, resetPasswordByFirebase);

module.exports = router;
