const defaultState = {
  name: '',
  email: '',
  photo: '',
};

const profile = (state = defaultState, action) => {
  switch (action.type) {
    case 'NAME':
      return {
        ...state,
        name: action.addName,
      };
    case 'EMAIL':
      return {
        ...state,

        email: action.addEmail,
      };
    case 'PHOTO':
      return {
        ...state,

        photo: action.addPhoto,
      };
    default:
      return state;
  }
};

export default profile;
