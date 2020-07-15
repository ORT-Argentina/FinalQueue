import React, { Component, memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Title from '../components/Title';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import axios from "axios"
import deviceStorage from '../services/deviceStorage';

import { Dialog, Portal } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

class Dashboard extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      loading: true,
      visible: false
    };

    this.loadUser = deviceStorage.loadUser.bind(this);
    this.loadUser();
  }


  _hide = () => this.setState({ visible: false });

  _logout = ({ navigation }) => {
    this.props.navigation.navigate('Logout');
  }
  
  render() {
    return (<Background>
      <Logo />
      <Header>ORT en CASA</Header>
      <Title>Hola {this.state.user ? this.state.user.name  : 'sin Nombre'}</Title>
      <Paragraph>
        A continuación realizamos algunos ejemplos de prueba.
      </Paragraph>
      <Button mode="outlined" onPress={this._logout}>
        Logout
      </Button>
      <Portal>
        <Dialog visible={this.state.visible} onDismiss={this._hide}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={this._hide}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Background>);
  }
};

export default memo(Dashboard);