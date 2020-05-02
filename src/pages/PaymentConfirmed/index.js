import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import phone from '../../assets/images/phone.png';

import Logo from '../../components/Logo';
import Background from '../../components/Background';
import Main from '../../components/Main';

import {
    RowButtons,
    BackButton,
    Text,
    Button,
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
    ButtonText,
} from './styles';
import {FlatList} from 'react-native-gesture-handler';

const handleSearch = () => {
    console.warn('Search input enabled');
};

const handleBackButton = navigation => {
    navigation.goBack();
};

const handleKeepBuying = navigation => {
    navigation.navigate('HomeScreen');
};

export default function PaymentConfirmed({route, navigation}) {
    const products = useSelector(state => state.Cart);
    const {address} = route.params;

    function calculateTotal() {
        let total = 0;
        products.forEach(p => {
            total += p.total;
        });
        return total;
    }
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

            <Logo />

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
                                {address.county}
                            </Text>
                            <Text color="#000" size="12px">
                                CEP: 28930-000
                            </Text>
                            <Text color="#9e9e9e" size="12px">
                                Entrega em até: 6 dias úteis
                            </Text>
                        </OrderInfo>
                        <FlatList
                            data={products}
                            keyExtractor={item => item.code}
                            renderItem={({item}) => (
                                <ProductOrder>
                                    <OrderViewImage>
                                        <OrderImage source={item.photo} />
                                    </OrderViewImage>
                                    <TextProduct color="#000" size="12px">
                                        {item.title}
                                    </TextProduct>
                                </ProductOrder>
                            )}
                        />

                        <OrderPrice>
                            <Text color="#000" size="18px">
                                Total:
                            </Text>
                            <Text color="#000" size="18px">
                                R$ {calculateTotal()}
                            </Text>
                        </OrderPrice>
                    </OrderMainView>

                    <RowButtons>
                        <Button>
                            <ButtonText
                                onPress={() => handleKeepBuying(navigation)}>
                                Continue Comprando
                            </ButtonText>
                        </Button>
                    </RowButtons>
                </Scroll>
            </Main>
        </Background>
    );
}
