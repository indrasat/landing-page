import {ACTION_CONSTANTS} from '../actions/ActionConstants';

const initialState = {
    error : false,
    code: null,
    message: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case ACTION_CONSTANTS.LOGIN_ERROR:
            return Object.assign({}, initialState, {
                error: action.error,
                code: action.code,
                message: action.message
            })
    }

    return state;
}