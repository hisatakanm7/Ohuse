import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './Redux/Reducer/reducers'

import * as I from 'immutable';

const loggerMiddleware = createLogger({
        stateTransformer: state => {
            return state && I.fromJS(state).map((s: any) => {
                    if (s === 'page') return s.toJS();
                    return s;
                }).toJS();
        },
    });

export default function configureStore() {
    return createStore(
        reducer,
        // preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}
