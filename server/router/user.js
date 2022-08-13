const router = require("express").Router();
const controller = require("../controller/user");
const { schemaBody, joiParams } = require("../middleware/joiSchema");
const {
  validateBody,
  validateParam,
  validateToken,
  validUnique,
} = require("../middleware/validation");
const { saveOneImage } = require("../middleware/imageTransfer");
const userDB = require("../model/user");

//@public
//url : http://localhost:4000/api/v1/user/register
//signUp Account
router.post(
  "/register",
  validUnique(userDB, "email"),
  validateBody(schemaBody.user.register.body),
  controller.register
);

//@public
//url : http://localhost:4000/api/v1/user
//signIn Account
router.post("/", validateBody(schemaBody.user.login), controller.login);

//@private
//url:http://localhost:4000/api/v1/user/auth
//authorization account
router.get("/auth", validateToken, controller.auth);

//@public
//url:http://localhost:4000/api/v1/user/verify
//verify email for forgot password
router.post("/verify", controller.verify);

//@private
//url:
//token verification until password Change
router.get("/password/token", controller.changePasswordVerify);

//@private
//url:http://localhost:4000/api/v1/user/password&change
//passwordChange
router.patch("/password&change", controller.passChange);

//@private
//url:http://localhost:4000/api/v1/user/edit/profile/:user_id
//edit profile
router.patch(
  "/edit/profile",
  validateToken,
  saveOneImage("avatar", "User"),
  validateBody(schemaBody.user.register.patch),
  controller.edit
);

//@private
//url:
//password changing enter login
router.patch(
  "/inner/change/password",
  validateToken,
  controller.innerChangePassword
);

module.exports = router;
