import {Record} from 'immutable';
import * as I from 'immutable';

const ErrorRecord = Record({
    type: '',
    attributes: '',
  });

export default class Error extends ErrorRecord {
    constructor(initial: any) {
        super(I.fromJS(initial))
    }
}