import {createReducer} from '../utils';
import {push} from 'redux-router';

const initialState = {
    isAuthenticating: false,
    statusText: null
};

export default createReducer(initialState, {
    ['LOGIN_USER_REQUEST']: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            'statusText': null
        });
    }
});
