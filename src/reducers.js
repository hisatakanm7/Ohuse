import { combineReducers } from 'redux';
const I = require('immutable');

import { ADD_LIST } from './action';
import {
  MODAL_TOGGLE_CHANGE,
  RECEIVE_LOGGED_IN,
  REQUEST_LOGGED_IN,
  RECEIVE_ERROR_LOGGED_IN,
  CREATE_WORK_HANDLE,
  RECEIVE_WORK,
  RECEIVE_EVENTS,
  RECEIVE_IMAGE ,
  TAPPING_FOLLOW,
  THROW_ERROR,
  REFLECT_STATUS,
  DISPLAY_MODAL,
  HIDE_MODAL
} from './action';

//*****完成*****
//-----完成（class）----

const user_info_object = {
  id: '',
  name: '',
  screen_name: '',
  description: '',
  status: '',
  image_url: '',
  joined: '',
};

const user_info = I.Record(user_info_object);

class UserInfo extends user_info {}

const event_object = {
  id: '',
  user_id: '',
  title: '',
  release: '',
  image_url: '',
  place: '',
  series: '',
  user: '',
};

const event = I.Record(event_object);

class Event extends event {}

const ofuse_object = {
  id: '',
  user_id: '',
  billed_user_id: '',
  comment: '',
  value: '',
  created_at: '',
};

const ofuse = I.Record(ofuse_object);

class Ofuse extends ofuse {}

const follow_object = {
  id: '',
  image_url: '',
  name: '',
  tapping: false,
};

const follow = I.Record(follow_object);

class Follow extends follow {}


const notification_object = {
  user_id: '',
  url: '',
  status: '',
  text: '',
  type: '',
};

const notification = I.Record(notification_object);

class Notification extends notification {}

const tapped_follow_object = {
  id: '',
  image_url: '',
};

const tapped_follow = I.Record(tapped_follow_object);

class TappedFollow extends tapped_follow {}

const error_object = {
  type: '',
  attributes: '',
};

const error = I.Record(error_object);

class Error extends error {}

const status_object = {
  logged_in: '',
  first_log_in: '',
}

const status = I.Record(status_object);

class Status extends status {}

const circle_icons_body_modal_options_object = {
  content: '',
  title: '',
};

const CircleIconsBodyModalOptions = I.Record(circle_icons_body_modal_options_object);

class CircleIconsBodyModalOption extends CircleIconsBodyModalOptions {}

const event_detail_modal_options_object = {
  id: '',
  user_id: '',
};

const EventDetailModalOptions = I.Record(event_detail_modal_options_object);

class EventDetailModalOption extends EventDetailModalOptions {}

const modal_object = {
  active: false,
  component: '',
  options: '',
}

const modalRoot = I.Record(modal_object);

class Modal extends modalRoot {}



//-----完成終了（class）----

//-----完成（data）----

//User
const user_data = {
  info: user_info_object,
  events: [],
  ofuses: [],
  billed_ofuses: [],
  followed: [],
  follower: [],
  notifications: [],
  TappedFollowed: [],
}

const events_data = []



//-----完成終了（data）----

//-----完成（function）----

function create_list (datum, className) {
  let arr = [];
  datum.map(child => create_list_append(arr, child, className));
  return arr;
};

function create_list_append(arr, child, className) {
  console.log(JSON.stringify(child));
  arr.push(eval(`new ${className}(${JSON.stringify(child)})`));
};

//-----完成終了（function）----

//-----完成（state）----
const user = (state = I.fromJS(user_data), action) => {
    switch (action.type) {
      case RECEIVE_LOGGED_IN:
        const user = action.response.body.user
        let tmp = state;
        if (user.info != undefined) tmp = tmp.set('info', new UserInfo(user.info));
        if (user.events != undefined) tmp = tmp.set('events', I.List(create_list(user.events, 'Event')));
        if (user.ofuses != undefined) tmp = tmp.set('ofuses', I.List(create_list(user.ofuses, 'Ofuse')));
        if (user.billed_ofuses != undefined) tmp = tmp.set('billed_ofuses', I.List(create_list(user.billed_ofuses, 'Ofuse')));
        if (user.followed != undefined) tmp = tmp.set('followed', I.List(create_list(user.followed, 'Follow')));
        if (user.follower != undefined) tmp = tmp.set('follower', I.List(create_list(user.follower, 'Follow')));
        if (user.notifications != undefined) tmp = tmp.set('notifications', I.List(create_list(user.notifications, 'Notification')));
        if (user.TappedFollowed != undefined) tmp = tmp.set('TappedFollowed', I.List(create_list(user.TappedFollowed, 'TappedFollow')));
        return tmp;
      case TAPPING_FOLLOW:
        return state.set('followed',
          state.get('followed').update(
            state.get('followed').findIndex(function(followed) { 
              return followed.get('id') === action.id; 
            }), function(followed) {
              return followed.set('tapping', !followed.get('tapping'));
            }
          )
        );
      default:
          return state;
    }
};

const events = (state = I.fromJS(events_data), action) => {
  switch (action.type) {
      case RECEIVE_EVENTS:
        return I.List(create_list(action.response.body.events, 'Event'));
      default:
        return state;
    }
};

const errors = (state = I.fromJS(error_object), action) => {
  switch (action.type) {
      case THROW_ERROR:
        return I.fromJS(new Error(action.data));
      default:
        return state;
    }
};

const statuses = (state = I.fromJS(status_object), action) => {
  switch (action.type) {
      case REFLECT_STATUS:
        return I.fromJS(new Status(action.response.status));
      default:
        return state;
    }
};

const modal = (state = I.fromJS(modal_object), action) => {
  switch (action.type) {
      case DISPLAY_MODAL:
      console.log(action);
        const componentName = (action.component + 'ModalOption').replace('Container', '');
        return I.fromJS(new Modal({
          active: true,
          component: action.component,
          options: eval(`new ${componentName}(${JSON.stringify(action.options)})`)
        }));
      case HIDE_MODAL:
        return I.fromJS(modal_object);
      default:
        return state;
    }
};
//-----完成終了（state）----
//*****完成終了*****















const work_object = {
  id: 0,
  title: '自伝',
  date: '2017-5-22',
  description: '私の最初の作品です',
  eventName: 'my Event',
  image: '',
  released: true,
  creator: 'other',
  creatorId: 1,
  modalVisible: false,
};

const work = I.Record(work_object);

class Work extends work {}



const dateYesterday = new Date();
// dateYesterday.setDate(dateYesterday.getDate() - 1);


const create_work_data = {
  title: '',
  date: '2016-03-03 22:22:22',
  description: '',
  eventName: '',
  image: '',
  released: true,
}




// const user_data = {
//   info:{
//     id: 10,
//     name: 'ヒサタカ@お布施早くやりたい',
//     TwID: 'hisataka',
//     description: 'ofuse作りました',
//     image: '',
//   },
//   works: [],
//   follows: [{
//     id: 1,
//     name: '俺がファン１号',
//     TwID: 'orenofan1',
//     description: 'ファンです１',
//     image: '',
//     selected: true,
//   },{
//     id: 2,
//     name: '俺がファン２号',
//     TwID: 'orenofan2',
//     description: 'ファンです２',
//     image: '',
//     selected: true,
//   }],
//   followers: [{
//     id: 1,
//     name: '俺のファン１号',
//     TwID: 'orenofan1',
//     description: 'ファン１号です',
//     image: '',
//   },{
//     id: 2,
//     name: '俺のファン２号',
//     TwID: 'orenofan2',
//     description: 'ファン2号です',
//     image: '',
//   }]
// }
//
//Works
const works_data = [{
    id: 0,
    title: '私のOFUSE',
    date: '22',
    description: '私の最初の作品です',
    eventName: 'my Event',
    image: '',
    released: true,
    creator: 'other',
    creatorId: 1,
    modalVisible: false,
  },{
      id: 1,
      title: 'トランケイトトランケイトトランケイトトランケイトトランケイトトランケイトトランケイト',
      date: '22',
      description: 'トランケイトトランケイトトランケイトトランケイトトランケイトトランケイトトランケイト',
      eventName: 'my Event',
      image: '',
      released: true,
      creator: 'other',
      creatorId: 1,
      modalVisible: false,
    }];






const page_url_name_object = {
    name: '',
    url: ''
};

const page_url_name = I.Record(page_url_name_object);

class PageUN extends page_url_name {}

const page_data = {
    datas: [{
        name: 'ddd',
        url: ''
    }],
    name: 'name',
};

function append_list (arr, child) {
    const newPage = new PageUN({
        name: child.title,
        url: child.link[0]._href
    });
    arr.push(newPage);
};

function append_works_list (arr, child) {
  console.log('before new')
    const newWork = new Work(child);

    arr.push(newWork);
    console.log('before push');

};

const loading_data = {
    loading: true,
};

const loading = (state = I.fromJS(loading_data), action) => {
    switch (action.type) {
      case REQUEST_LOGGED_IN:
        return state.set('loading', action.loading);
      case RECEIVE_ERROR_LOGGED_IN:
        return state.set('loading', action.loading);
      default:
          return state;
    }
};

const page = (state = I.fromJS(page_data), action) => {
    switch (action.type) {
        case ADD_LIST:
            let arr = [];
            action.data.map(child => append_list(arr, child));
        return I.fromJS({
            datas: I.List(arr),
        });
        default:
            return state;
    }
};

const works = (state = I.fromJS(works_data), action) => {
  switch (action.type) {
      case MODAL_TOGGLE_CHANGE:
        const num = action.id;
        return state.setIn([num, 'modalVisible'], !state.getIn([num, 'modalVisible']))

      default:
          return state;
    }
};

const create_work = (state = I.fromJS(create_work_data), action) => {
  switch (action.type) {
    case CREATE_WORK_HANDLE:
      return state.set(action.key, action.value);
    default:
        return state;
    }
};

// const user = (state = I.fromJS(user_data), action) => {
//     switch (action.type) {
//       case RECEIVE_LOGGED_IN:
//         const res = action.response.body
//         let tmp = state.set('info', new UserInfo(res.user.info));
//         tmp = tmp.set('events', I.List(create_list(res.user.events, 'Event')));
//         tmp = tmp.set('ofuses', I.List(create_list(res.user.ofuses, 'Ofuse')));
//         tmp = tmp.set('billed_ofuses', I.List(create_list(res.user.billed_ofuses, 'Ofuse')));
//         tmp = tmp.set('followed', I.List(create_list(res.user.followed, 'Follow')));
//         tmp = tmp.set('follower', I.List(create_list(res.user.follower, 'Follow')));
//         tmp = tmp.set('notifications', I.List(create_list(res.user.notifications, 'Notification')));
//         tmp = tmp.set('TappedFollowed', I.List(create_list(res.user.TappedFollowed, 'TappedFollow')));
//         return tmp;
//         // case RECEIVE_LOGGED_IN:
//         //   return state.set('info', new UserInfo(action.response));
//       // case RECEIVE_MY_WORKS:
//       //   let arr = [];
//       //   action.response.map(child => append_works_list(arr, child));
//       //   console.log(arr);
//       //   return state.set('works', I.List(arr));
//       // case RECEIVE_WORK:
//       //   return state.update('works', list => list.push(action.response));
//       default:
//           return state;
//     }
// };


const reducer = combineReducers({
    page,
    user,
    events,
    errors,
    statuses,
    works,
    loading,
    modal,
    create_work //1つ1つのreducerを書く。増えたらここに追加する。
});

export default reducer
