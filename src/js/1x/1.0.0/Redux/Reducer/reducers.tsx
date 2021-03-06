import { combineReducers } from 'redux';
const I = require('immutable');
import User from '../Model/User';
import Error from '../Model/Error';
import Status, { StatusParameters } from '../Model/Status';
import Modal from '../Model/Modal';

import {
  ADD_LIST,
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
  HIDE_MODAL,
  FILTER_CREATORS,
  REQUEST_GET_CREATORS,
  SUCCESS_GET_CREATORS,
} from '../Constants/index';

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

const creators_object: {all: any[], filtered: any, hasRequestedGetCreators: boolean} = {
  all: [],
  filtered: [],
  hasRequestedGetCreators: false,
};

const creators_list = I.Record(creators_object);

class Creators extends creators_list {}

const creator_object = {
  id: '',
  image_url: '',
  name: '',
  screen_name: '',
  status: '',
}

const creator = I.Record(creator_object);

class Creator extends creator {}

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

// class Error extends error {}

const status_object = {
  logged_in: '',
  first_log_in: '',
}

// const status = I.Record(status_object);

// class Status extends status {}

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

// class Modal extends modalRoot {}


//User
const user_data: {
  info: any,
  events: any[],
  ofuses: any[],
  billed_ofuses: any[],
  followed: any[],
  follower: any[],
  notifications: any[],
  TappedFollowed: any[],
} = {
  info: user_info_object,
  events: [],
  ofuses: [],
  billed_ofuses: [],
  followed: [],
  follower: [],
  notifications: [],
  TappedFollowed: [],
}

const events_data: any[] = []


function create_list (datum: any, className: any) {
  let arr: any[] = [];
  datum.map((child: any) => create_list_append(arr, child, className));
  return arr;
};

function create_list_append(arr:any[], child:any, className:string) {
  arr.push(eval(`new ${className}(${JSON.stringify(child)})`));
};

//-----完成終了（function）----

//-----完成（state）----
const status = (state = I.fromJS(StatusParameters), action: any) => {
  switch (action.type) {
    case RECEIVE_LOGGED_IN:
    return state.set('logged_in', action.response.status.logged_in)
    default:
        return state;
    }
  }

const user = (state = I.fromJS({
  id: '',
  name: '',
  screen_name: '',
  description: '',
  status: '',
  image_url: '',
  joined: '',
}), action: any) => {
    switch (action.type) {
      // case RECEIVE_LOGGED_IN:
      //   const user = action.response.body.user
      //   let tmp = state;
      //   if (user.info != undefined) tmp = tmp.set('info', new User(user.info));
      //   if (user.events != undefined) tmp = tmp.set('events', I.List(create_list(user.events, 'Event')));
      //   if (user.ofuses != undefined) tmp = tmp.set('ofuses', I.List(create_list(user.ofuses, 'Ofuse')));
      //   if (user.billed_ofuses != undefined) tmp = tmp.set('billed_ofuses', I.List(create_list(user.billed_ofuses, 'Ofuse')));
      //   if (user.followed != undefined) tmp = tmp.set('followed', I.List(create_list(user.followed, 'Follow')));
      //   if (user.follower != undefined) tmp = tmp.set('follower', I.List(create_list(user.follower, 'Follow')));
      //   if (user.notifications != undefined) tmp = tmp.set('notifications', I.List(create_list(user.notifications, 'Notification')));
      //   if (user.TappedFollowed != undefined) tmp = tmp.set('TappedFollowed', I.List(create_list(user.TappedFollowed, 'TappedFollow')));
      //   return tmp;
      case TAPPING_FOLLOW:
        return state.set('followed',
          state.get('followed').update(
            state.get('followed').findIndex(function(followed: any) { 
              return followed.get('id') === action.id; 
            }), function(followed: any) {
              return followed.set('tapping', !followed.get('tapping'));
            }
          )
        );
      default:
          return state;
    }
};

const events = (state = I.fromJS(events_data), action: any) => {
  switch (action.type) {
      case RECEIVE_EVENTS:
        return I.List(create_list(action.response.body.events, 'Event'));
      default:
        return state;
    }
};

const errors = (state = I.fromJS(error_object), action: any) => {
  switch (action.type) {
      case THROW_ERROR:
        return I.fromJS(new Error(action.data));
      default:
        return state;
    }
};

const statuses = (state = I.fromJS(status_object), action: any) => {
  switch (action.type) {
      case REFLECT_STATUS:
        return I.fromJS(new Status(action.response.status));
      default:
        return state;
    }
};

const modal = (state = I.fromJS(modal_object), action: any) => {
  switch (action.type) {
      case DISPLAY_MODAL:
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

const creators = (state = I.fromJS(creators_object), action: any) => {
  switch (action.type) {
    case REQUEST_GET_CREATORS:
      return state
        .set('hasRequestedGetCreators', true);
    case SUCCESS_GET_CREATORS:
      return state
        .set('all', I.List(create_list(action.creators, 'Creator')))
        .set('hasRequestedGetCreators', false);
    case FILTER_CREATORS: //重いかもしれないが、一旦とりあえずやってみる
      const creator = state.get('all').filter((creator: any) => 
        creator.get('screen_name').startsWith('@' + action.screen_name)
      )
      return state.set('filtered', creator);
    default:
      return state;
  }
}

const reducer = combineReducers({
    user,
    events,
    errors,
    status,
    modal,
    creators,
});

export default reducer
