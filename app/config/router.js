import React from 'react';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import QFoodList from '../screen/QFoodList';
import Main from '../screen/Main';
import Checkout from "../screen/Checkout";
import colors from "./colors";
import QCar from '../screen/QCar';
import AddressDetail from '../screen/AddressDetail';
import MyRequest from "../screen/MyRequest";
import QFoodRequest from "../components/qfood/QFoodRequest";


export const QServedStack = StackNavigator({
    MainActivity:{
        screen: Main,
        navigationOptions:({ navigation}) => ({
            title:'Main',
            header:null,
        }),
    },
    QFood: {
        screen: QFoodList,
        navigationOptions: ({navigation}) => ({
            title: 'Q Food',
            headerRight: <Icon name="ios-basket-outline" size={25} style={{marginRight: 30}}/>,
        }),
    },
    Checkout:{
        screen: Checkout,
        navigationOptions:({ navigation}) => ({
            title: 'Booking Confirmation',
            headerStyle: {
                backgroundColor: colors.grayBackground,
                borderBottomWidth: 0 // removes the border on the bottom
            }
        }),
    },
    QCar: {
        screen: QCar,
        navigationOptions: ({navigation}) => ({
            title: 'QCar'
        })
    },
    AddressDetail: {
        screen: AddressDetail,
        navigationOptions: ({navigation}) => ({
            title: 'Address Detail'
        })
    },
    MyRequest: {
        screen: MyRequest,
        navigationOptions: ({navigation}) => ({
            title: 'My Request'
        })
    },
    QFoodRequest: {
        screen: QFoodRequest,
        navigationOptions: ({navigation}) => ({
            title: 'My Request'
        })
    },
})

