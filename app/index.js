import React, {Component} from 'react';
import {View} from "react-native";
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';

import {QServedStack} from './config/router';
import MyStatusBar from "./components/Global/MyStatusBar";
import colors from "./config/colors";

class Routes extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MyStatusBar backgroundColor={colors.primary} barStyle="light-content"/>
                <QServedStack navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.Routes
                })}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Routes: state.Routes
    }
}

export default connect(mapStateToProps)(Routes)