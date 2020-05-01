import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

const handlePaymentButton = navigation => {
    navigation.navigate('PaymentScreem');
};

export default function Home({navigation}) {
    return (
        <Background>
            <Row align="flex-end" justify="flex-end">
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
                    <Button onPress={() => handlePaymentButton(navigation)}>
                        <Image source={btnPay} />
                    </Button>
                </Row>
            </Main>
        </Background>
    );
}
