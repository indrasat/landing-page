import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getToken} from '../redux/actions/MainActions';

import Login from './Login';
import Home from './Home';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAccessToken();
    }

    render() {

        if (!this.props.User.checkUser) {
            return null
        } else {
            if (this.props.User.access_token!=null) {
                return <Home/>
            } else {
                return <Login/>
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        User: state.User
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAccessToken: () => {
            dispatch(getToken())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);