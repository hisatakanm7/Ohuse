export const ADD_LIST = 'ADD_LIST';
export const MODAL_TOGGLE_CHANGE = 'MODAL_TOGGLE_CHANGE';
export const RECEIVE_LOGGED_IN = 'RECEIVE_LOGGED_IN';
export const RECEIVE_ERROR_LOGGED_IN = 'RECEIVE_ERROR_LOGGED_IN';
export const REQUEST_LOGGED_IN = 'REQUEST_LOGGED_IN'
export const CREATE_WORK_HANDLE = 'CREATE_WORK_HANDLE'
export const RECEIVE_MY_WORKS = 'RECEIVE_MY_WORKS'
export const RECEIVE_WORK = 'RECEIVE_WORK'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

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

export const createWorkHandle = (key, value) => {
    return {
        type: 'CREATE_WORK_HANDLE',
        key: key,
        value: value
    }
};

export const receiveMyWorks = (response) => {
  console.log(response);
  return {
      type: 'RECEIVE_MY_WORKS',
      response
  }
};

export const receiveWork = (response) => {
  console.log(response);
  return {
      type: 'RECEIVE_WORK',
      response
  }
};

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
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
        .then(response => (
          dispatch(receiveLoggedIn(response.data.user)),
          dispatch(receiveMyWorks(response.data.works))
      ))
        .catch(() => dispatch(receiveErrorLoggedIn()));
  }
};

// //actionとしてのfunctionは実行後に必ずtypeをreturnしないといけない
export function createWorkAction(userId, params) {
  console.log('userId');
  console.log(userId);
  console.log('params');
  console.log(params);

  return dispatch => {
    dispatch(requestLoggedIn())
    console.log('params');
    console.log(params);
      return axios.post(`http://localhost:3000/users/${userId}/works`, params, {
          withCredentials: true
        })
        .then(response => (
          dispatch(receiveWork(response.data.works))
      ))
        .catch(() => dispatch(receiveErrorLoggedIn()));
  }
};
