import React from 'react';
import {View, Text, TextInput} from 'react-native';
const {Button} = require("native-base");

const QuantityInput = ({value, onIncrease, onDecrease}) =>{
    return(
        <View style={{height:30, flexDirection:"row", alignSelf:'center'}}>
            <Button onPress={onDecrease} block style={{height:30, padding:10, backgroundColor:'white', borderColor: 'lightgrey',}} bordered>
                <Text style={{color:'black'}}>-</Text>
            </Button>
            <TextInput
                value={value.toString()}
                keyboardType='number-pad'
                defaultValue='1'
                style={{
                    color:'black',
                    borderWidth: 1,  // size/width of the border
                    borderColor: 'lightgrey',  // color of the border
                    backgroundColor:'white',
                    textAlign:'center',
                    fontSize:10,
                    width:40,
                    height:30,
                    padding: 5
                }}
            />
            <Button onPress={onIncrease} block style={{height:30, padding:10, backgroundColor:'white', borderColor: 'lightgrey',}} bordered>
                <Text style={{color:'black'}}>+</Text>
            </Button>
        </View>
    )
}

export default QuantityInput;