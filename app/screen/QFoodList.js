import React, { Component } from 'react';
import {View, ScrollView, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const {Button, Footer, Container, Content, Input} = require("native-base");
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

import SliderEntry from '../components/qfood/SliderEntry';
//import styles, { colors } from 'example/src/styles/index.style';
import {styles, sliderWidth, itemWidth, MyChartFooter, QuantityInout} from '../components/qfood'
import { ENTRIES1} from '../static/entries';
import colors from "../config/colors";
import MyStatusBar from "../components/Global/MyStatusBar";
import QuantityInput from "../components/qfood/QuantityInput";

var value = 1

const SLIDER_1_FIRST_ITEM = 1;

class QFoodList extends Component {

    constructor (props) {
        super(props);
        this.goDetail = this.goDetail.bind(this);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null,
        };
    }

    goDetail(){
        this.props.navigation({routeName: 'DetailOrder'})
    }

    goCheckout(){
        this.props.navigation({routeName: 'Checkout'})
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    get example1 () {

        return (
            <View style={styles.exampleContainer}>
                <Carousel
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    enableMomentum={false}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={3}
                    autoplay={false}
                />

            </View>
        );
    }


    render () {
        return (
            <Container  style={{flex:1, backgroundColor:colors.background}}>
                <Content>
                    <ScrollView
                        style={styles.scrollview}
                        contentContainerStyle={styles.scrollviewContentContainer}
                        scrollEventThrottle={200}
                        directionalLockEnabled={true}
                    >
                        { this.example1 }

                    </ScrollView>
                </Content>
                <Footer>
                    <MyChartFooter totalItem={this.state.qty} onPress={this.goCheckout.bind(this)}/>
                </Footer>

            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        navigation: (route) => {
            dispatch(NavigationActions.navigate(route))
        }
    }
}

export default connect(null, mapDispatchToProps)(QFoodList);