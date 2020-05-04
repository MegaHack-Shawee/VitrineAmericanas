import React, {useState, useEffect, memo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import QRCodeScanner from 'react-native-qrcode-scanner';

import qrCodeIcon from '../../assets/icons/QRCodeReader/qrCodeReader190pxPNG.png';
import btnCart from '../../assets/icons/bag/iconBagSmallPNG.png';
import localizationIcon from '../../assets/icons/localization/iconLocalization120px.png';

import Layout from '../Layout';

import {
    ButtonText,
    Image,
    QRCodeReader,
    Row,
    Button,
    ButtonQrCode,
    ImageQrCode,
    TextQrCode,
    ImageIconLocalization,
    ButtonExit,
} from './styles';

function Home({navigation}) {
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        if (auth().currentUser == null) {
            navigation.popToTop();
        }
    });

    useEffect(() => {
        setShouldShow(false);

        return () => {
            setShouldShow(false);
        };
    }, []);

    const handleSignOut = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.replace('SignInScreen');
            });
    };

    const handleCartButton = () => {
        navigation.replace('CartScreen');
    };

    const handleReadSucess = e => {
        setShouldShow(!shouldShow);
        const qrCode = e.data;
        navigation.navigate('ScannedProductScreen', {qrCode});
    };

    const handleFindStore = () => {
        navigation.navigate('GeolocalizationScreen');
    };

    return (
        <Layout>
            <QRCodeReader>
                <ButtonQrCode onPress={() => setShouldShow(!shouldShow)}>
                    {shouldShow ? (
                        <>
                            <QRCodeScanner onRead={handleReadSucess} />
                            <TextQrCode>Leitor QR Code</TextQrCode>
                            <ImageQrCode source={qrCodeIcon} />
                        </>
                    ) : (
                        <>
                            <TextQrCode
                                animation="pulse"
                                duration={1000}
                                iterationCount={Infinity}>
                                Pressione para ativar
                            </TextQrCode>
                            <ImageQrCode source={qrCodeIcon} />
                        </>
                    )}
                </ButtonQrCode>
            </QRCodeReader>
            <Row>
                <Button onPress={handleCartButton}>
                    <Image source={btnCart} />
                </Button>
                <Button onPress={handleFindStore}>
                    <ImageIconLocalization source={localizationIcon} />
                </Button>
                <ButtonExit onPress={handleSignOut} shouldHaveBorder={true}>
                    <Icon name="exit-to-app" size={35} color="#f57c00" />
                    <ButtonText>Sair</ButtonText>
                </ButtonExit>
            </Row>
        </Layout>
    );
}

export default memo(Home);
