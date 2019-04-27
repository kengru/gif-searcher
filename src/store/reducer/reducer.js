import * as types from "../actions/actionTypes";

const initialState = {
  gifs: [],
  pages: 0,
  offset: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TRENDING_GIFS:
      return {
        ...state,
        gifs: action.gifs,
        pages: action.pages
      };
    case types.FETCH_SEARCH_GIFS:
      return {
        ...state,
        gifs: action.gifs,
        pages: action.pages
      }
    case types.SET_OFFSET:
      return {
        ...state,
        offset: action.offset
      }
    default:
      break;
  }
  return state;
};

export default reducer;