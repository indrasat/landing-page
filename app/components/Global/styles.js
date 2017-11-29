
import {Image, StatusBar, Platform, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


export default StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    },
    buttonTab: {
        backgroundColor: "rgba(255,255,255,0.2)"
    },
    cardItemBanner: {
        height: 220,
        backgroundColor: "transparent",
        marginLeft: 10,
        marginRight: 10
    },
    cardList: {
        backgroundColor: "rgba(255,255,255,0.4)",
        paddingRight: 20,
        paddingLeft: 20,
        marginLeft: 10,
        marginRight: 10
    },
    cardListBorder: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.8)"
    },
    cardListBorderBottom: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    cardListItem: {
        backgroundColor: "transparent",
        marginLeft: 0,
        paddingTop: 5,
        paddingBottom: 5
    },
    cardListItemLast: {
        borderBottomWidth: 0
    },
    cardNotificationText: {
        color: "rgba(255,255,255,0.9)"
    },
    cardTitle: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingBottom: 0,
        paddingTop: 10
    },
    cardTransparent: {
        backgroundColor: "transparent",
        borderWidth: 0,
    },
    footerTab: {
        backgroundColor: colors.footerTab,
    },
    footerTabIcon: {
        fontSize: 30,
        color: colors.footerIcon,
    },
    footerTabIconActive: {
        color: colors.primary,
    },
    footerLabel: {
        fontSize: 7,
        color: colors.footerLabel,
    },
    footerLabelActive: {
        color: colors.primary,
    },
    footerTransparent: {
        backgroundColor: "transparent",
    },
    imageBanner: {
        flex: 1,
        borderRadius: 10,
        resizeMode: Image.resizeMode.contain
    },
    loadingView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    textTitleCard: {
        color: "white",
        fontSize:12
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor:'#61c4bd',
        height: APPBAR_HEIGHT,
    },
});