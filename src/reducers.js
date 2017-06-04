import { combineReducers } from 'redux';
const I = require('immutable');

import { ADD_LIST } from './action';

//User
const user_data = {
  info:{
    id: 1,
    name: 'ヒサタカ',
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
const works_data = {
  id: '',
  title: '',
  date: '',
  description: '',
  eventName: '',
  image: '',
  released: '',
  creator: '',
}



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
        default:
            return state;
    }
};

const works = (state = I.fromJS(works_data), action) => {
    switch (action.type) {
        default:
            return state;
    }
};


const reducer = combineReducers({
    page //1つ1つのreducerを書く。増えたらここに追加する。
});

export default reducer
