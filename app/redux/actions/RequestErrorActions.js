import {STORAGE_CONSTANTS} from './StorageConstants';
import {ACTION_CONSTANTS} from './ActionConstants';
import {URI_CONSTANTS} from './URIConstants';

export const loginError = ({error, code, message}) => {
    console.debug("ErrorActions : "+error+":"+code+": "+message);
    return {
        type: ACTION_CONSTANTS.LOGIN_ERROR,
        error, code, message
    }
}