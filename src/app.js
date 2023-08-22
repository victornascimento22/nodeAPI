'use strict'

import express from 'express';
import bodyParser from 'body-parser'; // Importe o pacote body-parser

const app = express();

const router = express.Router();

import index from './routes/index.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index)

export default app;