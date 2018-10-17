import React from 'react';
import { Item, Input, View } from 'native-base';
import { styles } from '../../styles/styles';

const RoundedInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { pillInputStyle, containerStyle, roundedItemStyle } = styles;

    return (
        <View style={containerStyle}>
            <Item rounded style={ roundedItemStyle }>
                <Input
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    placeholderTextColor='#ffffffCC'
                    autoCorrect={false}
                    style={pillInputStyle}
                    value={value}
                    onChangeText={onChangeText}
                />
            </Item>
        </View>
    );
};

export { RoundedInput };