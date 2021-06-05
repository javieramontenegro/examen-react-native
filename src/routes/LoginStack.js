import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/Login';

const LoginStack = createStackNavigator();

const LoginNavigation = () => (
  <LoginStack.Navigator headerMode="none">
    <LoginStack.Screen name="Login" component={Login} />
  </LoginStack.Navigator>
);

export default LoginNavigation;
