import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import {ParallaxImage} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import colors from "../../config/colors";
import Description from "../../components/qfood/Description";
import CheckoutList from "./CheckoutList";

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object,
        qty: PropTypes.number,
        itemCount: PropTypes.number

    };


    get image() {
        const {data: {illustration}, parallax, parallaxProps, even} = this.props;

        return parallax ? (
            <ParallaxImage
                source={{uri: illustration}}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={[styles.image, {position: 'relative'}]}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
            <Image
                source={{uri: illustration}}
                style={styles.image}
            />
        );
    }

    render() {
        const {data: {title, subtitle}, even} = this.props;

        const uppercaseTitle = title ? (
            <Text
                style={[styles.title, even ? styles.titleEven : {}]}
                numberOfLines={2}
            >
                {title.toUpperCase()}
            </Text>
        ) : false;

        return (
            <View style={{flex: 1}}>
                <View style={[styles.imageContainer, styles.slideInnerContainer]}>
                    {this.image}
                </View>
                <Description/>
                <CheckoutList name={'Teh Manis'} value={1}/>
                <CheckoutList name={'Teh Tawar'} value={0}/>
            </View>
        );
    }
}
