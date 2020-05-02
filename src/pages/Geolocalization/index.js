import React, {useState, useEffect} from 'react';
import {Text, Alert, PermissionsAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import Background from '../../components/Background';
import Main from '../../components/Main';

import {Search, Row, MapViewGoogle, ViewAboveMap} from './styles';
import Logo from '../../components/Logo';

const handleSearch = () => {
    console.warn('search input enabled');
};

const handleSignOut = navigation => {
    auth()
        .signOut()
        .then(() => {
            navigation.replace('SignInScreen');
        });
};

const stores = [
    {
        latitude: -22.968076,
        longitude: -42.028377,
    },
    {
        latitude: -22.881999,
        longitude: -42.013994,
    },
    {
        latitude: -22.884189,
        longitude: -42.026881,
    },
    {
        latitude: -22.87137,
        longitude: -42.035489,
    },
    {
        latitude: -22.8366469,
        longitude: -42.1013757,
    },
    {
        latitude: -22.7568041,
        longitude: -41.8893158,
    },
    {
        latitude: -22.836615,
        longitude: -42.1013724,
    },
    {
        latitude: -22.8723029,
        longitude: -42.2736203,
    },
    {
        latitude: -22.7734278,
        longitude: -41.9138351,
    },
    {
        latitude: -22.8411215,
        longitude: -42.2243546,
    },
    {
        latitude: -22.5908247,
        longitude: -41.9929369,
    },
    {
        latitude: -22.8949276,
        longitude: -42.4710801,
    },
];

export default function Geolocalization({navigation}) {
    const [initialPosition, setInitialPosition] = useState({
        latitude: -22.9571801,
        longitude: -42.0282557,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const RequestPermission = async () => {
        try {
            const permission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Permissão de Localização',
                    message: 'A aplicação precisa da permissão de localização',
                },
            );
            return permission === PermissionsAndroid.RESULTS.GRANTED
                ? true
                : false;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const GetUserLocation = async () => {
            try {
                if (RequestPermission()) {
                    Geolocation.getCurrentPosition(
                        pos => {
                            setInitialPosition({
                                latitudeDelta: 0.07,
                                longitudeDelta: 0.05,
                                latitude: pos.coords.latitude,
                                longitude: pos.coords.longitude,
                            });
                        },
                        error => {
                            console.log(error.code, error.message);
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 15000,
                            maximumAge: 10000,
                        },
                    );
                } else {
                    Alert.alert('Permissão de localização não concedida');
                }
            } catch (err) {
                console.log(err);
            }
        };
        GetUserLocation();
    }, []);

    return (
        <Background>
            <Row align="flex-end" justify="flex-end">
                <Search onPress={() => handleSignOut(navigation)}>
                    <Icon name="close" size={40} color="#fff" />
                </Search>
                <Search onPress={() => handleSearch()}>
                    <Icon name="search" size={40} color="#fff" />
                </Search>
            </Row>
            <Logo />
            <Main>
                <Text style={{color: 'grey'}}>
                    Encontre uma loja perto de você
                </Text>
                <ViewAboveMap>
                    <MapViewGoogle
                        mapType="standard"
                        followsUserLocation={true}
                        showsPointsOfInterest={true}
                        showsUserLocation={true}
                        region={initialPosition}>
                        {stores.map(store => (
                            <Marker
                                key={store.longitude}
                                coordinate={{
                                    latitude: store.latitude,
                                    longitude: store.longitude,
                                }}
                                title={'Americanas'}
                                description={'Localização da loja'}
                            />
                        ))}
                    </MapViewGoogle>
                </ViewAboveMap>
            </Main>
        </Background>
    );
}
