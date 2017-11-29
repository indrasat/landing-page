import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducers from './app/redux/reducers';
import Routes from './app/index';

const store = createStore(rootReducers, applyMiddleware(thunk));

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        )
    }
}

