import * as types from "./actionTypes";
import axios from "../../axiosGiphy";

const apiKey = process.env.REACT_APP_GIPHY_KEY;

export const fetchTrendingItems = gifs => {
  return {
    type: types.FETCH_TRENDING_GIFS,
    gifs: gifs
  };
};

export const fetchSearchItems = gifsData => {
  return {
    type: types.FETCH_SEARCH_GIFS,
    gifs: gifsData.gifs,
    pages: gifsData.pages,
    offset: gifsData.offset
  };
};

export const setGalleryOpen = value => {
  return {
    type: types.SET_GALLERY_OPEN,
    galleryOpen: value
  };
};

export const setQueryParam = value => {
  return {
    type: types.SET_QUERY_PARAM,
    query: value
  };
};

export const setInSearch = value => {
  return {
    type: types.SET_IN_SEARCH,
    inSearch: value
  };
};

export const setOffset = offset => {
  return {
    type: types.SET_OFFSET,
    offset: offset
  };
};

export const setPages = total => {
  return {
    type: types.SET_PAGES,
    pages: total
  };
};

// Fetching the current trending items on  asynchronously.
export const fetchTrendingAsync = offset => {
  const request = `/gifs/trending?api_key=${apiKey}&limit=12`;
  return dispatch => {
    axios
      .get(request)
      .then(response => {
        console.log(response.data);
        dispatch(fetchTrendingItems(response.data.data));
      })
      .then(result => dispatch(setOffset(0)))
      .then(result => dispatch(setPages(0)))
      .then(result => dispatch(setInSearch(false)))
      .catch(error => console.log(error));
  };
};

// Fetching gif items on search parameters asynchronously.
export const fetchSearchAsync = (search, offset) => {
  const request = `/gifs/search?q=${search}&offset=${offset}&api_key=${apiKey}&limit=12`;
  return dispatch => {
    axios
      .get(request)
      .then(response => {
        let pages = 0;
        if (response.data.pagination.total_count > 1200) {
          pages = 100;
        } else {
          pages = Math.ceil(response.data.pagination.total_count / 12);
        }
        let gifsData = {
          gifs: response.data.data,
          pages: pages,
          offset: offset
        };
        console.log(response.data);
        dispatch(fetchSearchItems(gifsData));
      })
      .then(result => dispatch(setInSearch(true)))
      .catch(error => console.log(error));
  };
};
