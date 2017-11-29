import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import {Container, Content, Spinner} from 'native-base';

import Colors from '../../config/colors';
import styles from "./styles";

export default class Loading extends Component {

    render() {

        return (
            <Container>
                    <Content>
                        <View style={styles.loadingView}>
                            <Spinner color={Colors.primary}/>
                        </View>
                    </Content>
            </Container>
        );
    }
}