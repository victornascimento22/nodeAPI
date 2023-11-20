// loginRoutes.js
import express from 'express'; 

import { post } from '/home/loadt/node/src/controllers/LoginController.js';

const router = express.Router();

router.post('/login', post);

export default router; 
