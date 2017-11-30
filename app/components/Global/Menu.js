import React from 'react';
const { FooterTab, Button, Text }  = require('native-base');
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Menu = ({icon, label, active = false, onPress}) =>{
    return(
        <TouchableOpacity onPress={() => onPress}>
            <Button vertical style={styles.buttonTab}>
                <Icon name={icon} style={[styles.footerTabIcon, active?styles.footerTabIconActive:undefined]}/>
                <Text style={[styles.footerLabel, active?styles.footerLabelActive:undefined]}>{label}</Text>
            </Button>
        </TouchableOpacity>
    )
}

export default Menu;