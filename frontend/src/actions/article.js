import axios from 'axios';
import { ARTICLES_LOADED } from './types';

export const loadArticles = () => async dispatch => {
    try {
        const response = await axios.get('/api/article');
        dispatch({
            type: ARTICLES_LOADED,
            payload: response.data
        });
    } catch (err) {
    }
};
