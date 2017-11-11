import {Record} from 'immutable';
import * as I from 'immutable';

export const StatusParameters: {
    logged_in: any,
    first_log_in: any,
} = {
    logged_in: '',
    first_log_in: '',
  };

const StatusRecord = Record(StatusParameters);

export default class Status extends StatusRecord {
    constructor(initial: any) {
        super(I.fromJS(initial))
    }
}