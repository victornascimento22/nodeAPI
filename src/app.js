'use strict';

import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const router = express.Router();

import index from '/home/loadt/node/src/routes/index.js' // Corrija o nome do módulo para 'index'
import login from '/home/loadt/node/src/routes/login-router.js'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index); // Use o roteiro 'index' aqui
app.use('/login', login); // Use o roteiro 'login' aqui

export default app;
