import React from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
    flexShrink: 1,
  },
});
const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Header;
