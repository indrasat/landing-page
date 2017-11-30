import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Footer } from 'native-base';
export default class QFoodRequest extends Component {

    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'white'}}>
                    <List>
                        <ListItem >
                            <Thumbnail size={80} source={require('../../assets/icons/QFood.png')} />
                            <Body>
                            <Text style={{fontWeight:'bold'}}>QFood</Text>
                            <Text note>Confrence Room</Text>
                            <Text style={{color:'orange'}}>Progress</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail size={80} source={require('../../assets/icons/QCar.png')} />
                            <Body>
                            <Text style={{fontWeight:'bold'}}>QCar</Text>
                            <Text note>Menara Prima 2</Text>
                            <Text style={{color:'orange'}}>Progress</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
