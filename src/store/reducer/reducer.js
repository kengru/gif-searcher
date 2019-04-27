import * as types from "../actions/actionTypes";

const initialState = {
  gifs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TRENDING_GIFS:
      return {
        ...state,
        gifs: action.gifs
      };
    case types.FETCH_SEARCH_GIFS:
      return {
        ...state,
        gifs: action.gifs
      }
    default:
      break;
  }
  return state;
};

export default reducer;