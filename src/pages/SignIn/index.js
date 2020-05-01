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

export default function SignIn() {
    return (
        <Container>
            <ImageView>
                <Logo source={logoVitrineAmericanas} />
            </ImageView>
            <ButtonLogin>
                <ButtonLoginText>LOGIN</ButtonLoginText>
            </ButtonLogin>
            <ButtonFacebook>
                <ButtonTextFacebook>ENTRAR COM FACEBOOK</ButtonTextFacebook>
            </ButtonFacebook>
            <CreateAccountButton>
                <CreateAccountText>Não sou cadastrado</CreateAccountText>
            </CreateAccountButton>
        </Container>
    );
}
