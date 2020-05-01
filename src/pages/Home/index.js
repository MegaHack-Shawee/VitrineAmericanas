import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

import qrCodeIcon from '../../assets/qrcode_icon.png';
import btnPay from '../../assets/btn_pay.png';
import btnCart from '../../assets/btn_cart.png';

import Background from '../../components/Background';
import Main from '../../components/Main';

import {Search, Image, QRCodeReader, Row, Button} from './styles';
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

const handlePaymentButton = () => {
    console.warn('Indo para a tela de pagamento');
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
                <Text style={{color: 'grey'}}>Aponte para um produto,</Text>
                <QRCodeReader>
                    <Button onPress={() => handleQRCode(navigation)}>
                        <Image source={qrCodeIcon} />
                    </Button>
                </QRCodeReader>
                <Row align="center" justify="center">
                    <Button onPress={() => handleCartButton(navigation)}>
                        <Image source={btnCart} />
                    </Button>
                    <Button onPress={() => handlePaymentButton()}>
                        <Image source={btnPay} />
                    </Button>
                </Row>
            </Main>
        </Background>
    );
}
