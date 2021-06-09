import React, {Component} from 'react';
import RootNavigation from './src/routes/Root';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import reduxStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    const {store, persistor} = reduxStore();
    return (
      <>
        {/* <Home /> */}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar barStyle={'dark-content'} />
            <RootNavigation />
          </PersistGate>
        </Provider>
      </>
    );
  }
}
