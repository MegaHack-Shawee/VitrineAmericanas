import 'react-native-gesture-handler';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import './utils/configs';
import {store, persistor} from './store';
import Routes from './routes';

export default function App() {
    return (
        <Provider store={store}>
            {/*<PersistGate persistor={persistor}>*/}
            <StatusBar backgroundColor="#F57C00" barStyle="light-content" />
            <Routes />
            {/*</PersistGate>*/}
        </Provider>
    );
}
