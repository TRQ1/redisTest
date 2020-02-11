'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import { Middleware } from './middleware'
import routes from './routes';
import redisRouter from './routers/redisRouters.js';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(Middleware);
app.use(routes.home, redisRouter);
app.use(routes.getredis, redisRouter);
app.use(routes.setredis, redisRouter);

export default app;