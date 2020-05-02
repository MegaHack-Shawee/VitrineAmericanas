import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import QRCodeScanner from 'react-native-qrcode-scanner';

import qrCodeIcon from '../../assets/qrCode190px.png';
import btnCart from '../../assets/btn_cart.png';

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
} from './styles';
import Logo from '../../components/Logo';

const handleSearch = () => {
    console.warn('search input enabled');
};

const handleQRCode = navigation => {
    navigation.navigate('ScannedProductScreem');
};

const handleCartButton = navigation => {
    navigation.navigate('CartScreem');
};

const handleSignOut = navigation => {
    auth()
        .signOut()
        .then(() => {
            navigation.replace('SignInScreem');
        });
};

export default function Home({navigation}) {
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
                <QRCodeReader>
                    <ButtonQrCode onPress={() => handleQRCode(navigation)}>
                        <QRCodeScanner
                        // cameraStyle={{
                        //     height: 330,
                        //     marginTop: 20,
                        //     width: 320,
                        //     alignSelf: 'center',
                        //     justifyContent: 'center',
                        // }}
                        />
                        <TextQrCode>Leitor QR Code</TextQrCode>
                        <ImageQrCode source={qrCodeIcon} />
                    </ButtonQrCode>
                </QRCodeReader>
                <Row align="center" justify="center">
                    <Button onPress={() => handleCartButton(navigation)}>
                        <Image source={btnCart} />
                    </Button>
                </Row>
            </Main>
        </Background>
    );
}
