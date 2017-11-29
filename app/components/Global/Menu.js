import React from 'react';
const { FooterTab, Button, Text }  = require('native-base');
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Menu = ({icon, label, active = false}) =>{
    return(
        <Button vertical style={styles.buttonTab}>
            <Icon name={icon} style={[styles.footerTabIcon, active?styles.footerTabIconActive:undefined]}/>
            <Text style={[styles.footerLabel, active?styles.footerLabelActive:undefined]}>{label}</Text>
        </Button>
    )
}

export default Menu;