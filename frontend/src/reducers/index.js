import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import article from './article';

export default combineReducers({
    alert,
    auth,
    article
});
