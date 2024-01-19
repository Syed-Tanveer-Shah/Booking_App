import express from "express";
const router = express.Router();
import usercontroller from "../controllers/usercontroller.js";
import { verifyToken,verifyuser,verifyadmin } from "../utils/verifyToken.js";
router.get('/checkauth', verifyToken, (req, res, next) => {
    res.send("Hello, You are Authenticated.");
})

router.get('/checkuser/:id', verifyuser, (req, res, next) => {
  res.send("Hello,user you are loged and u can delete your account.....!");
})

router.get('/checkadmin/:id', verifyadmin,(req, res, next) => {
  res.send("Hello,Admin you are loged and u can delete your account.");
})


  router.get('/', usercontroller.getAllUser);
  router.put('/:id', usercontroller.updateUser);
  router.delete('/:id', usercontroller.deleteUser);
  
  export default router;