import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';




export default (req) => {
    const url = 'http://react-ssr-api.herokuapp.com';
    const axiosInstance = axios.create({
        baseURL: url,
        headers: {cookie: req.get('cookie')||''}
    });

    const store = createStore(reducers,{},applyMiddleware(thunk.withExtraArgument(axiosInstance)));

    return store;
}