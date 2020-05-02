import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import {ScrollView} from 'react-native';

import qrCodeIcon from '../../assets/qrCode_icon.png';
import btnPay from '../../assets/btn_pay.png';

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
    ChangeAddress,
} from './styles';
import Logo from '../../components/Logo';

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
    const [changeAddress, setChangeAddress] = useState(false);
    const [currentAddress, setCurrentAddress] = useState('');
    const [cep, setCep] = useState('');
    const [total, setTotal] = useState(0);
    const addresses = useSelector(state => state.Addresses);
    const products = useSelector(state => state.Cart);

    useEffect(() => {
        setCurrentAddress(addresses[0]);
    }, [addresses]);

    useEffect(() => {
        setTotal(calculateTotal());
    }, [calculateTotal, products]);

    function handleAdressButton(active) {
        if (activeButton !== active) {
            setActiveButton(active);
        }
    }
    const calculateTotal = useCallback(() => {
        let total = 0;
        products.forEach(p => {
            total += p.total;
        });
        return total;
    }, [products]);

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
                                status={
                                    item.key === currentAddress.key
                                        ? 'checked'
                                        : 'unchecked'
                                }
                                onPress={() => {
                                    setCurrentAddress(item);
                                    setChangeAddress(false);
                                }}
                            />
                            <Address>
                                <Text color="#000" weight="bold" size="10px">
                                    {item.county}
                                </Text>
                                <Text color="#000" size="10px">
                                    {item.zipCode}
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
                    <Address width="70%">
                        <Text color="#000" size="10px">
                            {currentAddress.county}
                        </Text>
                        <Text color="#000" weight="bold">
                            CEP {currentAddress.zipCode}
                        </Text>
                        <Text color="#000" size="10px">
                            {currentAddress.street}, {currentAddress.number}
                        </Text>
                    </Address>
                    <ChangeAddress onPress={() => setChangeAddress(true)}>
                        <Text color="#f57c00">TROCAR</Text>
                    </ChangeAddress>
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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <AddressView>
                        <AddressButtonsView>
                            <AddressButton
                                bgColor={
                                    activeButton === 'addressesList'
                                        ? '#f57c00'
                                        : '#fff'
                                }
                                onPress={() =>
                                    handleAdressButton('addressesList')
                                }>
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
                                onPress={() =>
                                    handleAdressButton('newAddress')
                                }>
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
                                renderItem={({item}) => (
                                    <Product product={item} />
                                )}
                            />
                            <BottomView>
                                <BottomText>
                                    R$ {total} em até 12x de{' '}
                                    {(total / 12).toFixed(2)} s/ juros no cartão
                                    de crédito com ame e receba R${' '}
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
                </ScrollView>
            </Main>
        </Background>
    );
}
