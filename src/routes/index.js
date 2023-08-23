'use strict';

import express from 'express';
import controller from '/home/loadt/node/src/controllers/logincontroller'; // Importe o controlador corretamente

const router = express.Router();

// Define a rota POST e usa o controlador
router.post('/', controller.post);

// Define a rota GET
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Api Capital",
        version: "0.0.2"
    });
});

// Define a rota POST para login

export default router;
