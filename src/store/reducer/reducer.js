import * as types from "../actions/actionTypes";

const initialState = {
  gifs: [],
  pages: 0,
  offset: 0,
  query: "",
  inSearch: false,
  galleryOpen: false
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
        gifs: action.gifs,
        pages: action.pages,
        offset: action.offset
      }
    case types.SET_QUERY_PARAM:
      return {
        ...state,
        query: action.query
      }
    case types.SET_IN_SEARCH:
      return {
        ...state,
        inSearch: action.inSearch
      }
    case types.SET_OFFSET:
      return {
        ...state,
        offset: action.offset
      }
    case types.SET_PAGES:
      return {
        ...state,
        pages: action.pages
      }
    case types.SET_GALLERY_OPEN:
      return {
        ...state,
        galleryOpen: action.galleryOpen
      }
    default:
      break;
  }
  return state;
};

export default reducer;