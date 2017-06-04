import { combineReducers } from 'redux';
const I = require('immutable');

import { ADD_LIST } from './action';

//User
const user_data = {
  info:{
    id: '',
    name: '',
    TwID: '',
    description: '',
    image: '',
  },
  works: [{
    id: '',
    title: '',
    date: '',
    description: '',
    eventName: '',
    image: '',
    released: '',
  }],
  follows: [{
    id: '',
    name: '',
    TwID: '',
    description: '',
    image: '',
    selected: '',
  }],
  followers: [{
    id: '',
    name: '',
    TwID: '',
    description: '',
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
