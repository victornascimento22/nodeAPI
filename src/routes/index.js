'use strict'

import express from 'express';

const app = express();
const router = express.Router();

const route = router.get('/', (req,res,next) => {

    res.status(200).send({

        title: "Api Capital",
        version: "0.0.2"
    });
});

const login = router.post('/', (req,res,next) => {
    res.status(201).send(req.body);

});

export default router;
