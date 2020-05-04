import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Details from './pages/Details';
import ScannedProduct from './pages/ScannedProduct';
import Cart from './pages/Cart';
import PaymentConfirmed from './pages/PaymentConfirmed';
import LoadData from './pages/LoadData';
import Geolocalization from './pages/Geolocalization';
import LoadPayment from './pages/LoadPayment';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LoadDataScreen"
                headerMode="none">
                <Stack.Screen
                    name="LoadDataScreen"
                    component={LoadData}
                    options={{title: 'Loading data'}}
                />
                <Stack.Screen
                    name="SignInScreen"
                    component={SignIn}
                    options={{title: 'Entrar'}}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={Home}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUp}
                    options={{title: 'Cadastrar'}}
                />
                <Stack.Screen
                    name="DetailsScreen"
                    component={Details}
                    options={{title: 'Detalhes'}}
                />
                <Stack.Screen
                    name="ScannedProductScreen"
                    component={ScannedProduct}
                    options={{title: 'Produto lido'}}
                />
                <Stack.Screen
                    name="CartScreen"
                    component={Cart}
                    options={{title: 'Carrinho'}}
                />
                <Stack.Screen
                    name="PaymentScreen"
                    component={PaymentConfirmed}
                    options={{title: 'Pagamento confirmado'}}
                />
                <Stack.Screen
                    name="GeolocalizationScreen"
                    component={Geolocalization}
                    options={{title: 'Geolocalização'}}
                />
                <Stack.Screen
                    name="LoadPaymentScreen"
                    component={LoadPayment}
                    options={{title: 'abrindo o ame digital'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
