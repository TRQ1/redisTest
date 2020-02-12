'use stric';

import dotev from 'dotenv';
import redis from 'redis';
import ioredis from 'ioredis';

dotev.config()

const redisPort = process.env.REDIS_PORT;
const redisUrl = process.env.REDIS_URL;
const client = redis.createClient(redisPort, redisUrl);
const ioclient = new ioredis(redisPort, redisUrl);

client.on("error", function (err) {
    console.log("Error " + err);
});

export const getFun = async(key) => {
    try {
        const res = await client.get(key, reids.print);
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

export const hSetFun = async(key, value) => {
    try {
        const res = await client;
        await res.multi({ pipeline: false });
        await res.set(key, value, redis.print);
        await res.expire(key, 120);
        await res.exec(function(err, result) {
        });
        return res;
    } catch(err) {
        console.log(err);
    }
    ioclient.disconnect();
};

export const hmSetFun = async(key, filed1, value1, filed2, value2, filed3, value3, filed4, value4) => {
    try {
        const res = await client;
        await res.multi({ pipeline: false });
        await res.hmset(key, filed1, value1, filed2, value2, filed3, value3, filed4, value4);
        await res.expire(key, 120);
        await res.exec(function(err, result) {
        });
        return res;
    } catch(err) {
        console.log(err);
    }
    ioclient.disconnect();
};