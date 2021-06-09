import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  containerLoadingBlack: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'black',
    opacity: 0.7,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  containerLoadingWhite: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',

    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageLoading: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    resizeMode: 'contain',
    zIndex: 2,
  },
});

const Loading = ({colorBack}) => {
  return (
    <>
      {colorBack === 'black' && (
        <View style={styles.containerLoadingBlack}>
          <Image
            style={styles.imageLoading}
            source={require('../assets/pokeball.png')}
          />
        </View>
      )}
      {colorBack === 'white' && (
        <View style={styles.containerLoadingWhite}>
          <Image
            style={styles.imageLoading}
            source={require('../assets/pokeball.png')}
          />
        </View>
      )}
    </>
  );
};

export default Loading;
