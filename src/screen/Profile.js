import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  name as addProfileName,
  email as addProfileEmail,
  phone as addProfilePhone,
  logout,
} from '../redux/actions/index';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import AddPhoto from '../components/AddPhoto';
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    flex: 1,
    alignContent: 'center',

    justifyContent: 'space-between',
    flexDirection: 'column',
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
  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    resizeMode: 'contain',
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
const Profile = ({
  addName,
  addEmail,
  addPhoto,
  addPhone,
  nameFunc,
  emailFunc,
  phoneFunc,
  logout,
}) => {
  /* const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(''); */

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <LinearGradient
              colors={['#ff3c41', '#ff653c']}
              style={styles.button}>
              <TouchableOpacity onPress={() => logout()}>
                <Text style={styles.buttonText}>Log Out</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View
            style={{width: '100%', height: '100%', padding: 10, marginTop: 10}}>
            <Text style={styles.title}>Profile</Text>
            <View>
              <AddPhoto addPhoto={addPhoto} />
            </View>
            <View>
              <Text style={styles.inputText}>User</Text>
              <TextInput
                style={styles.input}
                placeholder="User"
                autoCapitalize="none"
                autoCompleteType="name"
                onChangeText={name => nameFunc(name)}
                value={addName}
              />
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                autoCompleteType="email"
                onChangeText={email => emailFunc(email)}
                value={addEmail}
              />
              <Text style={styles.inputText}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="phone"
                autoCapitalize="none"
                autoCompleteType="tel"
                keyboardType="phone-pad"
                onChangeText={phone => phoneFunc(phone)}
                value={addPhone}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    nameFunc: name => dispatch(addProfileName({name})),
    emailFunc: email => dispatch(addProfileEmail({email})),
    phoneFunc: phone => dispatch(addProfilePhone({phone})),
    logout: () => dispatch(logout()),
  };
};
const mapStateToProps = globalState => {
  return {
    addName: globalState.profileReducer.name,
    addEmail: globalState.profileReducer.email,
    addPhoto: globalState.profileReducer.photo,
    addPhone: globalState.profileReducer.phone,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
