import React, {useState, useEffect, memo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import QRCodeScanner from 'react-native-qrcode-scanner';

import qrCodeIcon from '../../assets/Icons/QRCodeReader/qrCodeReader190pxPNG.png';
import btnCart from '../../assets/Icons/bag/iconBagSmallPNG.png';
import localizationIcon from '../../assets/Icons/localization/iconLocalization120px.png';

import Background from '../../components/Background';
import Main from '../../components/Main';

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
} from './styles';
import Logo from '../../components/Logo';

function Home({navigation}) {
    const [shouldShow, setShouldShow] = useState(false);

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
        <Background>
            <Logo />
            <Main>
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
                                <TextQrCode>Pressione para ativar</TextQrCode>
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
                    <Button onPress={handleSignOut} shouldHaveBorder={true}>
                        <Icon name="exit-to-app" size={35} color="#f57c00" />
                        <ButtonText>Sair</ButtonText>
                    </Button>
                </Row>
            </Main>
        </Background>
    );
}

export default memo(Home);
