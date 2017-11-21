/**
 * Created by QG on 2017/11/20.
 */
import React, { Component } from 'react';
import TimerMixin from 'react-timer-mixin';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import Dimensions from  'Dimensions';
var scrollViewWidth = Dimensions.get('window').width;

export default class XMGSlidesShow extends Component<{}> {

    static defaultProps = {
        duration : 1000,
        ImageDatas : []
    }

    state = {
        currentPage : 0,
        title : (this.props.ImageDatas.length > 0) ? this.props.ImageDatas[0].title : 'ad',
        //title : 'asdfsdfs'
    }


    render() {
        return (
            <View>
                <ScrollView
                    style  = {styles.scrollViewBgStyle}
                    horizontal = {true}
                    showHorizontalScrollIndicator  = {false}
                    pagingEnabled = {true}
                    ref = 'scrollView'

                    onMomentScrollEnd = {(scrollView) =>{
                    return this.scrollViewDidEndScroll(scrollView);
                }
            }
                    onScrollBeginDrag = { (scrollView) =>{
                    return this.scrollViewDidScrolling(scrollView);
                }

                }

                    onScrollEndDrag = {(scrollView) => {
                    return this.scrollViewDidEndDrag(scrollView);
                }}

                >
                    {/* scrollView 数据 */}
                    {this.getAllData()}

                </ScrollView>

                <View>
                    <View
                        style = {styles.pageViewStyle}

                    >
                        {/* pageView 数据*/}
                        {this.getPageView()}

                        <Text
                            style = {styles.titleStyle}
                        >
                            {this.state.title}
                        </Text>
                    </View>

                </View>
            </View>
        );
    }

    /** 开始耗时的操作 */
    componentDidMount(){
        //debugger; 可以用来加断点
        this.startTimer();
    }

    /** 开始计时器 */
    startTimer(){

        /** 获取计时器 */
        var scrollView = this.refs.scrollView;
        var self = this;

        /** 设置计时器执行的方法 */
        this.timer = setInterval(function(){
            var activePage = 0;

            /** 设置当前的 page */
            if((self.state.currentPage + 1) >= self.props.ImageDatas.length){
                activePage = 0;
            }else {
                activePage = (self.state.currentPage + 1);
            }

            /**  设置当前的page 对应的偏移量 */
            var offsetx = activePage * scrollViewWidth;

            /** scorllView 偏移 */
            scrollView.scrollResponderScrollTo({x:offsetx, y:0, animation:true});
            self.setState({
                currentPage:activePage,
                title : self.props.ImageDatas[activePage].title
            });

        }, this.props.duration);
    }

    getAllData(){
        var subViews = [];
        this.props.ImageDatas.forEach((value, index) =>{

            subViews.push(
                <View
                    key = {index}
                    style = {{height : 140, backgroundColor : 'red'}}
                >
                    <Image
                        source = {{uri : value.img}}
                        style = {{width : scrollViewWidth, height : 120}}
                    />

                </View>
            )
        })
        return subViews;
    }
    getPageView(){
        var indicatiorArr = [];
        this.props.ImageDatas.forEach((value, index)=>{
            var style = index == this.state.currentPage ? {color : 'orange'} : {color : 'gray'};
            indicatiorArr.push(
                <Text
                    key = {index}
                    style = {[style, {fontSize : 25}]}
                >
                    &bull;
                </Text>
            )
        })
        return indicatiorArr;
    }

    scrollViewDidEndScroll(scrollView){

        var offsetx = scrollView.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(offsetx / screenWidht);
        this.setState({
            currentPage:currentPage,
            title : self.props.ImageDatas[currentPage].title

        });
    }

    scrollViewDidScrolling(scrollView){
        clearInterval(this.timer);
    }

    scrollViewDidEndDrag(scrollView){
        this.startTimer();
    }
}

const styles = StyleSheet.create({

    scrollViewBgStyle:{
        height:120,
        backgroundColor:'green'
    },

    pageViewStyle:{
        width:scrollViewWidth,
        height:25,
        backgroundColor:'rgba(190, 190, 190, 0.4)',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10
    },

    titleStyle:{
        position:'absolute',
        right:10,
        color:'rgba(20, 20, 20, 0.4)'
    }

});