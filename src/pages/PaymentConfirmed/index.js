import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

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
    const {address, products} = route.params;

    useEffect(() => {
        if (auth().currentUser == null) {
            navigation.popToTop();
        }
    });

    function handleKeepBuying() {
        navigation.replace('HomeScreen');
    }

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

                    <Button onPress={handleKeepBuying}>
                        <ButtonText>Continue Comprando</ButtonText>
                    </Button>
                </Scroll>
            </Main>
        </Background>
    );
}
