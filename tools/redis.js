'use stric';

import dotev from 'dotenv';

dotev.config()

const redisPort = process.env.REDIS_PORT;
const redisUrl = process.env.REDIS_URL;

const redis = require('redis'),
    client = redis.createClient(redisPort, redisUrl);

client.on("error", function (err) {
    console.log("Error " + err);
});

export const getFun = async(key) => {
    try {
        const res = await client.get(key);
        return console.log(res);
    } catch(err) {
        console.log(err);
    }
};

export const setFun = async(key, value) => {
    try {
        const res = await client.set(key, value, redis.print);
        return console.log(res);
    } catch(err) {
        console.log(err);
    }
};