/**
 * Created by QG on 2017/11/16.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class XMGMine extends Component<{}> {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    XMGMine
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'red'
    }

})