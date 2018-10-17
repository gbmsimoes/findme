import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 150
  }
};

export { Card };
