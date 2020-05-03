import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './modules/rootReducers';

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['Cart'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// let store = createStore(persistedReducer);
// let persistor = persistStore(store);

// export {store, persistor};

let store = createStore(rootReducer);
export {store};
