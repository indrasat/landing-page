import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Footer } from 'native-base';
import MyFooterTab from "../components/Global/MyFooterTab";
import styles from "../components/Global/styles";
import {QFoodRequest} from "../components/qfood";
export default class DetailRequest extends Component {

    render() {
        return (
            <Container>
                <QFoodRequest/>
            </Container>
        );
    }
}
