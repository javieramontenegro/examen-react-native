import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
//import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DetailsCamera from '../components/DetailsCamera';
import {connect} from 'react-redux';
import {photo as addPhoto} from '../redux/actions/index';
import Loading from '../components/Loading';
import LinearGradient from 'react-native-linear-gradient';
//import {useUserInformation} from '../../contexts/UserHandler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMess: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {fontSize: 30, color: 'white'},
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,

    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

const CameraStatus = ({message}) => (
  <View style={styles.containerMess}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const Camera = ({addPhoto, photoFunc}) => {
  const [loading, setLoading] = useState(false);
  //const {top} = useSafeAreaInsets();
  const navigations = useNavigation();
  //const {updatePhoto} = useUserInformation();

  const takePicture = async camera => {
    setLoading(true);
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    if (data.uri) {
      //updatePhoto(data.uri);
      photoFunc(data.uri);
      console.log('foto sacada', data.uri);
      setLoading(false);
      navigations.pop();
    }
  };

  return (
    <>
      {loading && <Loading colorBack="black" />}
      <SafeAreaView style={[styles.container]}>
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}>
          {({camera, status}) => {
            if (status === 'NOT_AUTHORIZED') {
              return <CameraStatus message="No Autorizado" />;
            }

            if (status === 'PENDING_AUTHORIZATION') {
              return <CameraStatus message="Pendiente" />;
            }

            if (status === 'READY') {
              return (
                <DetailsCamera
                  navigation={navigations}
                  camera={camera}
                  takePicture={takePicture}
                />
              );
            }
          }}
        </RNCamera>
        <View style={{backgroundColor: 'trasparent'}}>
          <LinearGradient colors={['#ff3c41', '#ff653c']} style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                navigations.pop();
              }}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    photoFunc: photo => dispatch(addPhoto({photo})),
  };
};
const mapStateToProps = globalState => {
  return {
    addPhoto: globalState.profileReducer.photo,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Camera);
