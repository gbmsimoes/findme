/**
 * Created by gbmsimoes on 26/05/2017.
 */

import React, { Component } from 'react';
import { Container, Button, Icon, Text, Spinner } from 'native-base';
import { Image, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';




const rightButtonConfig = {
    title: 'skip',
    tintColor: 'white',
    handler: () => Actions.main({ type: 'reset' }),
};


class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgImage: ''
        };

        this.onFacebookLoginButtonPress = this.onFacebookLoginButtonPress.bind(this);
        this.onLoginButtonPress = this.onLoginButtonPress.bind(this);
        this.onSignupButtonPress = this.onSignupButtonPress.bind(this);
    }

    componentWillMount() {
        this.setState({ bgImage: getRandomBackgroundImage() })

    }

    componentWillUnmount(){
        this.setState({ bgImage: '' });
    }

    componentDidMount() {
        console.log("PROPS: ", this.props.navigationState.children);

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                Actions.main();
            }
        });
    }

    onLoginButtonPress() {
        Actions.login();
    }

    onFacebookLoginButtonPress() {
        this.props.loginUserFacebook();
    }

    onSignupButtonPress() {
        Actions.signup();
    }

    renderFacebookButton(){
        const {
            facebookButtonStyle,
            facebookButtonTextStyle
        } = startViewStyles;

        if (this.props.loading){
            return <Spinner size="large"/>;
        }

        return (
            <Button iconLeft block style={facebookButtonStyle} onPress={this.onFacebookLoginButtonPress}>
                <Icon name='logo-facebook' />
                <Text style={facebookButtonTextStyle}>Continue with Facebook</Text>
            </Button>

        );
    }

    // Required to be able to post custom navigation bar
    static renderNavigationBar(props) {

    }

    loadNavigationBar() {
        return (
            <NavigationBar
                rightButton={rightButtonConfig}
                containerStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}

            />
        );
    }
    // End Navigation Bar

    render() {
        const {
            backgroundImageStyle,
            containerStyle,
            topContainerStyle,
            middleContainerStyle,
            bottomContainerStyle,
            loginButtonStyle,
            signupButtonStyle,

            loginButtonTextStyle
        } = startViewStyles;

        return (
            <Image source={ this.state.bgImage } style={backgroundImageStyle}>
                <Container style={containerStyle}>

                    <View style={topContainerStyle} >
                        { this.loadNavigationBar() }
                    </View>

                    <View style={middleContainerStyle}>



                        <Button block style={loginButtonStyle} onPress={ this.onLoginButtonPress }>
                            <Text style={loginButtonTextStyle}>Login</Text>
                        </Button>

                        <Button block transparent style={signupButtonStyle} onPress={ this.onSignupButtonPress }>
                            <Text style={loginButtonTextStyle}>Signup</Text>
                        </Button>

                        { this.renderFacebookButton() }
                    </View>
                    <View style={bottomContainerStyle} />

                </Container>

            </Image>
        );
    };
}


// Make the component available to other parts of the app
export default connect(null, { loginUserFacebook }) (Start);