import React from 'react';
import { Button, Text } from 'native-base';

const TextButton = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <Button transparent onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </Button>
    );
};

const styles = {
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',


    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',

    }
};

export { TextButton };
