import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem, Input  } from "native-base";
import {styles} from '../components/qfood'
const Item = Picker.Item;
export default class AddressDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBuilding: undefined,
            selectedFloor: undefined
        };
    }
    onValueBuilding(value: string) {
        this.setState({
            selectedBuilding: value
        });
    }
    onValueFloor(value: string) {
        this.setState({
            selectedFloor: value
        });
    }

    goCheckout(){
        this.props.navigation.navigate('Checkout')
    }
    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'white'}}>
                    <Form>
                        <Picker
                            mode="dropdown"
                            placeholder="Select Building"
                            selectedValue={this.state.selectedBuilding}
                            onValueChange={this.onValueBuilding.bind(this)}
                            style={{marginLeft:18,color:'black', backgroundColor:'white'}}
                        >
                            <Item label="Sinarmas Land Plaza Tower 1" value="1" />
                            <Item label="Sinarmas Land Plaza Tower 2" value="2" />
                        </Picker>
                        <Picker
                            mode="dropdown"
                            placeholder="Select Floor"
                            selectedValue={this.state.selectedFloor}
                            onValueChange={this.onValueFloor.bind(this)}
                            style={{marginLeft:18,color:'black', backgroundColor:'white'}}
                        >
                            <Item label="Floor 1" value="1" />
                            <Item label="Floor 2" value="2" />
                        </Picker>
                        <Input placeholder='Notes'
                               style={[styles.inputForm,{marginLeft:20}]}
                               onChangeText={(text) => this.setState({email: text})}/>
                        <Button block rounded style={[styles.loginButton, {marginHorizontal:20}]} onPress={() => this.goCheckout()} >
                            <Text style={{color:'white'}}>SET DELIVERY</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}