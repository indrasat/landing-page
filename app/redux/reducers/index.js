import {combineReducers} from 'redux';

import Access from './AccessReducer';
import RequestError from './RequestErrorReducer';
import Navigation from './NavigationReducer'

const rootReducers = combineReducers({
    Routes: Navigation,
    User: Access,
    RequestError: RequestError
});

export default rootReducers