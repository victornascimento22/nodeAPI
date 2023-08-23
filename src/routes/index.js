'use strict';

import express from 'express';

const router = express.Router();

// Define a rota GET
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Api Capital",
        version: "0.0.2"
    });
});

// Define a rota POST para login

export default router;
