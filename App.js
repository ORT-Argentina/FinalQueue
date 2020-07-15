import React, { Component } from 'react';
import { AppRegistry, Platform } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { theme } from './src/core/theme';
import App from './src/';
import { NavigationContainer } from '@react-navigation/native';
import Loading from './src/components/Loading';
import deviceStorage from './src/services/deviceStorage';
import NavAuth from './src/navigation/nav-auth';
import { ToastProvider } from 'react-toast-notifications';

export default class Main extends Component {
  constructor() {
    super();
    
    this.state = {
      jwt: '',
      loading: true
    }

    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }
  
  newJWT(jwt) {
    this.setState({
      jwt: jwt
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading size={'large'} />
      );
    } else {
      return (
        <ToastProvider
          autoDismiss
          autoDismissTimeout={6000}
          placement="bottom-center"
        >
        <PaperProvider theme={theme}>
          <React.Fragment>
            {Platform.OS === 'web' ? (
              <style type="text/css">{`
              @font-face {
                font-family: 'MaterialCommunityIcons';
              }
            `}</style>
            ) : null}
            <NavigationContainer>
              {!this.state.jwt ? (<App />) : (<NavAuth newJWT={this.newJWT} />)}
            </NavigationContainer>
          </React.Fragment>
          </PaperProvider>
        </ToastProvider>
      )
    }
  }
}

AppRegistry.registerComponent(appName, () => Main);