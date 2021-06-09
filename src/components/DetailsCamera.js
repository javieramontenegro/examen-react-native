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
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },

  takeButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  takeButtonContainer: {
    width: 70,
    height: 70,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  innerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'red',
  },
});

const DetailsCamera = ({navigation, camera, takePicture}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.takeButtons}>
      <TouchableOpacity
        style={styles.takeButtonContainer}
        onPress={() => takePicture(camera)}>
        <View style={styles.innerButton} />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default DetailsCamera;
