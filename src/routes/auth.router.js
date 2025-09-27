const express = require("express");
const authRouter = express.Router();
const { postAuthLogin, postAuthSignup } = require("../controllers/auth.controller")
const payloadMiddleWare = require("../middlewares/paylod.middleware");
const { signupSchema, loginSchema } = require("./validations/auth.validation");

// const {
//   healthController,
//   pingController,
// } = require("../controllers/public.controller");

authRouter.post("/signup", payloadMiddleWare(signupSchema) ,postAuthSignup);
authRouter.post("/login", payloadMiddleWare(loginSchema), postAuthLogin);


module.exports = authRouter;
