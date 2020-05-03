import React from 'react';
import {useSelector} from 'react-redux';

import Logo from '../../components/Logo';
import Background from '../../components/Background';
import Main from '../../components/Main';

import {formatPrice} from '../../utils/format';

import {
    RowButtons,
    Text,
    Button,
    StatusView,
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

export default function PaymentConfirmed({route, navigation}) {
    const products = useSelector(state =>
        state.Cart.map(product => ({
            ...product,
            subtotal: product.price * product.amount,
        })),
    );
    const {address} = route.params;

    const handleKeepBuying = () => {
        navigation.navigate('HomeScreen');
    };

    function calculateTotal() {
        let total = 0;
        products.forEach(p => {
            total += p.subtotal;
        });
        return total;
    }

    return (
        <Background>
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
                                {formatPrice(calculateTotal())}
                            </Text>
                        </OrderPrice>
                    </OrderMainView>

                    <RowButtons>
                        <Button>
                            <ButtonText onPress={handleKeepBuying}>
                                Continue Comprando
                            </ButtonText>
                        </Button>
                    </RowButtons>
                </Scroll>
            </Main>
        </Background>
    );
}
