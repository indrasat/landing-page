import {AsyncStorage} from 'react-native';
import {STORAGE_CONSTANTS} from './StorageConstants';
import {ACTION_CONSTANTS} from './ActionConstants';
import {URI_CONSTANTS} from './URIConstants';

import {loginError} from './RequestErrorActions';

export const manageToken = ({type, token}) => {
    return {type, token}
}

export const getToken = () => {
    return dispatch => {
        return AsyncStorage.getItem(STORAGE_CONSTANTS.ACCESS_TOKEN)
            .then((token) => {
                dispatch(manageToken({type: ACTION_CONSTANTS.GET_TOKEN, token: token}));
            })
    }
}

export const doLogin = ({email, password}) => {
    return dispatch => {
        fetch(URI_CONSTANTS.AUTH_LOGIN, {
            method: 'POST',
            body: JSON.stringify({
                email, password
            }), headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }else if(response.status >= 300 && response.status < 600){
                const error = new Error(response.statusText || response.status);
                error.status = response.status;
                error.text = "Username or Password is Wrong!";
                return Promise.reject(error);
            }
        }).then(data => {
            //console.debug("Response post: " + data.access_token);
            const {access_token} = data;
            dispatch(manageToken({type: ACTION_CONSTANTS.SAVE_TOKEN, token: access_token}));
        }).catch(err => {
            if(typeof err.status === 'undefined'){
                err.status=408;
                err.text="Connection Error, Please Try Again!";
            }
            console.debug("Fetch Error[LOGIN]: " + err);
            dispatch(loginError({error: true, code: err.status, message: err.text}));
        }).done();
    }
}
