import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store /*persistor*/} from './store';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
    return (
        <Provider store={store}>
            {/*<PersistGate loading={null} persistor={persistor}>*/}
            <StatusBar backgroundColor="#F57C00" barStyle="light-content" />
            <Routes />
            {/*</PersistGate>*/}
        </Provider>
    );
}
