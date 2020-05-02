import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

import Background from '../../components/Background';
import Main from '../../components/Main';

import {
    Search,
    Image,
    QRCodeReader,
    Row,
    Button,
    ButtonQrCode,
    ImageQrCode,
    TextQrCode,
    MapViewGoogle,
    ViewAboveMap,
} from './styles';
import Logo from '../../components/Logo';

const handleSearch = () => {
    console.warn('search input enabled');
};

const handleSignOut = navigation => {
    auth()
        .signOut()
        .then(() => {
            navigation.replace('SignInScreem');
        });
};

export default function Geolocalization({navigation}) {
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
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </ViewAboveMap>
                <Row align="center" justify="center">
                    {/*<Button onPress={() => handleCartButton(navigation)}>
                        <Image source={btnCart} />
                    </Button>*/}
                </Row>
            </Main>
        </Background>
    );
}
