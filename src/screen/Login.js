import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  StatusBar,
  View,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {login as loginAction} from '../redux/actions/index';
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import {ScrollView} from 'react-native-gesture-handler';
import Loading from '../components/Loading';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    flex: 1,
    alignContent: 'center',

    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  containerHead: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  back: {
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4d4e4f',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    borderRadius: 50,
    borderColor: '#4d4e4f',
    borderWidth: 2,
    paddingHorizontal: 10,
    zIndex: 2,
  },
  inputText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    color: '#7f7f7f',
  },
  inputFocusBorderColor: {
    borderColor: 'red',
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 30,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  textError: {
    fontSize: 12,
    color: 'red',
  },
});
const Login = ({isLoadingActive, loginIn, isError}) => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [focusNameInput, setFocusNameInput] = useState(false);
  const [focusPasswordInput, setFocusPasswordInput] = useState(false);
  const passwordInputRef = useRef(null);
  //console.log('name:', name);

  const loginCallback = (user, password) => {
    if (name && pass) {
      loginIn(name, pass);
    }
  };
  return (
    <>
      {isLoadingActive && <Loading colorBack="black" />}
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <LinearGradient
            colors={['#ff7c42', '#ffce42', '#ffce42']}
            style={styles.container}>
            <View style={styles.containerHead}>
              <Text style={styles.title}>Hello!</Text>

              <Image
                style={styles.image}
                source={require('../assets/pikachu.png')}
              />
            </View>
            <View style={styles.back}>
              <Text style={styles.title}>Log In</Text>
              <Text style={styles.inputText}>User</Text>
              <TextInput
                style={[
                  styles.input,
                  focusNameInput && styles.inputFocusBorderColor,
                ]}
                placeholder="User"
                autoCapitalize="none"
                onChangeText={name => setName(name)}
                value={name}
                onFocus={() => setFocusNameInput(true)}
                onBlur={() => {
                  setFocusNameInput(false);
                  passwordInputRef.current.focus();
                }}
              />
              <Text style={styles.inputText}>Password</Text>
              <TextInput
                ref={passwordInputRef}
                style={[
                  styles.input,
                  focusPasswordInput && styles.inputFocusBorderColor,
                ]}
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={pass => setPass(pass)}
                value={pass}
                secureTextEntry={true}
                onFocus={() => setFocusPasswordInput(true)}
                onBlur={() => setFocusPasswordInput(false)}
              />
              {isError && (
                <Text style={styles.textError}>
                  El usuario o contraseña no coinciden
                </Text>
              )}
              <LinearGradient
                colors={['#ff3c41', '#ff653c']}
                style={styles.button}>
                <TouchableOpacity onPress={() => loginCallback()}>
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    loginIn: (user, password) => dispatch(loginAction({user, password})),
  };
};

const mapStateToProps = globalState => {
  return {
    isLoadingActive: globalState.loginInReducer.loading,
    isError: globalState.loginInReducer.error,
    userActive: globalState.loginInReducer.userActive,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
