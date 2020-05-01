import React from 'react';
import {Image} from 'react-native';

import logoVitrineAmericanas from '../../assets/logoVitrineAmericanas.svg';

import {
    Container,
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
            <Image source={logoVitrineAmericanas} />
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
