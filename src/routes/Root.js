import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './LoginStack';
import Home from './HomeStack';
import Tab from './TabStack';
import {connect} from 'react-redux';
//import Test from './TestStack';
const RootStack = createStackNavigator();

const RootNavigation = ({isLogin}) => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      {!isLogin ? (
        <RootStack.Screen name="Login" component={Login} />
      ) : (
        /*  <RootStack.Screen name="Home" component={Home} /> */
        <RootStack.Screen name="Tab" component={Tab} />
      )}
    </RootStack.Navigator>
  </NavigationContainer>
);
const mapStateToProps = globalState => {
  return {
    isLogin: globalState.loginInReducer.userActive,
  };
};
export default connect(mapStateToProps)(RootNavigation);
