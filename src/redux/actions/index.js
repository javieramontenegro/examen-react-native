import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = ({user, password}) => {
  console.log({user, password});
  return dispatch => {
    dispatch({
      type: 'LOADING',
      isLoading: true,
    });

    setTimeout(() => {
      if (user !== '' && password !== '') {
        AsyncStorage.setItem('user', user);
        AsyncStorage.setItem('password', password);

        dispatch({
          type: 'LOGIN_IN',
        });
      }

      dispatch({
        type: 'LOADING',
        isLoading: false,
      });
    }, 2000);
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const like = like => {
  console.log('like', like);

  return dispatch => {
    dispatch({
      type: 'LIKE',
      isLike: like,
    });
  };
};

/* export const profile = ({name, email}) => {
  console.log('profile', {name, email});
  return dispatch => {
    dispatch({
      type: 'NAME',
      addName: name,
    });
    dispatch({
      type: 'EMAIL',

      addEmail: email,
    });
    AsyncStorage.setItem('email', email);
    AsyncStorage.setItem('name', name);
  };
}; */
export const name = ({name}) => {
  console.log('name', {name});
  return dispatch => {
    dispatch({
      type: 'NAME',
      addName: name,
    });

    AsyncStorage.setItem('name', name);
  };
};

export const email = ({email}) => {
  console.log('email', {email});
  return dispatch => {
    dispatch({
      type: 'EMAIL',

      addEmail: email,
    });
    AsyncStorage.setItem('email', email);
  };
};
export const photo = ({photo}) => {
  console.log('profile', {photo});
  return dispatch => {
    dispatch({
      type: 'PHOTO',

      addPhoto: photo,
    });

    AsyncStorage.setItem('photo', photo);
  };
};
