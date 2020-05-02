import {combineReducers} from 'redux';

import Addresses from './Addresses/reducer';

const rootReducer = combineReducers({
    Addresses,
});

export default rootReducer;
