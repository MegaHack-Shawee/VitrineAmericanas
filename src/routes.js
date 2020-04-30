import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Signin"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'rgb(21, 32, 43)',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerStatusBarHeight: 1,
                }}>
                <Stack.Screen
                    name="HomeScreem"
                    component={Home}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name="SignInScreem"
                    component={SignIn}
                    options={{title: 'Entrar'}}
                />
                <Stack.Screen
                    name="SignUpScreem"
                    component={SignUp}
                    options={{title: 'Cadastrar'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
