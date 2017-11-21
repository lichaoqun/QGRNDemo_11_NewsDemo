/**
 * Created by QG on 2017/11/16.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
/*
* ./ 当前目录
* ../ 父级目录
* / 根目录
 */

import data from './data.json';
import XMGSlidesShow from './XMGSlidesShow'
import ImageData from  './ImageData.json'
import XMGDetail from  './XMGDetail'

export default class XMGHome extends Component<{}> {

    static defaultProps = {
        url_api : 'https://3g.163.com/touch/jsonp/sy/recommend/0-9.html?hasad=1&miss=48&refresh=B02&offset=0&size=10&callback=syrec4',
        key_word : 'reverse'
    }

    state = {
        // - 顶部的 cell
        headerDataArr : [],

        // - 下边的 cell
        dataSource : new ListView.DataSource({
            rowHasChanged : (r1, r2)=> r1 !== r2
        })
    }

    render() {
        return (
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderRow.bind(this)}
                renderHeader = {this.renderHeader.bind(this)}

            />
        );
    }

    // - 请求网络数据
    componentDidMount(){

        // - 从网络拉数据
        //this.loadDataFromNet();

        // - 从本地获取数据
        this.loadDataFromLocal();

        // - 获取header 数据
        this.loadHeaderFromlocal();

    }

    loadDataFromNet = ()=> {
        fetch(this.props.url_api)
            .then((response)=>{
                console.log(this, this.state, this.props, this.props.url_api);
                var datas = response.bodyInit.json();
                console.log(datas);
                return datas;
            }).then((jsonData)=>{
                console.log(jsonData);
            }).catch((error) =>{
            // - 取本地的数据

        })
    }

    loadDataFromLocal = ()=>{
        var jsonData = data[this.props.key_word];
        console.log(jsonData);
        this.setState({
            dataSource : this.state.dataSource.cloneWithRows(jsonData)
        })

    }

    loadHeaderFromlocal(){
        var headerData = ImageData.data;
        //debugger; 可以用来添加断点
        this.setState({
            headerDataArr : headerData
        })
    }

    // - 设置listView 的 cell
    renderRow(rowData){
        return (
            <TouchableOpacity
                activeOpacity = {0.5}
                style = {styles.cellStyle}
                onPress = {()=>{
                    return this.pushToNewsDetail(rowData);
                }}
            >
                <View style = {styles.cellStyle}>

                    {/* 左边的 image */}

                    {/*
                     source = {{uri : model.url}}
                     */}

                    <Image style = {styles.imageStyle}
                           source = {{uri : 'https://img1.126.net/channel22/030400/1115-17/900-450.jpg'}}
                    />

                    <View style= {styles.rightViewStyle}>
                        {
                            /*
                             *
                             <Text style = {styles.titleStyle}>{model.title}</Text>
                             <Text style = {styles.subTitleStyle}>{model.subTitle}</Text>
                             <Text style = {styles.flowTitleStyle}>{`model.flowCount${this.props.url_api}`}</Text>
                             * */
                        }
                        <Text style = {styles.titleStyle}>全新第八代凯美瑞耀世登场</Text>
                        <Text style = {styles.subTitleStyle}>第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞</Text>
                        <Text style = {styles.flowTitleStyle}>{`111${this.props.key_word}`}</Text>
                    </View>

                </View>

            </TouchableOpacity>

        );
    }

    renderHeader(){
        return (
            <XMGSlidesShow
                ImageDatas = {this.state.headerDataArr}
            />
        )
    }

    pushToNewsDetail(rowData){

        /*
        * {adposition: 4, cbnum: 2637, prevent: "", url: "https://g.163.com/ur?site=netease&affiliate=3g&cat=homepage&type=wap_stream&location=1"}
        * */

        this.props.navigator.push({
            component :  XMGDetail,
            //title     : rowData.
            //passProps : rowData,

            title     :  '全新第八代凯美瑞耀世登场',
            passProps : {titleText : '全新第八代凯美瑞耀世登场第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞第八代凯美瑞'},
        })
    }


}

const styles = StyleSheet.create({

    cellStyle :{
        flexDirection : 'row',
        //alignItems : 'center',
        padding : 10,
        borderBottomColor : '#e8e8e8',
        borderBottomWidth : 0.5,
    },

    rightViewStyle :{
        width : 190,
        marginLeft : 10,
    },

    imageStyle:{
        width : 90,
        height : 90
    },

    titleStyle:{
        //fontSize : 10,
        marginBottom : 5,

    },

    subTitleStyle:{
        color : 'gray',
        //fontSize : 10,
    },

    flowTitleStyle : {
        position : 'absolute',
        right : 10,
        bottom : 0,
        borderWidth : 0.5,
        borderColor : 'gray',
        borderRadius : 5,
        padding :3,
        color : 'gray',

    }
})