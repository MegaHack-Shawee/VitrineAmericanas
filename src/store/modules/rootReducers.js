import {combineReducers} from 'redux';

import Address from './Address/reducer';
import Cart from './Cart/reducer';

const rootReducer = combineReducers({
    Address,
    Cart,
});

export default rootReducer;
