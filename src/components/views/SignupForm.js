import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, repeatPasswordChanged, signupUser } from "../../actions";
import { styles } from '../../styles/styles';
import {
    CardSection,
    RoundedButton,
    Spinner,
    RoundedInput,
    BackgroundContainer,
    TransparentBackgroundAndHeader
} from "../common";

class SignupForm extends Component{
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
        this.onSignupButtonPress = this.onSignupButtonPress.bind(this);
    }

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onRepeatPasswordChange(text){
        this.props.repeatPasswordChanged(text);
    }

    onSignupButtonPress(){
        const { email, password, repeatPassword } = this.props;

        this.props.signupUser({ email, password, repeatPassword });
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
                onPress={this.onSignupButtonPress}
            >
                Submit
            </RoundedButton>
        );

    }

    render() {
        const { loginTopContainer, loginBottomContainer } = styles;

        return (
            <BackgroundContainer>
                <TransparentBackgroundAndHeader
                    leftAction={() => Actions.pop()}
                >
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
                        <RoundedInput
                            secureTextEntry
                            placeholder="Repeat Password"
                            onChangeText={this.onRepeatPasswordChange}
                            value={this.props.repeatPassword}
                        />
                    </CardSection>

                { this.renderError() }

                </View>
                <View style={loginBottomContainer}>
                    <CardSection>
                        { this.renderButton() }
                    </CardSection>
                </View>
                </TransparentBackgroundAndHeader>
            </BackgroundContainer>
        );
    }
}



const mapStateToProps = ({ auth }) => {
    const { email, password, repeatPassword, error, loading } = auth;

    return {
        email,
        password,
        repeatPassword,
        error,
        loading
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, repeatPasswordChanged, signupUser
}) (SignupForm);