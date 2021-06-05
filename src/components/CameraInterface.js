import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
//import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  photoBoxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoBoxCircle: {
    width: 200,
    height: 200,
    borderWidth: 5,
    borderColor: 'gray',
    borderRadius: 200,
  },
  bottomButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  captureButtonContainer: {
    width: 70,
    height: 70,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  captureInnerButtonContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'gray',
  },
});

const CameraInterface = ({navigation, camera, takePicture}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.photoBoxContainer}>
      <View style={styles.photoBoxCircle} />
    </View>
    <View style={styles.bottomButtons}>
      <TouchableOpacity
        style={styles.captureButtonContainer}
        onPress={() => takePicture(camera)}>
        <View style={styles.captureInnerButtonContainer} />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default CameraInterface;
