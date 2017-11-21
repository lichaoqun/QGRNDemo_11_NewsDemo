/**
 * Created by QG on 2017/11/16.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

import XMGHome from './XMGHome';
import XMGFind from './XMGFind';
import XMGMessage from './XMGMessage';
import XMGMine from './XMGMine';

export default class XMGMain extends Component<{}> {

    state = {
        selectedTabBarItem : 'home'
    }

    render() {
        return (
            <TabBarIOS
                tintColor = 'orange'
            >

                {/** 首页 */}
                < TabBarIOS.Item
                    renderAsOriginal = {true}
                    icon = {{uri : 'tabbar_home', scale:2}}
                    selectedIcon = {{uri : 'tabbar_home_highlighted', scale:2}}
                    title = '首页'
                    selected = {this.state.selectedTabBarItem === 'home'}
                    onPress = {()=>{
                        this.setState({
                            selectedTabBarItem : 'home'
                        })
                    }}
                >
                    {/* 首页的导航栏 */}
                    <NavigatorIOS
                        style = {{flex : 1}}
                        tintColor = {'orange'}
                        tintColor = {'orange'}
                        initialRoute = {
                            {
                                component : XMGHome,
                                title : '首页',
                                leftButtonIcon : {uri : 'navigationbar_friendattention', scale:2},
                                rightButtonIcon : {uri : 'navigationbar_pop', scale:2},


                            }


                        }
                    />

                </TabBarIOS.Item>

                {/** 消息 */}
                < TabBarIOS.Item
                    renderAsOriginal = {true}
                    icon = {{uri : 'tabbar_message_center', scale:2}}
                    selectedIcon = {{uri : 'tabbar_message_center_highlighted', scale:2}}
                    title = '发现'
                    selected = {this.state.selectedTabBarItem === 'find'}
                    onPress = {()=>{
                        this.setState({
                            selectedTabBarItem : 'find'
                        })
                    }}
                >
                    {/* 消息的导航栏 */}
                    <NavigatorIOS
                        style = {{flex : 1}}
                        initialRoute = {
                            {
                                component : XMGMessage,
                                title : '消息',
                            }

                        }
                    />
                </TabBarIOS.Item>

                {/** 发现 */}
                < TabBarIOS.Item
                    renderAsOriginal = {true}
                    icon = {{uri : 'tabbar_discover', scale:2}}
                    selectedIcon = {{uri : 'tabbar_discover_highlighted', scale:2}}
                    title = '消息'
                    selected = {this.state.selectedTabBarItem === 'message'}
                    onPress = {()=>{
                        this.setState({
                            selectedTabBarItem : 'message'
                        })
                    }}
                >
                    {/* 发现的导航栏 */}
                    <NavigatorIOS
                        style = {{flex : 1}}
                        initialRoute = {
                            {
                                component :  XMGFind,
                                title : '发现',
                            }

                        }
                    />
                </TabBarIOS.Item>

                {/** 我的 */}
                <TabBarIOS.Item
                    renderAsOriginal = {true}
                    icon = {{uri : 'tabbar_profile', scale:2}}
                    selectedIcon = {{uri : 'tabbar_profile_highlighted', scale:2}}
                    title = '我的'
                    selected = {this.state.selectedTabBarItem === 'mine'}
                    onPress = {()=>{
                        this.setState({
                            selectedTabBarItem : 'mine'
                        })
                    }}
                >
                    {/* 我的的导航栏 */}
                    <NavigatorIOS
                        style = {{flex : 1}}
                        initialRoute = {
                            {
                                component : XMGMine,
                                title : '我的',
                            }

                        }
                    />
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({

})
