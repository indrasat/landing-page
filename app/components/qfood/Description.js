import React from 'react';
const { FooterTab}  = require('native-base');
import styles from './styles';
import {Text, View, Dimensions} from "react-native";
import colors from "../../config/colors";

const Description = () =>{
    return(
        <View style={[styles.container,{width:Dimensions.get('window').width*0.75, alignSelf:'center'} ]}>
            <Text style={{fontSize:40, alignSelf:'center', textAlign:'center', color: colors.primary}}>TEA</Text>
            <Text style={{fontSize:15, alignSelf:'center', textAlign:'center', color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur sapien eget auctor rhoncus. Sed aliquet, ante vel faucibus convallis, odio dui euismod libero, id cursus elit sem sit amet nulla.</Text>
        </View>
    )
}

export default Description;