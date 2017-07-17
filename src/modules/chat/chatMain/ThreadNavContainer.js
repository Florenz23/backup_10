import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ThreadViewContainer from "./ThreadViewContainer"

class ThreadNavContainer extends Component {
  static displayName = 'ColorView';

  static navigationOptions = {
    tabBarLabel: 'Chat',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor, props }) => (
      <Image
        source={require('../../../../images/tabs/chat.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <ThreadViewContainer />
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

export default ThreadNavContainer;
