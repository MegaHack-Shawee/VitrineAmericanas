import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import QRCodeScanner from 'react-native-qrcode-scanner';

import qrCodeIcon from '../../assets/Icons/QRCodeReader/qrCodeReader190pxPNG.png';
import btnCart from '../../assets/Icons/bag/iconBagSmallPNG.png';
import localizationIcon from '../../assets/Icons/localization/iconLocalization190px.png';

import Background from '../../components/Background';
import Main from '../../components/Main';

import {
    Search,
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

export default function Home({navigation}) {
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        setShouldShow(false);
    }, []);

    //O QUE ISSO VAI FAZER??????????
    const handleSearch = () => {
        console.warn('search input enabled');
    };

    const handleSignOut = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.replace('SignInScreen');
            });
    };

    const handleCartButton = () => {
        navigation.navigate('CartScreen');
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
            <Row align="flex-end" justify="flex-end">
                <Search onPress={handleSignOut}>
                    <Icon name="close" size={40} color="#fff" />
                </Search>
                <Search onPress={handleSearch}>
                    <Icon name="search" size={40} color="#fff" />
                </Search>
            </Row>
            <Logo />
            <Main>
                <QRCodeReader>
                    <ButtonQrCode onPress={() => setShouldShow(!shouldShow)}>
                        {shouldShow ? (
                            <>
                                <QRCodeScanner
                                    onRead={handleReadSucess}
                                    // Properties for change the camera size
                                    // cameraStyle={{
                                    //     height: 330,
                                    //     marginTop: 20,
                                    //     width: 320,
                                    //     alignSelf: 'center',
                                    //     justifyContent: 'center',
                                    // }}
                                />
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
                <Row align="center" justify="center">
                    <Button onPress={handleCartButton}>
                        <Image source={btnCart} />
                    </Button>
                    <Button onPress={handleFindStore}>
                        <ImageIconLocalization source={localizationIcon} />
                    </Button>
                </Row>
            </Main>
        </Background>
    );
}
