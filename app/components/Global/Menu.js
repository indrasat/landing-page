import React, {Component} from 'react';
const { FooterTab, Button, Text }  = require('native-base');
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default class Menu extends Component {
    constructor(props){
        super(props);
    }

    render(){

        return(
            <Button vertical style={styles.buttonTab} onPress={this.props.doPress}>
                <Icon name={this.props.icon} style={[styles.footerTabIcon, this.props.active?styles.footerTabIconActive:undefined]}/>
                <Text style={[styles.footerLabel, this.props.active?styles.footerLabelActive:undefined]}>{this.props.label}</Text>
            </Button>
        );
    }
}
