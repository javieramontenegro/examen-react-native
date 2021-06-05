import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  addPhotoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFrame: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  circleContainer: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#6E8687',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
});

const AddPhoto = ({addPhoto}) => {
  const navigation = useNavigation();
  const ImagePhoto = !addPhoto ? (
    <View style={[styles.addPhotoContainer, styles.imageFrame]}>
      <Icon name="image-plus" color={'blue'} size={30} />
      <Text>Add photo</Text>
    </View>
  ) : (
    <Image style={styles.imageFrame} source={{uri: addPhoto}} />
  );

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate('Camera')}
        underlayColor={'gray'}
        style={styles.circleContainer}>
        {ImagePhoto}
      </TouchableHighlight>
    </View>
  );
};

export default AddPhoto;
