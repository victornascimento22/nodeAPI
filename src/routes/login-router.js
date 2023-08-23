// loginRoutes.js
import express from 'express'; // Importe o módulo 'express' corretamente

import { post } from '/home/loadt/node/src/controllers/LoginController.js'; // Importe 'post' diretamente

const router = express.Router();

router.post('/login', post);

export default router; // Exporte 'router', não 'login-router'
