import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';

// const persistedStore = persistStore(store);

export default function App() {
    return (
        <Provider store={store}>
            {/*
            <PersistGate persistor={persistedStore} loading={null}>
            */}
            <StatusBar backgroundColor="#F57C00" barStyle="light-content" />
            <Routes />
            {/*</PersistGate>*/}
        </Provider>
    );
}
