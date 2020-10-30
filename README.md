# Gif Searcher

An app that lets users search for gifs on Giphy.

### Steps to run locally:

`npm install`

Create a .env file with a variable with the api key it should look like this:

    REACT_APP_GIPHY_KEY=*******************************

I have removed my GIPHY key.

`npm start`

### To have in consideration:

- Due to the constrains of a [developer giphy key](https://developers.giphy.com/docs/#access) I have limited search pages to 100 so the key can be in continue use.
- For the same reason, you may recieve a 429 request error because of the limit of the key.
- <b>The app will not work without the .env file.</b>
- In the case there is any problem running the app, its also [hosted in firebase](https://gif-searcher-eff5f.firebaseapp.com/).

### Used these libraries:

- [React.js](https://github.com/facebook/react) for obvious reasons.
- [Redux](https://github.com/reduxjs/redux) to handle state and communications between components.
- [Thunk](https://github.com/reduxjs/redux-thunk) to asynchronously set items in the redux store.
- [Axios](https://github.com/axios/axios) for requests.
