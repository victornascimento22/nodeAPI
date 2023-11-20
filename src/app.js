'use strict';

import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const router = express.Router();

import index from '/home/loadt/node/src/routes/index.js'
import login from '/home/loadt/node/src/routes/login-router.js'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index); 
app.use('/login', login); 

export default app;
