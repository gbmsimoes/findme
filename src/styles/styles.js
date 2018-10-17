import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundContainerStyle: {
        flex: 1,
        margin: 0
    },
    loginTopContainer: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    loginBottomContainer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    roundedItemStyle: {
        borderColor: '#ffffffCC'

    },
    pillInputStyle: {
        color: '#fff',
        paddingRight: 5,
        paddingLeft: 20,
        fontSize: 16,
        lineHeight: 20,
        flex: 2,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});