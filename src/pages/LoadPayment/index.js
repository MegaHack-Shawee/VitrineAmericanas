import React, {useEffect} from 'react';
import Toast from 'react-native-simple-toast';

import ame from '../../assets/icons/payment/iconAme90pxPNG.png';
import Background from '../../components/Background';
import {ImageView, Image, Text} from './styles';

export default function LoadPayment({route, navigation}) {
    const {address, products} = route.params;
    useEffect(() => {
        setTimeout(() => {
            Toast.show(
                'Pagamento com ame efetuiado com sucesso, obrigado por escolher a vitrine americanas :)',
                Toast.LONG,
            );
            navigation.navigate('PaymentScreen', {
                address,
                products,
            });
        }, 4000);
    });

    return (
        <Background>
            <ImageView>
                <Image source={ame} />
                <Text>Fazendo pagamento com ame digital.</Text>
                <Text>Aguarde...</Text>
            </ImageView>
        </Background>
    );
}
