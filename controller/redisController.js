import util from 'util';
import redisClient from '../tools/redis.js';

export const getMain = (req, res) => {
    return res.json({result: "main success"});
};

export const getRedis = (req, res) => {
    try {
        return res.json({result: "success"});
    } catch(e) {
        return res.json({result: "fail", message: e.message});
    }
};

export const setRedis = (req, res) => {
    try {
        return res.json({result: "success"});
    } catch(e) {
        return res.json({result: "fail", message: e.message});
    }
};

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};