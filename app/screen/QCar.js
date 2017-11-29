import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity, Picker} from 'react-native';
import MapView from 'react-native-maps';
import colors from "../config/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker'
import styles from "../components/qfood/styles";
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
const {Footer, Content, Container, List, ListItem, Left, Body, Right, Button, Input, Item, Form, Label} = require('native-base');

const USER_CURRENT_LATITUDE = -5.7759361;
const USER_CURRENT_LONGITUDE = 106.1174576;
const GEOCODE_URL = "https://maps.googleapis.com/maps/api/geocode/json"
const GMAP_KEY = 'AIzaSyD6UnegaFAYHXkoPPAfmExLFHPQLN_uuLw';

const SENDING_NOTIF = "Your order has been submitted";
const SENDER = "QCar";

class QCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dari: undefined,
            ke: undefined,
            dariCommit: undefined,
            keCommit:undefined,
            dariFocus : false,
            keFocus : false,
            latitude: USER_CURRENT_LATITUDE,
            longitude: USER_CURRENT_LONGITUDE,
            addresses:[],
            date:undefined,
            selectedService:1,
            timeStart:undefined,
            timeEnd:undefined,
        }
    }

    getAddressList(component){
        var querystring = "";
        let params = {
            key: 'AIzaSyD6UnegaFAYHXkoPPAfmExLFHPQLN_uuLw',
            latlng: this.state.latitude+','+this.state.longitude,
        };
        let qs = JSON.stringify(params);
        var url = GEOCODE_URL+`?key=`+GMAP_KEY+'&address=';
        url =  (component === 'ke')?url+this.state.ke:url+this.state.dari;
        url =  url+"&latlng="+this.state.latitude+','+this.state.longitude;

        if((this.state.dari !== undefined) ||  (this.state.ke !== undefined) ){
            this.state.addresses = [];
            fetch(url)
                .then((res) => res.json())
                .then((json) => {
                    if (json.status !== 'OK') {
                        //throw new Error(`Geocode error: ${json.status}`);
                    }
                    json.results.map(d =>{
                        this.state.addresses.push({
                            formatted_address:d.formatted_address,
                            active_component: component
                        });
                    })
                }).done();
        }

    }

    goHome(){
        this.props.navigation({routeName: 'MainActivity'})
    }

    _inputHandle(text){
        this.setState(text)
        this.getAddressList(text.component)
    }

    screenHeight = Dimensions.get('window').height;
    screenWidth = Dimensions.get('window').width;
    render() {
        return (
            <Container style={{backgroundColor:colors.primary}}>
                <MapView
                    style={{ left:0, right: 0, top:0, position: 'absolute', height: this.screenHeight}}
                    initialRegion={{
                        latitude: -6.229728,
                        longitude: 106.6894291,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <View style={{backgroundColor:'white',marginTop:30, marginRight:15, marginLeft:15}}>
                    <Item  style={{backgroundColor:'white', marginBottom:5}}>
                        <Icon name='ios-pin' size={30} color={colors.primary} style={{marginHorizontal:15}}/>
                        <Input placeholder='Dari'
                               value={this.state.dari}
                               onChangeText={(text) => this._inputHandle({dari:text, component:'dari', dariCommit:false})}
                               onFocus={() => this.setState({dariFocus:true})}
                               onBlur={() => this.setState({dariFocus:false})}
                        />
                    </Item>
                    <Item  style={{backgroundColor:'white', marginBottom:5}}>
                        <Icon name='ios-pin' size={30} color={colors.primaryLight} style={{marginHorizontal:15}}/>
                        <Input placeholder='Ke'
                               value={this.state.ke}
                               onChangeText={(text) => this._inputHandle({ke:text, component:'ke', keCommit:false})}
                               onFocus={() => this.setState({keFocus:true})}
                               onBlur={() => this.setState({keFocus:false})}
                        />
                    </Item>
                </View>
                    {this.state.dariFocus || this.state.keFocus?
                            <List>
                                {this.state.addresses.reverse().map(d => (
                                        <ListItem
                                            onPress={() =>
                                                d.active_component === 'dari'?
                                                        this.setState({dari:d.formatted_address, dariCommit:true})
                                                   :
                                                        this.setState({ke:d.formatted_address, keCommit:true})
                                        }>
                                            <Icon name='ios-pin' size={30} color={colors.primary} style={{marginHorizontal:15}}/>
                                            <Body>
                                            <Text style={{color:'black'}}>{d.formatted_address}</Text>
                                            </Body>
                                        </ListItem>
                                ))}
                            </List>
                        :undefined
                    }
                {this.state.dariCommit && this.state.keCommit?
                    <View style={{backgroundColor:'white',marginTop:30, marginRight:15, marginLeft:15}}>
                        <Form>
                            <Item stackedLabel style={{borderBottomWidth:0}}>
                                <Label>Date</Label>
                                <DatePicker
                                    style={{borderWidth:0}}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="Select date"
                                    format="DD-MM-YYYY"
                                    minDate="01-05-2016"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    androidMode={"spinner"}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                    showIcon={false}
                                />
                            </Item>
                            <Item stackedLabel style={{borderBottomWidth:0, paddingVertical:20}}>
                                <Label>Type Service</Label>
                            </Item>
                            <Picker
                                mode="dropdown"
                                placeholder="Select Service"
                                style={{color:'black', backgroundColor:'white', marginLeft:5}}
                                selectedValue={this.state.selectedService}
                                onValueChange={(itemValue, itemIndex) => this.setState({selectedService: itemValue})}
                            >
                                <Picker.Item label="Return" value="1" />
                                <Picker.Item label="Once" value="2" />
                            </Picker>
                            <View style={{flexDirection:'row',}}>
                                <Item stackedLabel style={{borderBottomWidth:0}}>
                                    <Label>Start</Label>
                                    <DatePicker
                                        style={{borderWidth:0, marginTop:10}}
                                        date={this.state.timeStart}
                                        mode="time"
                                        placeholder="Start"
                                        format="h:mm A"
                                        androidMode={"spinner"}
                                        onDateChange={(date) => {this.setState({timeStart: date})}}
                                        showIcon={false}
                                    />
                                </Item>
                                <Item stackedLabel style={{borderBottomWidth:0}}>
                                    <Label>End</Label>
                                    <DatePicker
                                        style={{borderWidth:0, marginTop:10}}
                                        date={this.state.timeEnd}
                                        mode="time"
                                        placeholder="End"
                                        format="h:mm A"
                                        androidMode={"spinner"}
                                        onDateChange={(date) => {this.setState({timeStart: date})}}
                                        showIcon={false}
                                    />
                                </Item>
                            </View>
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
                        </Form>
                    </View>
                    : null
                }
            </Container>

        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        navigation: (route) => {
            dispatch(NavigationActions.navigate(route));
        }
    }
}

export default connect(null, mapDispatchToProps)(QCar);