import * as types from "./actionTypes";
import axios from "../../axiosGiphy";

const apiKey = process.env.REACT_APP_GIPHY_KEY;

export const fetchTrendingItems = gifs => {
  return {
    type: types.FETCH_TRENDING_GIFS,
    gifs: gifs
  };
};

export const fetchSearchItems = gifs => {
  return {
    type: types.FETCH_SEARCH_GIFS,
    gifs: gifs
  };
};

// Fetching the current trending items on  asynchronously.
export const fetchTrendingAsync = offset => {
  const request = `/gifs/trending?offset=${offset}&api_key=${apiKey}&limit=12`;
  return dispatch => {
    axios
      .get(request)
      .then(response => {
        dispatch(fetchTrendingItems(response.data.data));
      })
      .catch(error => {});
  };
};

// Fetching gif items on search parameter asynchronously.
export const fetchSearchAsync = (search, offset) => {
  const request = `/gifs/search?q=${search}&offset=${offset}&api_key=${apiKey}&limit=12`;
  return dispatch => {
    axios
      .get(request)
      .then(response => {
        dispatch(fetchSearchItems(response.data.data));
      })
      .catch(error => {});
  };
};
