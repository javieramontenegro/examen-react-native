import React, {Component} from 'react';
import RootNavigation from './src/routes/Root';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle={'dark-content'} />

        {/* <Home /> */}
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </>
    );
  }
}
