import {combineReducers} from 'redux';

import Addresses from './Addresses/reducer';
import Cart from './Cart/reducer';

const rootReducer = combineReducers({
    Addresses,
    Cart,
});

export default rootReducer;
