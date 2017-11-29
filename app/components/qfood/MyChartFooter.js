import React from 'react';
import {TouchableOpacity} from 'react-native';
const { FooterTab, Content, Left, Body, Right, View, Text, List, ListItem}  = require('native-base');
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const MyChartFooter = ({totalItem = 0, onPress}) =>{
    return(
        <FooterTab style={styles.footerTab}>
            <View style={{flex:1, flexDirection:"row"}}>
                <Left>
                    <Icon name='ios-cart-outline' color={'white'} size={30} style={{marginLeft:30}}/>
                </Left>
                <Body >
                    <Text style={{fontSize:10, color:'white', alignSelf:'flex-start'}}>Total Items</Text>
                    <Text style={{fontSize:14, fontWeight:'bold', color:'white', alignSelf:'flex-start'}}>{totalItem}</Text>
                </Body>
                <Right>
                    <TouchableOpacity onPress={onPress}>
                        <Icon name='ios-arrow-forward' color={'white'} size={30}  style={{marginRight:30}}/>
                    </TouchableOpacity>
                </Right>
            </View>
        </FooterTab>
    )
}

export default MyChartFooter;