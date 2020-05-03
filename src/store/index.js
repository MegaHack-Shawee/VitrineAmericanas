import {createStore, applyMiddleware} from 'redux';
import {persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './modules/rootReducers';

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['Cart'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer, applyMiddleware(createLogger()));

const store = createStore(rootReducer);

export default store;
