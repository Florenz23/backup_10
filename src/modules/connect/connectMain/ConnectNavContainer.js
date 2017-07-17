import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ConnectViewContainer from "./ConnectViewContainer"

class ConnectNavContainer extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Connect',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
          source={require('../../../../images/tabs/search.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
  };
  render() {
    return (
      <ConnectViewContainer />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

export default ConnectNavContainer;
