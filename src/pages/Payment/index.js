import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo_home.png';

import qrCodeIcon from '../../assets/qrcode_icon.png';
import btnPay from '../../assets/btn_pay.png';
import btnCart from '../../assets/btn_cart.png';
import phone from '../../assets/phone.png';

import Background from '../../components/Background';
import Main from '../../components/Main';

import {
    RowButtons,
    BackButton,
    LogoView,
    Image,
    Text,
    Button,
    ProductsList,
    StatusView,
    SearchButton,
    HeaderView,
    Scroll,
    OrderViewImage,
    OrderImage,
    OrderInfo,
    OrderPrice,
    OrderMainView,
    ProductOrder,
    TextProduct,
} from './styles';

const products = {
    cellphone: {
        code: '647386253',
        photo: phone,
        title:
            'Celular Motorola Moto G8 Plus 64GB Camêra Tripla 48MP + 5MP + 13MP',
        qtd: 1,
        price: '2.000,00',
    },
};

const handleSearch = () => {
    console.warn('Search input enabled');
};

const handleBackButton = navigation => {
    navigation.goBack();
};

const handleQRCodeButton = navigation => {
    navigation.navigate('HomeScreem');
};

const handleCartButton = () => {
    console.warn(
        'Não faço do pq q tem um botão pra ir pro carrinho sendo q está é a tela de carrinho',
    );
};

const handlePaymentButton = () => {
    console.warn('redirecionar para tela de pagamento');
};

export default function Payment({navigation}) {
    return (
        <Background>
            <HeaderView>
                <BackButton onPress={() => handleBackButton(navigation)}>
                    <Icon name="arrow-back" size={30} color="#fff" />
                </BackButton>
                <SearchButton onPress={() => handleSearch()}>
                    <Icon name="search" size={35} color="#fff" />
                </SearchButton>
            </HeaderView>
            <LogoView>
                <Image source={logo} />
            </LogoView>
            <Main>
                <Scroll showsVerticalScrollIndicator={false}>
                    <StatusView background="#18B237">
                        <Text color="#fff" size="16px">
                            Pedido Realizado com sucesso!
                        </Text>
                    </StatusView>

                    <OrderMainView>
                        <OrderInfo>
                            <Text color="#000" size="18px">
                                Número do pedido: 00000000
                            </Text>
                            <Text color="#000" size="12px">
                                Endereço de entrega
                            </Text>
                            <Text color="#9e9e9e" size="12px">
                                Casa da Vó
                            </Text>
                            <Text color="#000" size="12px">
                                CEP: 28930-000
                            </Text>
                            <Text color="#9e9e9e" size="12px">
                                Entrega em até: 6 dias úteis
                            </Text>
                        </OrderInfo>
                        <ProductOrder>
                            <OrderViewImage>
                                <OrderImage source={phone} />
                            </OrderViewImage>
                            <TextProduct color="#000" size="12px">
                                Celular Motorola Moto G8 Plus 64GB Camêra Tripla
                                48MP + 5MP + 13MP
                            </TextProduct>
                        </ProductOrder>
                        <ProductOrder>
                            <OrderViewImage>
                                <OrderImage source={phone} />
                            </OrderViewImage>
                            <TextProduct color="#000" size="12px">
                                Celular Motorola Moto G8 Plus 64GB Camêra Tripla
                                48MP + 5MP + 13MP
                            </TextProduct>
                        </ProductOrder>
                        <ProductOrder>
                            <OrderViewImage>
                                <OrderImage source={phone} />
                            </OrderViewImage>
                            <TextProduct color="#000" size="12px">
                                Celular Motorola Moto G8 Plus 64GB Camêra Tripla
                                48MP + 5MP + 13MP
                            </TextProduct>
                        </ProductOrder>
                        <ProductOrder>
                            <OrderViewImage>
                                <OrderImage source={phone} />
                            </OrderViewImage>
                            <TextProduct color="#000" size="12px">
                                Celular Motorola Moto G8 Plus 64GB Camêra Tripla
                                48MP + 5MP + 13MP
                            </TextProduct>
                        </ProductOrder>

                        <OrderPrice>
                            <Text color="#000" size="18px">
                                Total:
                            </Text>
                            <Text color="#000" size="18px">
                                R$: 2.000,00
                            </Text>
                        </OrderPrice>
                    </OrderMainView>

                    <RowButtons>
                        <Button onPress={() => handleQRCodeButton(navigation)}>
                            <Image source={qrCodeIcon} />
                        </Button>
                        <Button onPress={() => handleCartButton(navigation)}>
                            <Image source={btnCart} />
                        </Button>
                        <Button onPress={() => handlePaymentButton()}>
                            <Image source={btnPay} />
                        </Button>
                    </RowButtons>
                </Scroll>
            </Main>
        </Background>
    );
}
