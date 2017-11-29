import React from 'react';

const {FooterTab, Content, Left, Body, Form, Item, Right, View, Text, List, ListItem, Button, Input} = require('native-base');
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../../config/colors";
import QuantityInput from "./QuantityInput";

const CheckoutListItem = ({name, value, onIncrease, onDecrease}) => {
    return (
        <ListItem style={{marginRight: 20}}>
            <Body>
            <View>
                <Form>
                    <Item style={{borderColor: 'transparent', justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, marginLeft: 15, marginTop: 10}}>{name}</Text>
                        <Right style={{marginTop: 20}}>
                            <QuantityInput value={value} onDecrease={onDecrease} onIncrease={onIncrease}/>
                        </Right>
                    </Item>
                    <Item style={{borderTopWidth: 1, borderBottomWidth: 0, marginBottom: -20, marginTop: 10}}>
                        <Input placeholder='Add Note'
                               style={[styles.inputForm, {marginLeft: 20, fontSize: 12}]}/>
                    </Item>
                </Form>
            </View>

            </Body>

        </ListItem>
    )
}

export default CheckoutListItem;