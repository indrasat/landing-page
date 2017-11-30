import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {ImageBackground, View, findNodeHandle, Image, StyleSheet, InteractionManager} from 'react-native';
import PropTypes from 'prop-types';
import ActionButton from 'react-native-fab-action-menu';
import { BlurView, VibrancyView } from 'react-native-blur';
const { Container, Content, Footer, Switch } = require('native-base');


import {Slider} from '../components/Home';
import {colors} from '../config';
import {MyFooterTab, MyStatusBar} from '../components/Global';
import {NotificationList} from '../components/Home';



class Home extends Component{

    imageLoaded() {
        // Workaround for a tricky race condition on initial load.
        InteractionManager.runAfterInteractions(() => {
            setTimeout(() => {
                this.setState({ viewRef: findNodeHandle(this.refs.backgroundImage) });
            }, 500);
        });
    }

    goMyRequest(){
        this.props.navigation({routeName: 'MyRequest'});
    }

    goQFood(){
        this.props.navigation({routeName: 'QFood'});
    }

    goQCar(){
        this.props.navigation({routeName: 'QCar'});
    }

    constructor(props) {
        super(props);

        this.state = {
            showBlur: false,
            position: 1,
            interval: null,
            viewRef: null,
        };
    }


    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 5000)});
    }

    renderBlurView() {
        const tintColor = ['#ffffff', '#000000'];
        if (this.state.blurType === 'xlight') tintColor.reverse();

        return (
            <View style={styles.container} >
                {this.state.viewRef && <BlurView
                    viewRef={this.state.viewRef}
                    style={styles.blurView}
                    blurRadius={9}
                    blurType={this.state.blurType}

                    // The following props are also available on Android:

                    // blurRadius={20}
                    // downsampleFactor={10}
                    // overlayColor={'rgba(0, 0, 255, .6)'}   // set a blue overlay
                />}



            </View>
        )
    }

    render(){
        return(
            <View
                style={styles.container}
            >
                <ImageBackground
                    source={require('../assets/images/ships.jpg')}
                    ref={'backgroundImage'}
                    onLoadEnd={this.imageLoaded.bind(this)}
                    style={styles.image}>
                    <Content style={{backgroundColor: "rgba(0,0,0,0.6)"}}>
                        <Slider
                            position={this.state.position}
                            onPositionChanged={position => this.setState({position})}/>

                        <NotificationList />
                    </Content>
                    <Footer style={styles.footerTransparent}>
                        <MyFooterTab goMyRequest={this.goMyRequest()}/>
                    </Footer>
                </ImageBackground>
                <ActionButton icon={
                    <Image source={require('../assets/icons/icon.png')} style={{ position: 'absolute', height:30,width:30}}/>
                }
                              buttonColor="white" position={"right"} onPress={()=>{this.setState({showBlur: !this.state.showBlur})}}
                              onOverlayPress={()=>{this.setState({showBlur: !this.state.showBlur})}} style={{marginBottom:50}}
                              bgColor={'rgba(0,0,0,0.7)'} size={50}
                >
                    <ActionButton.Item buttonColor={colors.primaryLight} title="QFood" onPress={() => {this.goQFood()}} size={50}>
                        <Image source={require('../assets/icons/QFood.png')} style={{height:30,width:30}}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={colors.primaryLight} title="QCar" onPress={() => {this.goQCar()}} size={50}>
                        <Image source={require('../assets/icons/QCar.png')} style={{height:30,width:30}}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonDisabled={true} buttonColor={colors.primaryLight} title="QMeeting" onPress={() => {}} size={50}>
                        <Image source={require('../assets/icons/QMeeting.png')} style={{height:30,width:30}}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonDisabled={true} buttonColor={colors.primaryLight} title="QService" onPress={() => console.log("notes tapped!")} size={50}>
                        <Image source={require('../assets/icons/QService.png')} style={{height:30,width:30}}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonDisabled={true} buttonColor={colors.primaryLight} title="QDirectory" onPress={() => {}} size={50}>
                        <Image source={require('../assets/icons/QDirectory.png')} style={{height:30,width:30}}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonDisabled={true} buttonColor={colors.primaryLight} title="QTravel" onPress={() => {}} size={50}>
                        <Image source={require('../assets/icons/QTravel.png')} style={{height:30,width:30}}/>
                    </ActionButton.Item>

                </ActionButton>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: null,
        height: null,
    },
    blurView: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF',
    },
    blurToggle: {
        position: 'absolute',
        top: 30,
        right: 10,
        alignItems: 'flex-end',
    },
});

ActionButton.Item.propTypes = {
    angle: PropTypes.number,
    radius: PropTypes.number,
    buttonColor: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.node.isRequired,
};

const mapStateToProps = state => {
    return {
        User: state.User
    };
}

const mapDispatchToProps = dispatch => {
    return {
        navigation: (route) => {
            dispatch(NavigationActions.navigate(route));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
