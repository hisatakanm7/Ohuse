import { combineReducers } from 'redux';
const I = require('immutable');

import { ADD_LIST } from './action';
import { MODAL_TOGGLE_CHANGE, RECEIVE_LOGGED_IN, REQUEST_LOGGED_IN, RECEIVE_ERROR_LOGGED_IN, CREATE_WORK_HANDLE, RECEIVE_WORK, RECEIVE_MY_WORKS} from './action';

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

const user_info_object = {
  id: '',
  name: '',
  description: '',
  image_url: '',
};

const user_info = I.Record(user_info_object);

class UserInfo extends user_info {}
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

//User
const user_data = {
  info:{
    id: 10,
    name: 'ヒサタカ@お布施早くやりたい',
    TwID: 'hisataka',
    description: 'ofuse作りました',
    image: '',
  },
  works: [],
  follows: [{
    id: 1,
    name: '俺がファン１号',
    TwID: 'orenofan1',
    description: 'ファンです１',
    image: '',
    selected: true,
  },{
    id: 2,
    name: '俺がファン２号',
    TwID: 'orenofan2',
    description: 'ファンです２',
    image: '',
    selected: true,
  }],
  followers: [{
    id: 1,
    name: '俺のファン１号',
    TwID: 'orenofan1',
    description: 'ファン１号です',
    image: '',
  },{
    id: 2,
    name: '俺のファン２号',
    TwID: 'orenofan2',
    description: 'ファン2号です',
    image: '',
  }]
}

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
    console.log('before push')

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

const user = (state = I.fromJS(user_data), action) => {
    switch (action.type) {
      case RECEIVE_LOGGED_IN:
        return state.set('info', new UserInfo(action.response));
      case RECEIVE_MY_WORKS:
        let arr = [];
        action.response.map(child => append_works_list(arr, child));
        console.log(arr);
        return state.set('works', I.List(arr));
      case RECEIVE_WORK:
        return state.update('works', list => list.push(action.response));
      default:
          return state;
    }
};

const works = (state = I.fromJS(works_data), action) => {
  switch (action.type) {
      case MODAL_TOGGLE_CHANGE:
        const num = action.id;
        return state.setIn([num, 'modalVisible'], !state.getIn([num, 'modalVisible']))
      case RECEIVE_MY_WORKS:

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



const reducer = combineReducers({
    page,
    user,
    works,
    loading,
    create_work //1つ1つのreducerを書く。増えたらここに追加する。
});

export default reducer
