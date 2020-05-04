import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';

import {startAddresses} from '../../store/modules/Address/actions';
import Background from '../../components/Background';
import Logo from '../../components/Logo';

import {Container} from './styles';

export default function LoadData({navigation}) {
    const dispatch = useDispatch();

    useEffect(() => {
        const user = auth().currentUser;
        if (user != null) {
            const ref = database().ref(`/addresses/${user.uid}`);
            ref.orderByKey().once('value', onAddressesSnapshot);
        }

        setTimeout(() => {
            navigation.replace(user ? 'HomeScreen' : 'SignInScreen');
        }, 2000);
    });

    function onAddressesSnapshot(snapshot) {
        const list = [];

        snapshot.forEach(address => {
            list.push({
                ...address.toJSON(),
            });
        });
        dispatch(startAddresses(list));
    }

    return (
        <Background>
            <Container
                animation="pulse"
                duration={700}
                iterationCount={Infinity}>
                <Logo />
            </Container>
        </Background>
    );
}
