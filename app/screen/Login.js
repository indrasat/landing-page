import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimensions, ImageBackground, Image, View, TouchableHighlight, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Button, Container, Content, Col, Form, Grid, Icon, Input, Item, Right, Row, Spinner, Text} from 'native-base';

import Colors from '../config/colors';
import {doLogin} from '../redux/actions/MainActions';
import {loginError} from '../redux/actions/RequestErrorActions';
import {styles} from '../components/Login/styles';
import globalStyles from '../components/Global/styles';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('window').width,
            screenHeight: Dimensions.get('window').height,
            doLogin: false,
            email: '',
            password: '',
            secretPassword: true,
        }
    }

    componentDidMount() {
        _this2 = this;
        Dimensions.addEventListener('change', (e) => {
            const {height, width} = e.window;
            _this2.setState({screenWidth: width, screenHeight: height});
        })
    }

    seePassword(){
        if(this.state.secretPassword){
            this.setState({secretPassword: false})
        }else{
            this.setState({secretPassword: true})
        }
    }

    doLogin() {
        this.setState({doLogin: true});
        this.props.doLogin({email: this.state.email, password: this.state.password});
    }

    closeModal() {
        this.setState({doLogin: false});
        this.props.loginError({error: false});
    }

    render() {
        const header = (this.state.screenWidth > this.state.screenHeight) ? 0.35 : 0.5;
        const logoHeightRasio = (this.state.screenWidth > this.state.screenHeight) ? 1 : 0.3;

        let Loading = null;
        if (!this.props.RequestError.error) {
            if (this.state.doLogin) {
                Loading = (<View style={globalStyles.loadingView}>
                    <Spinner color={Colors.primary}/>
                </View>);
            }
        }

        let confirm = (
            <Modal isVisible={this.props.RequestError.error} style={styles.modalConfirm}>
                <View style={[{
                    width: this.state.screenWidth * 0.8,
                    height: this.state.screenHeight * 0.4
                }, styles.modalConfirmContent]}>
                    <Text>{this.props.RequestError.message}</Text>
                    <Button block rounded
                            style={[styles.loginButton, {position: 'absolute', bottom: 10, left: 10, right: 10,}]}
                            onPress={() => this.closeModal()}>
                        <Text>OK</Text>
                    </Button>
                </View>
            </Modal>);

        return (
            <Container>
                <ImageBackground source={require('../assets/images/login-background.jpg')}
                                 style={styles.loginBackground}>
                    <Content style={styles.mainContent}>

                        <Grid>
                            <Row>
                                <Col style={{
                                    height: this.state.screenHeight * header,
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <Image source={require('../assets/images/logo.png')}
                                           style={{
                                               width: this.state.screenWidth * 0.7,
                                               height: this.state.screenHeight * header * logoHeightRasio,
                                               resizeMode: 'center'
                                           }}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form style={styles.formStyle}>
                                        <Item>
                                            <Icon name='ios-person-outline' style={styles.iconForm}/>
                                            <Input placeholder='Email' placeholderTextColor='white'
                                                   style={styles.inputForm}
                                                   onChangeText={(text) => this.setState({email: text})}/>
                                        </Item>
                                        <Item style={{marginTop: 20}}>
                                            <Icon name='ios-key-outline' style={styles.iconForm}/>
                                            <Input placeholder='Password' placeholderTextColor='white'
                                                   style={styles.inputForm} secureTextEntry={this.state.secretPassword}
                                                   onChangeText={(text) => this.setState({password: text})}/>
                                            <TouchableOpacity activeOpacity={8.5} onPress={() => this.seePassword()}>
                                                <Icon name={(this.state.secretPassword)? 'md-eye-off' : 'md-eye'} style={styles.iconForm}/>
                                            </TouchableOpacity>
                                        </Item>
                                        <Item style={{marginTop: 20, borderColor: 'transparent'}} >
                                            <Right>
                                                <Text style={{fontSize: 10, color: 'white'}}>Forgot Password? </Text>
                                            </Right>
                                        </Item>
                                        <Button block rounded style={styles.loginButton} onPress={() => this.doLogin()}>
                                            <Text>Login</Text>
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
                </ImageBackground>
                {Loading}
                {confirm}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        RequestError: state.RequestError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: ({email, password}) => {
            dispatch(doLogin({email, password}))
        },
        loginError: (bool) => {
            dispatch(loginError(bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);