import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import qrCodeIcon from '../../assets/qrcode_icon.png';
import btnPay from '../../assets/btn_pay.png';
import phone from '../../assets/phone.png';

import Background from '../../components/Background';
import Main from '../../components/Main';

import {
    Row,
    Search,
    Image,
    Text,
    AddressView,
    AddressButtonsView,
    AddressButton,
    CurrentAddressView,
    Address,
    Button,
    ProductsList,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Logo from '../../components/Logo';

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

const handlePaymentButton = () => {
    console.warn('redirecionar para tela de pagamento');
};

export default function Cart({navigation}) {
    const [activeButton, setActiveButton] = useState('adressList');

    function handleAdressButton(active) {
        if (activeButton !== active) {
            setActiveButton(active);
        }
    }
    return (
        <Background>
            <Row align="flex-end" justify="space-between">
                <Search onPress={() => handleBackButton(navigation)}>
                    <Icon name="arrow-back" size={30} color="#fff" />
                </Search>
                <Search onPress={() => handleSearch()}>
                    <Icon name="search" size={35} color="#fff" />
                </Search>
            </Row>
            <Logo />
            <Main>
                <AddressView>
                    <AddressButtonsView>
                        <AddressButton
                            bgColor={
                                activeButton === 'adressList'
                                    ? '#f57c00'
                                    : '#fff'
                            }
                            onPress={() => handleAdressButton('adressList')}>
                            <Text
                                color={
                                    activeButton == 'adressList'
                                        ? '#fff'
                                        : '#f57c00'
                                }>
                                Seus endereços
                            </Text>
                        </AddressButton>
                        <AddressButton
                            bgColor={
                                activeButton === 'adressList'
                                    ? '#fff'
                                    : '#f57c00'
                            }
                            onPress={() => handleAdressButton('newAdress')}>
                            <Text
                                color={
                                    activeButton == 'adressList'
                                        ? '#f57c00'
                                        : '#fff'
                                }>
                                Novo endereço
                            </Text>
                        </AddressButton>
                    </AddressButtonsView>
                    <CurrentAddressView>
                        <Address>
                            <Text color="#000" size="10px">
                                casa da vó
                            </Text>
                            <Text color="#000" weight="bold">
                                CEP 28970-000
                            </Text>
                            <Text color="#000" size="10px">
                                Travessa guimarães, 10
                            </Text>
                        </Address>
                        <TouchableOpacity>
                            <Text color="#f57c00">TROCAR</Text>
                        </TouchableOpacity>
                    </CurrentAddressView>
                </AddressView>
                {/*<ProductsList
                    data={products}
                    keyExtractor={item => item.code}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />*/}
                <Row align="center" justify="center">
                    <Button onPress={() => handleQRCodeButton(navigation)}>
                        <Image source={qrCodeIcon} />
                    </Button>
                    <Button onPress={() => handlePaymentButton()}>
                        <Image source={btnPay} />
                    </Button>
                </Row>
            </Main>
        </Background>
    );
}
