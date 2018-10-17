import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

const TransparentBackgroundAndHeader = (props) => {
    const { containerStyle, backButtonStyle } = styles;

    return (
            <Container style={ containerStyle }>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={props.leftAction}>
                            <Icon name="arrow-back" style={ backButtonStyle }/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{ props.title }</Title>
                    </Body>
                    <Right />
                </Header>
                {props.children}
            </Container>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#ffffff00'
    },
    backButtonStyle: {
        color: 'white'
    }
});

export { TransparentBackgroundAndHeader };