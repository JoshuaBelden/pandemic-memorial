import {
    ARTICLES_LOADED
} from '../actions/types';

const initialState = {
    articles: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ARTICLES_LOADED:
            const newState = {
                ...state,
                articles: payload
            };
            return newState;

        default:
            return state;
    }
}
