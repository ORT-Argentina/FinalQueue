import React, { Component, memo } from 'react';
import { Navigation } from '../types';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardTabs from '../pages/DashboardTabs'
import Logout from '../pages/Logout'

type Props = {
  navigation: Navigation;
};

const Stack = createStackNavigator();

//const NavAuth = ({ navigation }: Props) => {
class NavAuth extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'DEFAULT'),
    };
  };

  constructor(props) {
    super(props);
    
    this.state = {
      user: '',
      loading: true
    };
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
      >
        <Stack.Screen
          name="Home"
          component={DashboardTabs}
          options={{
            headerTitleAlign: 'center',
            title: 'ORT en CASA',
          }}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            title: 'LogOut',
          }}
        />
      </Stack.Navigator>
    );
  }
}
export default memo(NavAuth);