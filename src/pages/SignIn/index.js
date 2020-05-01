import React from 'react';
import {View, Image} from 'react-native';

import logoVitrineAmericanas from '../../assets/logoVitrineAmericanas5.png';

import {
    Container,
    ImageView,
    Logo,
    ButtonLogin,
    ButtonLoginText,
    ButtonFacebook,
    ButtonTextFacebook,
    CreateAccountButton,
    CreateAccountText,
} from './styles';

export default function SignIn({navigation}) {
    const handleSignIn = nav => {
        nav.navigate('HomeScreem');
    };

    const handleSignUp = nav => {
        nav.navigate('SignUpScreem');
    };

    return (
        <Container>
            <ImageView>
                <Logo source={logoVitrineAmericanas} />
            </ImageView>
            <ButtonLogin onPress={() => handleSignIn(navigation)}>
                <ButtonLoginText>LOGIN</ButtonLoginText>
            </ButtonLogin>
            <ButtonFacebook>
                <ButtonTextFacebook>ENTRAR COM FACEBOOK</ButtonTextFacebook>
            </ButtonFacebook>
            <CreateAccountButton onPress={() => handleSignUp(navigation)}>
                <CreateAccountText>Não sou cadastrado</CreateAccountText>
            </CreateAccountButton>
        </Container>
    );
}
