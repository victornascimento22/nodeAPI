'use strict'

import express from 'express';
import bodyParser from 'body-parser'; // Importe o pacote body-parser

const app = express();

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const create = router.post('/', (req,res,next) => {
    res.status(201).send(req.body);

});


app.use('/login', create)

export default app;