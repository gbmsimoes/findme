import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { styles } from '../../styles/styles'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { pillInputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={pillInputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export { Input };
