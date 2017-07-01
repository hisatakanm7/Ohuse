export const ADD_LIST = 'ADD_LIST';
export const MODAL_TOGGLE_CHANGE = 'MODAL_TOGGLE_CHANGE';
export const RECEIVE_LOGGED_IN = 'RECEIVE_LOGGED_IN';
export const RECEIVE_ERROR_LOGGED_IN = 'RECEIVE_ERROR_LOGGED_IN';
export const REQUEST_LOGGED_IN = 'REQUEST_LOGGED_IN'
import axios from "axios";


export const addList = (data) => {
    console.log("action");
    return {
        type: 'ADD_LIST',
        data
    }
};

export const modalToggleChange = (id, flag) => {
    return {
        type: 'MODAL_TOGGLE_CHANGE',
        id
    }
};

export const requestLoggedIn = () => {
  return {
    type: REQUEST_LOGGED_IN,
    loading: true
  }
}

export const receiveLoggedIn = (response) => {
  console.log(response);
  return {
      type: 'RECEIVE_LOGGED_IN',
      response
  }
};

export const receiveErrorLoggedIn = (response) => {
  console.log(response);
  return {
      type: 'RECEIVE_ERROR_LOGGED_IN',
      loading: false
  }
};





export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestLoggedIn())
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

// //actionとしてのfunctionは実行後に必ずtypeをreturnしないといけない
export function comfirmLoggedIn() {
  console.log('comfirmLoggedIn');
  return dispatch => {
    dispatch(requestLoggedIn())
      return axios.get('http://localhost:3000/logged_in', {
          withCredentials: true
        })
        .then(response => dispatch(receiveLoggedIn(response.data)))
        .catch(() => dispatch(receiveErrorLoggedIn()));
  }
};
