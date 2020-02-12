import { getFun, hSetFun, hmSetFun } from '../tools/redis';
import { jsonfile } from '../tools/json_parser';
import { rendomInit } from '../tools/randomUtil';


export const home = async (req, res) => {
    res.json({result: 'home'});
};

export const getRedis = async(req, res) => {
    try {
        const callNumber = req.params.call;
        const key = req.params.key;
        console.log(callNumber)
        console.log(key)
        for (var i = 0; i < callNumber; i++) {
            await getFun(key);
        }
        return res.json({ result: 'getRedis' });
    } catch(e) {
        console.log(e);
    }
};

export const setRedis = async(req, res) => {
    try {
        const callNumber = req.params.call;
        console.log(callNumber)
        for (var i = 0; i < callNumber; i++) {
            const value = jsonfile[i];
            const items = "items:" + [i]
            await hSetFun(items, JSON.stringify(value));
        }
        return res.json({result: 'success1'});
    } catch(e) {
        return res.json({result: 'fail', message: e.message});
    }
};

export const hSetRedis = async(req, res) => {
    try {
        const callNumber = req.params.call;
        console.log(callNumber)
        for (var i = 0; i < callNumber; i++) {
            const value = jsonfile[i];
            const items = "items:" + [i]
            await hmSetFun(items, 'product', jsonfile[i].product, 'price', jsonfile[i].price, 'location',
                jsonfile[i].location, 'company', jsonfile[i].company);
        }
        return res.json({result: 'success1'});
    } catch(e) {
        return res.json({result: 'fail', message: e.message});
    }
};

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};