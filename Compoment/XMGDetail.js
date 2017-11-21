/**
 * Created by QG on 2017/11/21.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

export default class XMGDetail extends Component<{}> {

    state = {
        detailData : '',

    }

    render() {
        return (
        <WebView
            automaticallyAdjustContentInsets={true}
            source={{html: this.state.detailData, baseUrl : ''}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            scalesPageToFit={this.state.scalesPageToFit}
        />
        );
    }

    componentDidMount(){
        /*
        * {navigator: {…}, route: {…}, titleText: "全新第八代凯美瑞耀世登场第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞"}
        * */
        console.log(this.props);
        this.setState({
            detailData : this.props.titleText,
        })
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