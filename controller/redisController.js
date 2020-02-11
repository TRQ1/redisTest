import { getFun, setFun } from '../tools/redis';

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
        return res.json({result: "success1"});
    } catch(e) {
        return res.json({result: "fail", message: e.message});
    }
};

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};