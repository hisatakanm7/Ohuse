import { Record } from 'immutable';
import * as I from 'immutable';

const UserRecord = Record({
    id: '',
    name: '',
    screen_name: '',
    description: '',
    status: '',
    image_url: '',
    joined: '',
  });

  export default class User extends UserRecord {
      constructor(initial: any) {
          super(I.fromJS(initial))
      }
  }
  