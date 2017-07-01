import { combineReducers } from 'redux';
const I = require('immutable');

import { ADD_LIST } from './action';
import { MODAL_TOGGLE_CHANGE, RECEIVE_LOGGED_IN, REQUEST_LOGGED_IN, RECEIVE_ERROR_LOGGED_IN } from './action';

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


//User
const user_data = {
  info:{
    id: 10,
    name: 'ヒサタカ@お布施早くやりたい',
    TwID: 'hisataka',
    description: 'ofuse作りました',
    image: '',
  },
  works: [{
    id: 1,
    title: '自伝',
    date: '2017-5-22',
    description: '私の最初の作品です',
    eventName: 'my Event',
    image: '',
    released: true,
  }],
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
    },{
        id: 1,
        title: '私のOFUSE',
        date: '22',
        description: '私の２番目の作品です',
        eventName: 'my Event',
        image: '',
        released: true,
        creator: 'other',
        creatorId: 1,
        modalVisible: false,
      },{
          id: 1,
          title: '私のOFUSE',
          date: '22',
          description: '私の２番目の作品です',
          eventName: 'my Event',
          image: '',
          released: true,
          creator: 'other',
          creatorId: 1,
          modalVisible: false,
        },{
            id: 1,
            title: '私のOFUSE',
            date: '22',
            description: '私の２番目の作品です',
            eventName: 'my Event',
            image: '',
            released: true,
            creator: 'other',
            creatorId: 1,
            modalVisible: false,
          },{
              id: 1,
              title: '私のOFUSE',
              date: '22',
              description: '私の２番目の作品です',
              eventName: 'my Event',
              image: '',
              released: true,
              creator: 'other',
              creatorId: 1,
              modalVisible: false,
            },{
                id: 1,
                title: '私のOFUSE',
                date: '22',
                description: '私の２番目の作品です',
                eventName: 'my Event',
                image: '',
                released: true,
                creator: 'other',
                creatorId: 1,
                modalVisible: false,
              },{
                  id: 1,
                  title: '私のOFUSE',
                  date: '22',
                  description: '私の２番目の作品です',
                  eventName: 'my Event',
                  image: '',
                  released: true,
                  creator: 'other',
                  creatorId: 1,
                  modalVisible: false,
                },{
                    id: 1,
                    title: '私のOFUSE',
                    date: '22',
                    description: '私の２番目の作品です',
                    eventName: 'my Event',
                    image: '',
                    released: true,
                    creator: 'other',
                    creatorId: 1,
                    modalVisible: false,
                  },{
                      id: 1,
                      title: '私のOFUSE',
                      date: '22',
                      description: '私の２番目の作品です',
                      eventName: 'my Event',
                      image: '',
                      released: true,
                      creator: 'other',
                      creatorId: 1,
                      modalVisible: false,
                    },{
                        id: 1,
                        title: '第二作',
                        date: '22',
                        description: '私の２番目の作品です',
                        eventName: 'my Event',
                        image: '',
                        released: true,
                        creator: 'other',
                        creatorId: 1,
                        modalVisible: false,
                      },{
                          id: 1,
                          title: '第二作',
                          date: '22',
                          description: '私の２番目の作品です',
                          eventName: 'my Event',
                          image: '',
                          released: true,
                          creator: 'other',
                          creatorId: 1,
                          modalVisible: false,
                        },{
                            id: 1,
                            title: '第二作',
                            date: '22',
                            description: '私の２番目の作品です',
                            eventName: 'my Event',
                            image: '',
                            released: true,
                            creator: 'other',
                            creatorId: 1,
                            modalVisible: false,
                          },{
                              id: 1,
                              title: '第二作',
                              date: '22',
                              description: '私の２番目の作品です',
                              eventName: 'my Event',
                              image: '',
                              released: true,
                              creator: 'other',
                              creatorId: 1,
                              modalVisible: false,
                            },{
                                id: 1,
                                title: '第二作',
                                date: '22',
                                description: '私の２番目の作品です',
                                eventName: 'my Event',
                                image: '',
                                released: true,
                                creator: 'other',
                                creatorId: 1,
                                modalVisible: false,
                              },{
                                  id: 1,
                                  title: '第二作',
                                  date: '22',
                                  description: '私の２番目の作品です',
                                  eventName: 'my Event',
                                  image: '',
                                  released: true,
                                  creator: 'other',
                                  creatorId: 1,
                                  modalVisible: false,
                                },{
                                    id: 1,
                                    title: '第二作',
                                    date: '22',
                                    description: '私の２番目の作品です',
                                    eventName: 'my Event',
                                    image: '',
                                    released: true,
                                    creator: 'other',
                                    creatorId: 1,
                                    modalVisible: false,
                                  },{
                                      id: 1,
                                      title: '第二作',
                                      date: '22',
                                      description: '私の２番目の作品です',
                                      eventName: 'my Event',
                                      image: '',
                                      released: true,
                                      creator: 'other',
                                      creatorId: 1,
                                      modalVisible: false,
                                    },{
                                        id: 1,
                                        title: '第二作',
                                        date: '22',
                                        description: '私の２番目の作品です',
                                        eventName: 'my Event',
                                        image: '',
                                        released: true,
                                        creator: 'other',
                                        creatorId: 1,
                                        modalVisible: false,
                                      },{
                                          id: 1,
                                          title: '第二作',
                                          date: '22',
                                          description: '私の２番目の作品です',
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
        return state.setIn(['info', 'id'], action.response.id);
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


const reducer = combineReducers({
    page,
    user,
    works,
    loading, //1つ1つのreducerを書く。増えたらここに追加する。
});

export default reducer
