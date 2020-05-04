import React, {useEffect} from 'react';
import Toast from 'react-native-simple-toast';

import ame from '../../assets/icons/payment/iconAme90pxPNG.png';

import {ImageView, Image, Text, BackgroundPayment} from './styles';

export default function LoadPayment({route, navigation}) {
    const {address, products} = route.params;
    useEffect(() => {
        setTimeout(() => {
            Toast.show(
                'Pagamento com ame efetuado com sucesso, obrigado por escolher a vitrine americanas :)',
                Toast.LONG,
            );
            navigation.navigate('PaymentScreen', {
                address,
                products,
            });
        }, 4000);
    });

    return (
        <BackgroundPayment>
            <ImageView>
                <Image
                    source={ame}
                    animation="pulse"
                    iterationCount={Infinity}
                    duration={700}
                />
                <Text>Pagamento com ame digital.</Text>
                <Text>
                    Por favor aguarde enquanto confirmamos o seu pagamento...
                </Text>
            </ImageView>
        </BackgroundPayment>
    );
}
