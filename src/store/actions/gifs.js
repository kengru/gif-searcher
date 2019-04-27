import * as types from "./actionTypes";
import axios from "../../axiosGiphy";

const apiKey = process.env.REACT_APP_GIPHY_KEY;

export const fetchTrendingItems = gifsData => {
  return {
    type: types.FETCH_TRENDING_GIFS,
    gifs: gifsData.gifs,
    pages: gifsData.pages
  };
};

export const fetchSearchItems = gifsData => {
  return {
    type: types.FETCH_SEARCH_GIFS,
    gifs: gifsData.gifs,
    pages: gifsData.pages
  };
};

export const setOffset = offset => {
  return {
    type: types.SET_OFFSET,
    offset: offset
  };
};

// Fetching the current trending items on  asynchronously.
export const fetchTrendingAsync = offset => {
  const request = `/gifs/trending?offset=${offset}&api_key=${apiKey}&limit=12`;
  return dispatch => {
    axios
      .get(request)
      .then(response => {
        let gifsData = {
          gifs: response.data.data,
          pages: response.data.pagination.total_count / 12
        };
        console.log(response.data);
        dispatch(fetchTrendingItems(gifsData));
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
        let gifsData = {
          gifs: response.data.data,
          pages: response.data.pagination.total_count / 12
        };
        console.log(response.data);
        dispatch(fetchSearchItems(gifsData));
      })
      .catch(error => {});
  };
};
