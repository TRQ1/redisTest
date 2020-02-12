const HOME = '/';
const GET_REDIS = '/getredis/:key/:call';
const SET_REDIS = '/setredis/:call';
const HMSET_REDIS = '/hmsetredis/:call';

const routes = {
    home: HOME,
    getredis: GET_REDIS,
    setredis: SET_REDIS,
    hmsetredis: HMSET_REDIS
}

export default routes;