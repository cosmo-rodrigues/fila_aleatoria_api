import express, { json } from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';

import { router } from './routes/router';

dotenv.config();

export const app = express();

app.use(cors());
app.use(json());

app.get('/',async (req, res) => {
    console.log(req)
    res.json({message: "Olá"}).sendStatus(200)
})

app.use('/api/v1', router);
app.use(logger('dev'));
