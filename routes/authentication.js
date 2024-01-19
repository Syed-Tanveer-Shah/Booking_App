import express from 'express';
import AuthenticationController from '../controllers/authenticationcontroller.js';


const router = express.Router();

// Assuming this is the route for creating a user
router.post('/createUser', AuthenticationController.createDoc);
router.post('/login', AuthenticationController.login);
export default router;
