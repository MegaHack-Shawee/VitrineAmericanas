import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Details from './pages/Details';
import ScannedProduct from './pages/ScannedProduct';
import Cart from './pages/Cart';
import Payment from './pages/Payment';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignInScreem" headerMode="none">
                <Stack.Screen
                    name="SignInScreem"
                    component={SignIn}
                    options={{title: 'Entrar'}}
                />
                <Stack.Screen
                    name="HomeScreem"
                    component={Home}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name="SignUpScreem"
                    component={SignUp}
                    options={{title: 'Cadastrar'}}
                />
                <Stack.Screen
                    name="DetailsScreem"
                    component={Details}
                    options={{title: 'Detalhes'}}
                />
                <Stack.Screen
                    name="ScannedProductScreem"
                    component={ScannedProduct}
                    opti
                    ons={{title: 'Produto lido'}}
                />
                <Stack.Screen
                    name="CartScreem"
                    component={Cart}
                    opti
                    ons={{title: 'Carrinho'}}
                />
                <Stack.Screen
                    name="PaymentScreem"
                    component={Payment}
                    opti
                    ons={{title: 'Pagamento'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
