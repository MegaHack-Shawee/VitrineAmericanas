import React, {useEffect} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';

import {Container} from './styles';
import {startAddresses} from '../../store/modules/Address/actions';
import Background from '../../components/Background';
import Logo from '../../components/Logo';

export default function LoadData({navigation}) {
    const dispatch = useDispatch();
    useEffect(() => {
        const user = auth().currentUser;
        if (user != null) {
            const ref = database().ref(`/addresses/${user.uid}`);
            ref.orderByKey().once('value', onAddressesSnapshot);
        }
        navigation.replace(user ? 'HomeScreen' : 'SignInScreen');
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
            <Container>
                <Logo />
            </Container>
        </Background>
    );
}
