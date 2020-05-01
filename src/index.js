import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#F57C00" barStyle="light-content" />
            <Routes />
        </>
    );
}
