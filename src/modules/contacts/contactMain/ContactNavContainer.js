import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ContactViewContainer from "./ContactViewContainer"

class ContactNavContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Contacts',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../../../images/tabs/contacts.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <ContactViewContainer />
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

export default ContactNavContainer;
