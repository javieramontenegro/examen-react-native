const defaultState = {
  loading: false,
  error: false,
  userActive: undefined,
};

const login = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_IN':
      return {
        ...state,
        userActive: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        userActive: false,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.isLoading,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.isError,
      };
    default:
      return state;
  }
};

export default login;
