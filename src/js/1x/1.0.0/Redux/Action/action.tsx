const I = require('immutable');
import * as constants from '../Constants/index';
import axios from "axios";

//*****完成*****
//-----完成（action）----


export const receiveEvents = (response: any) => {
  return {
      type: constants.RECEIVE_EVENTS,
      response
  }
};

export const tappingFollow = (id: any) => {
  return {
      type: constants.TAPPING_FOLLOW,
      id: id
  }
};

export const throwError = (response: any) => {
  return {
      type: constants.THROW_ERROR,
      response
  }
};

export const reflectStatus = (response: any) => {
  return {
      type: constants.REFLECT_STATUS,
      response
  }
};

export const displayModal = (component: any, options: any) => {
  return {
      type: constants.DISPLAY_MODAL,
      component: component,
      options: (options) ? options : {},
  }
};

export const  hideModal = () => {
  return {
      type: constants.HIDE_MODAL,
  }
};

export const filterCreators = (screen_name: any) => {
  return {
      type: constants.FILTER_CREATORS,
      screen_name,
  }
}

export const requestGetCreator = () => {
  return {
      type: constants.REQUEST_GET_CREATORS,
  }
}

export const successGetCreator = () => {
  return {
      type: constants.SUCCESS_GET_CREATORS,
  }
}

export const requestGetCreators = () => {
  return {
      type: constants.REQUEST_GET_CREATORS,
  }
}

export const successGetCreators = (creators: any) => {
  return {
      type: constants.SUCCESS_GET_CREATORS,
      creators,
  }
}

//-----完成終了（action）----

//-----完成（function）----

export const receiveError = () => {
  return {

  }
}

export const receiveLoggedIn = (response: any) => {
  return {
      type: constants.RECEIVE_LOGGED_IN,
      response
  }
};

export const receiveGetTimeLineContents = (response: any) => {
  return {
    type: constants.GET_TIMELINE_CONTENTS,
    response
  }
}

// //actionとしてのfunctionは実行後に必ずtypeをreturnしないといけない
export function confirmLoggedIn(successAction:any) {
  return (dispatch: any) => {
      return axios.get('http://localhost:3000/logged_in.json', {
          // withCredentials: true
        })
        .then(response => (
          dispatch(receiveLoggedIn(response.data)),
          successAction()
        ))
        .catch(response => dispatch(receiveError()));
  }
};

export function getTimeLineContents(successAction:any) {
  return (dispatch: any) => {
    return axios.get('http://localhost:3000/logged_in.json', {
        // withCredentials: true
      })
      .then(response => (
        dispatch(receiveGetTimeLineContents(response.data)),
        successAction()
      ))
      .catch(response => dispatch(receiveError()));
  }
}

// export function updateTappedFollow(userId: any) {
//   return (dispatch: any) => {
//     dispatch(requestLoggedIn())
//     return axios.put(`http://localhost:3000/my/update`, {user_id: userId}, {
//         withCredentials: true
//       })
//       .then(response => (
//         dispatch(receiveTappedFollow(response.data))
//       ))
//       .catch(() => dispatch(throwError()));
//   }
// };

export function getCreator(creatorId: any, successAction:any) {
  return (dispatch: any) => {
    dispatch(requestGetCreator())
    return axios.get('http://localhost:3000/users/' + creatorId + '.json', {
        // withCredentials: true
      })
      .then(response => {
        dispatch(successGetCreator());
        successAction(response.data.body.user);
      })
      .catch((err) => console.log(err.message));
  }
};

export function getCreators(successAction:any) {
  return (dispatch: any) => {
    dispatch(requestGetCreators())
    return axios.get(`http://localhost:3000/users.json`, {
        // withCredentials: true
      })
      .then(response => {
        dispatch(successGetCreators(response.data.body.creators));
        successAction(I.fromJS(response.data.body.creators));
      })
      .catch((err) => console.log(err.message));
  }
};

//-----完成終了（function）----
//*****完成終了*****








export const addList = (data: any) => {
    return {
        type: constants.ADD_LIST,
        data
    }
};

export const modalToggleChange = (id: any, flag: any) => {
    return {
        type: constants.MODAL_TOGGLE_CHANGE,
        id
    }
};

export const receiveErrorLoggedIn = (response: any) => {
  return {
      type: constants.RECEIVE_ERROR_LOGGED_IN,
      loading: false
  }
};

export const createWorkHandle = (key: any, value: any) => {
    return {
        type: constants.CREATE_WORK_HANDLE,
        key: key,
        value: value
    }
};

export const receiveWork = (response: any) => {
  return {
      type: constants.RECEIVE_WORK,
      response
  }
};

function receivePosts(subreddit: any, json: any) {
  return {
    type: constants.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child: any) => child.data),
    receivedAt: Date.now()
  }
}

function receiveImage(response: any) {
  return {
    type: constants.RECEIVE_IMAGE,
    response
  }
}


export const requestLoggedIn = () => {
  return {
    type: constants.REQUEST_LOGGED_IN,
    loading: true
  }
}




// // //actionとしてのfunctionは実行後に必ずtypeをreturnしないといけない
// export function createWorkAction(userId, params) {
//   return dispatch => {
//     dispatch(requestLoggedIn())
//       return axios.get('http://localhost:3000/users', {
//         params: {
//           logged_in: true
//         },
//           withCredentials: true
//         })
//         .then(response => (
//           dispatch(receiveLoggedIn(response.data.user)),
//           dispatch(receiveEvents(response.data.events))
//       ))
//         .catch(() => dispatch(receiveErrorLoggedIn()));
//   }


//   // return dispatch => {
//   //   dispatch(requestLoggedIn())
//   //   console.log('params');
//   //   params = {
//   //     logged_in: true,
//   //   }
//   //   console.log(params);
//   //
//     // return axios.post(`http://localhost:3000/users/${userId}/events`, params, {
//     //     withCredentials: true
//     //   })
//     //   .then(response => (
//     //     dispatch(receiveWork(response.data.works))
//     // ))
//   //     .catch(() => dispatch(receiveErrorLoggedIn()));
//   //     // return axios.post(`http://localhost:3000/users/${userId}/works`, params, {
//   //     //     withCredentials: true
//   //     //   })
//   //     //   .then(response => (
//   //     //     dispatch(receiveWork(response.data.works))
//   //     // ))
//   //     //   .catch(() => dispatch(receiveErrorLoggedIn()));
//   // }
// };

// export function uploadFile(userId, file) {
//   return dispatch => {
//     dispatch(requestLoggedIn())
//     console.log('file');
//     console.log(file);
//     console.log(file.type);
//       return axios.post(`http://localhost:3000/users/${userId}/images`, file, {
//         headers: {
//           'Content-Type': file.type
//         },
//           withCredentials: true
//         })
//         .then(response => (
//           console.log(response.data.image),
//           dispatch(createWorkHandle('image', response.data.image))
//       ))
//         .catch(() => dispatch(receiveErrorLoggedIn()));
//   }
// };

// export function followUser(userId, other_user_id) {
//   console.log('userId');
//   console.log(userId);
//   console.log('other_user_id');
//   console.log(other_user_id);

//   return dispatch => {
//     dispatch(requestLoggedIn())
//     console.log('params');

//     return axios.post(`http://localhost:3000/users/${userId}/follow`, other_user_id, {
//         withCredentials: true
//       })
//         .then(response => (
//           dispatch(receiveWork(response.data.works))
//       ))
//         .catch(() => dispatch(receiveErrorLoggedIn()));
//   }
// };
