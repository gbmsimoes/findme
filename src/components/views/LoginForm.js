import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from "../../actions";
import { styles } from '../../styles/styles';
import { CardSection, RoundedButton, Spinner, RoundedInput, BackgroundContainer, TextButton } from "../common";

class LoginForm extends Component{
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginButtonPress = this.onLoginButtonPress.bind(this);
        this.onForgotPasswordButtonPress = this.onForgotPasswordButtonPress.bind(this);
        this.onSignupButtonPress = this.onSignupButtonPress.bind(this);
    }

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onLoginButtonPress(){
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    onForgotPasswordButtonPress(){
        console.log("onForgotPasswordButtonPress")
        Actions.forgotPasswordForm();
    }

    onSignupButtonPress(){
        console.log("onSignupButtonPress")
        Actions.signupForm();
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        { this.props.error }
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if(this.props.loading){
            return <Spinner size="large" />
        }

        return (
            <RoundedButton
                onPress={this.onLoginButtonPress}
            >
                Login
            </RoundedButton>
        );

    }

    render() {
        const { loginTopContainer, loginBottomContainer } = styles;

        return (
            <BackgroundContainer>

                <View style={ loginTopContainer }>
                <CardSection>
                    <RoundedInput
                        placeholder="Email"
                        onChangeText={this.onEmailChange.bind(this)}
                        value = {this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <RoundedInput
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={this.onPasswordChange}
                        value={this.props.password}
                    />
                </CardSection>
                    <CardSection>
                        <TextButton
                            onPress={this.onForgotPasswordButtonPress}
                        >
                            forgot password?
                        </TextButton>

                    </CardSection>
                    <CardSection>
                        <TextButton
                            onPress={this.onSignupButtonPress}
                        >
                            Signup
                        </TextButton>

                    </CardSection>

                { this.renderError() }

                </View>
                <View style={loginBottomContainer}>
                    <CardSection>
                        { this.renderButton() }
                    </CardSection>
                </View>
            </BackgroundContainer>
        );
    }
}



const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
}) (LoginForm);