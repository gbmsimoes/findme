import React from 'react';
import { styles } from '../../styles/styles';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundContainer = (props) => {
    return (
        <LinearGradient
            style={styles.backgroundContainerStyle}
            start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={['#005C63', '#A5CF1B']}
        >
            {props.children}
        </LinearGradient>
    );
};

export { BackgroundContainer };