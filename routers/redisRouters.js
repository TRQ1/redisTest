import express from "express";
import routes from "../routes.js"
import { getMain, getRedis, setRedis } from "../controllers/redisController.js";

const globalRouter = express.Router();

/**
 * Global redirect list
 */
globalRouter.get('/', getMain);
globalRouter.get(routes.redis, getRedis);
globalRouter.post(routes.redis, setRedis);

export default globalRouter;