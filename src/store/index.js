import {createStore} from 'redux';
import rootReducer from './reducers/rootReducers';

const store = createStore(rootReducer);

export default store;
