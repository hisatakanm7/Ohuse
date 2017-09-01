export const ADD_LIST = 'ADD_LIST';
export const MODAL_TOGGLE_CHANGE = 'MODAL_TOGGLE_CHANGE';
export const RECEIVE_LOGGED_IN = 'RECEIVE_LOGGED_IN';
export const RECEIVE_ERROR_LOGGED_IN = 'RECEIVE_ERROR_LOGGED_IN';
export const CREATE_WORK_HANDLE = 'CREATE_WORK_HANDLE'
export const RECEIVE_WORK = 'RECEIVE_WORK'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE'

export const REQUEST_LOGGED_IN = 'REQUEST_LOGGED_IN'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const RECEIVE_TAPPED_FOLLOW = 'RECEIVE_TAPPED_FOLLOW'
export const THROW_ERROR = 'THROW_ERROR'
export const REFLECT_STATUS = 'REFLECT_STATUS'
export const DISPLAY_MODAL = 'DISPLAY_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

import axios from "axios";

//*****完成*****
//-----完成（action）----

export const receiveLoggedIn = (response) => {
  return {
      type: 'RECEIVE_LOGGED_IN',
      response
  }
};

export const receiveEvents = (response) => {
  return {
      type: 'RECEIVE_EVENTS',
      response
  }
};

export const receiveTappedFollow = (response) => {
  return {
      type: 'RECEIVE_TAPPED_FOLLOW',
      response
  }
};

export const throwError = (response) => {
  return {
      type: 'THROW_ERROR',
      response
  }
};

export const reflectStatus = (response) => {
  return {
      type: 'REFLECT_STATUS',
      response
  }
};

export const displayModal = (component, options) => {
  return {
      type: 'DISPLAY_MODAL',
      component: component,
      options: (options) ? options : {},
  }
};

export const  hideModal = () => {
  return {
      type: 'HIDE_MODAL',
  }
};
//-----完成終了（action）----

//-----完成（function）----

// //actionとしてのfunctionは実行後に必ずtypeをreturnしないといけない
export function comfirmLoggedIn() {
  return dispatch => {
    dispatch(requestLoggedIn())
      return axios.get('http://localhost:3000/logged_in.json', {
          // withCredentials: true
        })
        .then(response => (
          dispatch(receiveLoggedIn(response.data)),
          dispatch(receiveEvents(response.data))
        ))
        .catch(() => dispatch(receiveErrorLoggedIn()));
  }
};

export function updateTappedFollow(userId) {
  return dispatch => {
    dispatch(requestLoggedIn())
    return axios.put(`http://localhost:3000/my/update`, {user_id: userId}, {
        withCredentials: true
      })
      .then(response => (
        dispatch(receiveTappedFollow(response.data))
      ))
      .catch(() => dispatch(throwError()));
  }
};

//-----完成終了（function）----
//*****完成終了*****








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

export const receiveErrorLoggedIn = (response) => {
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

function receiveImage(response) {
  console.log(response);
  return {
    type: RECEIVE_IMAGE,
    response
  }
}


export const requestLoggedIn = () => {
  return {
    type: REQUEST_LOGGED_IN,
    loading: true
  }
}




// //actionとしてのfunctionは実行後に必ずtypeをreturnしないといけない
export function createWorkAction(userId, params) {
  return dispatch => {
    dispatch(requestLoggedIn())
      return axios.get('http://localhost:3000/users', {
        params: {
          logged_in: true
        },
          withCredentials: true
        })
        .then(response => (
          dispatch(receiveLoggedIn(response.data.user)),
          dispatch(receiveEvents(response.data.events))
      ))
        .catch(() => dispatch(receiveErrorLoggedIn()));
  }


  // return dispatch => {
  //   dispatch(requestLoggedIn())
  //   console.log('params');
  //   params = {
  //     logged_in: true,
  //   }
  //   console.log(params);
  //
    // return axios.post(`http://localhost:3000/users/${userId}/events`, params, {
    //     withCredentials: true
    //   })
    //   .then(response => (
    //     dispatch(receiveWork(response.data.works))
    // ))
  //     .catch(() => dispatch(receiveErrorLoggedIn()));
  //     // return axios.post(`http://localhost:3000/users/${userId}/works`, params, {
  //     //     withCredentials: true
  //     //   })
  //     //   .then(response => (
  //     //     dispatch(receiveWork(response.data.works))
  //     // ))
  //     //   .catch(() => dispatch(receiveErrorLoggedIn()));
  // }
};

export function uploadFile(userId, file) {
  return dispatch => {
    dispatch(requestLoggedIn())
    console.log('file');
    console.log(file);
    console.log(file.type);
      return axios.post(`http://localhost:3000/users/${userId}/images`, file, {
        headers: {
          'Content-Type': file.type
        },
          withCredentials: true
        })
        .then(response => (
          console.log(response.data.image),
          dispatch(createWorkHandle('image', response.data.image))
      ))
        .catch(() => dispatch(receiveErrorLoggedIn()));
  }
};

export function followUser(userId, other_user_id) {
  console.log('userId');
  console.log(userId);
  console.log('other_user_id');
  console.log(other_user_id);

  return dispatch => {
    dispatch(requestLoggedIn())
    console.log('params');

    return axios.post(`http://localhost:3000/users/${userId}/follow`, other_user_id, {
        withCredentials: true
      })
        .then(response => (
          dispatch(receiveWork(response.data.works))
      ))
        .catch(() => dispatch(receiveErrorLoggedIn()));
  }
};
