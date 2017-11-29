import {StyleSheet, Image} from 'react-native';
import Colors from '../../config/colors';

;

export const styles = StyleSheet.create({
    formStyle: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    iconForm: {
        color: 'white',
        fontSize: 20
    },
    inputForm: {
        color: 'white'
    },
    loginBackground: {
        flex: 1,
    },
    loginButton: {
        backgroundColor: Colors.primaryLight,
        marginVertical: 30,
    },
    modalConfirm: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    modalConfirmContent: {
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContent: {
        paddingHorizontal: 30,
        backgroundColor: 'rgba(0,0,0,0.6)'
    }
});