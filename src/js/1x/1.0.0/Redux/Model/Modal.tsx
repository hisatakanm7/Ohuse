import { Record } from 'immutable';
import * as I from 'immutable';

const ModalRecord = Record({
    active: false,
    component: '',
    options: '',
  });

  export default class Modal extends ModalRecord {
    constructor(inital: any) {
        super(inital)
    }
  }
  