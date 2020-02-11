import express from 'express';
import routes from '../routes';
import { home, getRedis, setRedis } from '../controller/redisController';

const redisRouter = express.Router();

redisRouter.get(routes.home, home);
redisRouter.post(routes.getredis, getRedis);
redisRouter.post(routes.setredis, setRedis);

export default redisRouter;