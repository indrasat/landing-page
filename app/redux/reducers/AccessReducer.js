import {AsyncStorage} from 'react-native';

import {ACTION_CONSTANTS} from "../actions/ActionConstants";
import {STORAGE_CONSTANTS} from "../actions/StorageConstants";

const initialState = {
    access_token : null,
    checkUser: false,
}

const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem(STORAGE_CONSTANTS.ACCESS_TOKEN, token);
    }catch (err){
        console.debug("Error Save["+STORAGE_CONSTANTS.ACCESS_TOKEN+"] : "+err);
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION_CONSTANTS.GET_TOKEN:
            return Object.assign({}, initialState, {
                access_token: action.token,
                checkUser: true
            })
        case ACTION_CONSTANTS.SAVE_TOKEN:
            saveToken(action.token);
            return Object.assign({}, initialState, {
                access_token: action.token,
                checkUser: true
            })
    }

    return state;
}
