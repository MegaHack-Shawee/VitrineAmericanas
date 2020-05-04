import {persistStore} from 'redux-persist';
import {createStore} from 'redux';

import persistReducer from './modules/persistReducers';
import rootReducer from './modules/rootReducers';

// const store = createStore(persistReducer(rootReducer));
// const persistor = persistStore(store);

// export {store, persistor};

const store = createStore(rootReducer);
export {store};
