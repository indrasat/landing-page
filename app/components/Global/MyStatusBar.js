import React from 'react';
import {StatusBar, View} from 'react-native';
import styles from './styles';
const MyStatusBar = ({backgroundColor, ...props}) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
);

export default MyStatusBar;