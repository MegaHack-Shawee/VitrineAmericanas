import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor="#F57C00" barStyle="light-content" />
            <Routes />
        </Provider>
    );
}
