import express from 'express';
import routes from '../routes';
import { home, getRedis, setRedis, hSetRedis } from '../controller/redisController';

const redisRouter = express.Router();

redisRouter.get(routes.home, home);
redisRouter.post(routes.getredis, getRedis);
redisRouter.post(routes.setredis, setRedis);
redisRouter.post(routes.setredis, setRedis);
redisRouter.post(routes.hmsetredis, hSetRedis);

export default redisRouter;