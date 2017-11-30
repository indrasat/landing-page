import React, {Component} from 'react';
const { FooterTab}  = require('native-base');
import styles from './styles';
import Menu from './Menu';

export default class MyFooterTab extends Component {
    constructor(props){
        super(props);
    }

    render(){

        return(
            <FooterTab style={styles.footerTab}>
                <Menu icon="ios-home" label="Home" active={true} doPress={this.props.goHome()}/>
                <Menu icon="ios-list-box-outline" label="Requests" doPress={this.props.goMyRequest()}/>
                <Menu icon="ios-help-circle" label="Help"/>
                <Menu icon="ios-person-outline" label="Profile"/>
            </FooterTab>
        );
    }
}
