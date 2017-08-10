import {createReducer} from '../utils';

const initialState = {
    initedPage: ''
};

export default createReducer(initialState, {
    ['PAGE_INIT']: (state, payload) => {
        return Object.assign({}, state, {
            'initedPage': payload.initedPage
        });
    }
});
