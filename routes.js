const HOME = '/';
const GET_REDIS = '/getredis/:key/:call';
const SET_REDIS = '/setredis';

const routes = {
    home: HOME,
    getredis: GET_REDIS,
    setredis: SET_REDIS
}

export default routes;