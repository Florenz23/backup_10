import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import ThreadNavContainer from '../chat/chatMain/ThreadNavContainer';
import ThreadViewContainer from '../chat/chatMain/ThreadViewContainer';
import ThreadDetailViewContainer from '../chat/chatDetail/ThreadDetailViewContainer';
import ContactNavContainer from '../contacts/contactMain/ContactNavContainer';
import ContactViewContainer from '../contacts/contactMain/ContactViewContainer';
import ContactDetailViewContainer from '../contacts/contactDetail/ContactDetailViewContainer';
import SettingsNavContainer from '../settings/SettingsNavContainer';
import ConnectNavContainer from '../connect/connectMain/ConnectNavContainer';
import ConnectViewContainer from '../connect/connectMain/ConnectViewContainer';
import ConnectDetailViewContainer from '../connect/connectDetail/ConnectDetailViewContainer';

import React, {Component } from 'react'
import { Image, Button, StyleSheet } from 'react-native'

// const headerColor = 'rgb(20,152,255)';
const headerColor = '#f5fffa';
const activeColor = 'rgb(59,89,152)';
// TabNavigator is nested inside StackNavigator
// here roots are defined


const MainNavigator = TabNavigator({
  Home: {
    screen: ConnectNavContainer,
    navigationOptions: { title: 'Connect' }
  },
  Chat: {
    screen: ThreadNavContainer,
    navigationOptions: { title: 'Chat' }
  },
  Contacts: {
    screen: ContactNavContainer,
    navigationOptions: { title: 'Contacts' }
  },
  Settings: {
    screen: SettingsNavContainer,
    navigationOptions: { title: 'Settings' }
  },
},
 {
    tabBarOptions: {
       activeTintColor: activeColor,
      ...Platform.select({
    android: {
      activeTintColor: activeColor,
      showIcon : true,
      inactiveTintColor: 'grey',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle : {
       width: 20,
       height: 20,
      },
      style: {
        backgroundColor: headerColor,
      },
    }
    })

    }
});

const AppNavigator = StackNavigator({
  Home: {screen: MainNavigator},
  InfiniteColorStack: {screen: ConnectNavContainer},
  ThreadDetailViewContainer: {screen: ThreadDetailViewContainer},
  ConnectDetail : {screen: ConnectDetailViewContainer},
});


// export default MainNavigator;

export default AppNavigator
