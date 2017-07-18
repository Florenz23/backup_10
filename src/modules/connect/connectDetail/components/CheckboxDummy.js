
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, CheckBox, Text, Left, Right, Body } from 'native-base';

export default class CheckboxDummy extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      checkbox1: true,
      checkbox2: false,
      checkbox3: false,
      checkbox4: true,
      checkbox5: false,
      checkbox6: true,
      checkbox7: true,
      checkbox8: true,
      checkbox9: false,
      checkbox10: true,
    };
  }

  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1,
    });
  }

  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2,
    });
  }

  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3,
    });
  }

  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4,
    });
  }
  toggleSwitch5() {
    this.setState({
      checkbox5: !this.state.checkbox5,
    });
  }
  toggleSwitch6() {
    this.setState({
      checkbox6: !this.state.checkbox6,
    });
  }
  toggleSwitch5() {
    this.setState({
      checkbox5: !this.state.checkbox5,
    });
  }
  toggleSwitch6() {
    this.setState({
      checkbox6: !this.state.checkbox6,
    });
  }
  toggleSwitch7() {
    this.setState({
      checkbox7: !this.state.checkbox7,
    });
  }
  toggleSwitch8() {
    this.setState({
      checkbox8: !this.state.checkbox8,
    });
  }
  toggleSwitch9() {
    this.setState({
      checkbox9: !this.state.checkbox9,
    });
  }
  toggleSwitch10() {
    this.setState({
      checkbox10: !this.state.checkbox10,
    });
  }

  render() {
    return (
      <Container >
        <Content>
          <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox color="green" checked={this.state.checkbox1} onPress={() => this.toggleSwitch1()} />
            <Body>
              <Text>Vorname</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox color="green" checked={this.state.checkbox2} onPress={() => this.toggleSwitch2()} />
            <Body>
              <Text>Name</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox color="green" checked={this.state.checkbox3} onPress={() => this.toggleSwitch3()} />
            <Body>
              <Text>Handy</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox color="green" checked={this.state.checkbox4} onPress={() => this.toggleSwitch4()} />
            <Body>
              <Text>Image</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch5()}>
            <CheckBox color="green" checked={this.state.checkbox5} onPress={() => this.toggleSwitch5()} />
            <Body>
              <Text>Facebook</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch6()}>
            <CheckBox color="green" checked={this.state.checkbox6} onPress={() => this.toggleSwitch6()} />
            <Body>
              <Text>LinkedIn</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch7()}>
            <CheckBox color="green" checked={this.state.checkbox7} onPress={() => this.toggleSwitch7()} />
            <Body>
              <Text>Twitter</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch8()}>
            <CheckBox color="green" checked={this.state.checkbox8} onPress={() => this.toggleSwitch8()} />
            <Body>
              <Text>Beruf</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch9()}>
            <CheckBox color="green" checked={this.state.checkbox9} onPress={() => this.toggleSwitch9()} />
            <Body>
              <Text>Wohnort</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch10()}>
            <CheckBox color="green" checked={this.state.checkbox10} onPress={() => this.toggleSwitch10()} />
            <Body>
              <Text>Lieblingsfarbe</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
