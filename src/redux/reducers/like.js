const defaultState = {
  like: false,
};

const like = (state = defaultState, action) => {
  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        like: action.isLike,
      };

    default:
      return state;
  }
};

export default like;
