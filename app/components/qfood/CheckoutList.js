import React from 'react';
import {TouchableOpacity} from 'react-native';
const { FooterTab, Content, Left, Body, Right, View, Text, List, ListItem, Button}  = require('native-base');
import {Dimensions} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../../config/colors";
import QuantityInput from "./QuantityInput";
import CheckoutListItem from "./CheckoutListItem";

const CheckoutList = ({name, value, onIncrease, onDecrease}) =>{
    return(
        <List style={{backgroundColor:'white'}}>
            <CheckoutListItem name={name} value={value} onIncrease={onIncrease} onDecrease={onDecrease}/>
        </List>
    )
}

export default CheckoutList;