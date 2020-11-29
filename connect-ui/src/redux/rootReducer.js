import {combineReducers} from 'redux';

import AuthReducer from './auth/auth.reducer';
import PostReducer from './post/post.reducer';


export const rootReducer = combineReducers({
    auth:AuthReducer,
    post:PostReducer
});