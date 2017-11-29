import React, { Component } from 'react';
const {Container, Content, Body, Right, List, ListItem, Left, Button} = require("native-base");
import {Dimensions, View, Text, TouchableOpacity, Alert} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

import {CheckoutList} from '../components/qfood';
import colors from "../config/colors";
import {styles} from "../components/Login/styles";
import Modal from 'react-native-modal';
const SENDING_NOTIF = "Your order has been submitted";
const SENDER = "QServed";
class Checkout extends Component{
    constructor (props) {
        super(props);
        this.state = {
            itemCount: 0,
            qty:0,
            sendOrder : false,
        };
    }

    goHome(){
        this.props.navigation({routeName: 'MainActivity'})
    }

    goQFood(){
        this.props.navigation({routeName: 'QFood'})
    }

    goAddressDetail(){
        this.props.navigation({routeName: 'AddressDetail'})
    }

    onHandleIncrease(){
        this.setState({qty: this.state.qty+1, itemCount:this.state.itemCount + 1})
    }

    onHandleDecrease(){
        this.setState({qty: this.state.qty-1, itemCount:this.state.itemCount-1})
    }

    render(){
        let notif = (
            <Modal isVisible={this.state.sendOrder} style={styles.modalConfirm}>
                <View style={[{
                    width: this.state.screenWidth * 0.8,
                    height: this.state.screenHeight * 0.4
                }, styles.modalConfirmContent]}>
                    <Text>tes</Text>
                    <Button block rounded
                            style={[styles.loginButton, {position: 'absolute', bottom: 10, left: 10, right: 10,}]}
                            onPress={() =>
                                this.goHome()
                            }>
                        <Text>OK</Text>
                    </Button>
                </View>
            </Modal>);

        return(
            <Container>
                <Content>
                    <View style={{backgroundColor:colors.grayBackground, paddingVertical:10}}>
                        <Text style={{marginLeft:25, fontSize:16, color:colors.primaryLight}}>Item to Deliver</Text>
                    </View>
                    <CheckoutList name={'Prestine'} value={15} onDoBack={this.goQFood.bind(this)} onIncrease={this.onHandleIncrease.bind(this)} onDecrease={this.onHandleDecrease.bind(this)} />
                    <TouchableOpacity onPress={() => this.goQFood.bind(this)} style={{alignSelf:'center'}}>
                        <Text style={{color:'blue'}}>+ Add More Items</Text>
                    </TouchableOpacity>
                    <List style={{backgroundColor:colors.primaryLight}}>
                        <ListItem style={{backgroundColor:colors.primaryLight}}>
                            <Body>
                            <Text style={{marginLeft:10, fontSize:18, color:'white'}}>Total Item</Text>
                            </Body>
                            <Right>
                                <Text style={{marginRight:15, fontSize:15, color:'white'}}>14</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <View style={{backgroundColor:colors.grayBackground,paddingVertical:10}}>
                        <Text style={{marginLeft:20, fontSize:16, color:colors.primaryLight}}>DELIVER AT</Text>
                    </View>
                    <List style={{backgroundColor:'white'}}>
                            <ListItem>
                                <Left>
                                    <Text style={{marginLeft:15, fontSize:14, color:'black'}}>Building</Text>
                                </Left>
                                <Body>
                                <Text style={{fontSize:12, color:'gray', alignSelf:'flex-end'}}>Meeting Room 3</Text>
                                <Text style={{fontSize:12, color:'gray', alignSelf:'flex-end'}}>Sinarmas Land Plaza 2</Text>
                                <Text style={{fontSize:12, color:'gray', alignSelf:'flex-end'}}>Floor 2, North Cubicle</Text>
                                </Body>
                                <Right>
                                    <TouchableOpacity onPress={this.goAddressDetail.bind(this)}>
                                        <Text style={{marginRight:10, fontSize:14, color:'gray'}}> > </Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                    </List>
                    <Button block rounded style={[styles.loginButton, {marginHorizontal:20}]} onPress={() =>
                        Alert.alert(
                            SENDER,
                            SENDING_NOTIF,
                            [
                                {text: 'OK', onPress: () => this.goHome()},
                            ],
                            { cancelable: false }
                        )
                    } >
                        <Text style={{color:'white'}}>ORDER</Text>
                    </Button>
                </Content>
                {notif}
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        navigation: (route) => {
            dispatch(NavigationActions.navigate(route));
        }
    }
}

export default connect(null, mapDispatchToProps)(Checkout);