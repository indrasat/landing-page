import React from 'react';
const { FooterTab}  = require('native-base');
import styles from './styles';
import Menu from './Menu';

const MyFooterTab = (goMyRequest) =>{
    return(
        <FooterTab style={styles.footerTab}>
            <Menu icon="ios-home" label="Home" active={true}/>
            <Menu icon="ios-list-box-outline" label="Requests" onPress={goMyRequest}/>
            <Menu icon="ios-help-circle" label="Help"/>
            <Menu icon="ios-person-outline" label="Profile"/>
        </FooterTab>
    )
}

export default MyFooterTab;