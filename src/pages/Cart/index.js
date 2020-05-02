import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';

import qrCodeIcon from '../../assets/qrcode_icon.png';
import btnPay from '../../assets/btn_pay.png';
import phone from '../../assets/phone.png';

import Background from '../../components/Background';
import Main from '../../components/Main';
import Product from '../../components/Product';
import NewAddressForm from '../../components/NewAddressForm';

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
    Select,
    ChangeAddressView,
    Button,
    ProductsList,
    BottomView,
    BottomText,
    CEPInput,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Logo from '../../components/Logo';

const products = [
    {
        code: '647386253',
        photo: phone,
        title:
            'Celular Motorola Moto G8 Plus 64GB Camêra Tripla 48MP + 5MP + 13MP',
        qtd: 1,
        price: '2.000,00',
    },
    {
        code: '647386243',
        photo: phone,
        title:
            'Celular Motorola Moto G8 Plus 64GB Camêra Tripla 48MP + 5MP + 13MP',
        qtd: 1,
        price: '2.000,00',
    },
];

const lista = ['teste 1', 'teste 2', 'teste 3'];

const handleSearch = () => {
    console.warn('Search input enabled');
};

const handleBackButton = navigation => {
    navigation.goBack();
};

const handleQRCodeButton = navigation => {
    navigation.navigate('HomeScreen');
};

const handlePaymentButton = navigation => {
    navigation.navigate('PaymentScreen');
};

export default function Cart({navigation}) {
    const [activeButton, setActiveButton] = useState('addressesList');
    const [total, setTotal] = useState(2000.0);
    const [changeAddress, setChangeAddress] = useState(false);
    const [address, setAddress] = useState('');
    const [cep, setCep] = useState('');

    const addresses = useSelector(state => state.Addresses);

    function handleAdressButton(active) {
        if (activeButton !== active) {
            setActiveButton(active);
        }
    }

    function YourAddresses() {
        if (changeAddress) {
            if (addresses == null) {
                return (
                    <Text color="#000" weight="bold" size="10px">
                        Nenhum endereço cadastrado
                    </Text>
                );
            }
            return (
                <ChangeAddressView
                    data={addresses}
                    keyExtractor={item => item.street}
                    renderItem={({item}) => (
                        <Select>
                            <RadioButton
                                value="first"
                                status="checked"
                                onPress={() => {
                                    setAddress('first address');
                                    setChangeAddress(false);
                                }}
                            />
                            <Address>
                                <Text color="#000" weight="bold" size="10px">
                                    {item.county}
                                </Text>
                                <Text color="#000" size="10px">
                                    {item.cep}
                                </Text>
                                <Text color="#000" size="10px">
                                    {item.street}, {item.number}
                                </Text>
                            </Address>
                        </Select>
                    )}
                />
            );
        } else {
            return (
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
                    <TouchableOpacity onPress={() => setChangeAddress(true)}>
                        <Text color="#f57c00">TROCAR</Text>
                    </TouchableOpacity>
                </CurrentAddressView>
            );
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
                                activeButton === 'addressesList'
                                    ? '#f57c00'
                                    : '#fff'
                            }
                            onPress={() => handleAdressButton('addressesList')}>
                            <Text
                                color={
                                    activeButton == 'addressesList'
                                        ? '#fff'
                                        : '#f57c00'
                                }>
                                Seus endereços
                            </Text>
                        </AddressButton>
                        <AddressButton
                            bgColor={
                                activeButton === 'addressesList'
                                    ? '#fff'
                                    : '#f57c00'
                            }
                            onPress={() => handleAdressButton('newAddress')}>
                            <Text
                                color={
                                    activeButton == 'addressesList'
                                        ? '#f57c00'
                                        : '#fff'
                                }>
                                Novo endereço
                            </Text>
                        </AddressButton>
                    </AddressButtonsView>
                    {activeButton === 'addressesList' && YourAddresses()}
                    {activeButton === 'newAddress' && (
                        <CEPInput
                            type={'zip-code'}
                            value={cep}
                            onChangeText={setCep}
                            placeholder="digite o novo CEP de entrega"
                        />
                    )}
                </AddressView>
                {activeButton === 'addressesList' ? (
                    <>
                        <ProductsList
                            data={products}
                            keyExtractor={item => item.code}
                            renderItem={({item}) => <Product product={item} />}
                        />
                        <BottomView>
                            <BottomText>
                                R$ {total} em até 12x de{' '}
                                {(total / 12).toFixed(2)} s/ juros no cartão de
                                crédito com ame e receba R${' '}
                                {(total / 50).toFixed(2)}
                                <BottomText color="orange">
                                    {' '}
                                    (2% de volta){' '}
                                </BottomText>
                            </BottomText>
                        </BottomView>
                    </>
                ) : (
                    <NewAddressForm cep={cep} />
                )}
                <Row align="center" justify="center">
                    <Button onPress={() => handleQRCodeButton(navigation)}>
                        <Image source={qrCodeIcon} />
                    </Button>
                    <Button onPress={() => handlePaymentButton(navigation)}>
                        <Image source={btnPay} />
                    </Button>
                </Row>
            </Main>
        </Background>
    );
}
