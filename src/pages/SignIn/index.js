import React, {useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Feather';

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
    ViewInput,
    TextInput,
} from './styles';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    const handleCreateAccount = useCallback(() => {
        console.log('Clicou não sou cadastrado');
    }, []);

    const handleSignInFacebook = useCallback(() => {
        console.log('Clicou Entrar com Facebook');
    }, []);

    return (
        <Container>
            <ImageView>
                <Logo source={logoVitrineAmericanas} />
            </ImageView>
            <ViewInput>
                <Icon name="mail" size={20} color="#ff9000" />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="E-mail"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
            </ViewInput>
            <ViewInput>
                <Icon name="lock" size={20} color="#ff9000" />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Senha"
                    secureTextEntry
                    autoCapitalize="none"
                />
            </ViewInput>
            <ButtonLogin onPress={() => handleLogin()}>
                <ButtonLoginText>LOGIN</ButtonLoginText>
            </ButtonLogin>
            <ButtonFacebook>
                <ButtonTextFacebook
                    onPress={() => {
                        handleSignInFacebook();
                    }}>
                    ENTRAR COM FACEBOOK
                </ButtonTextFacebook>
            </ButtonFacebook>
            <CreateAccountButton>
                <CreateAccountText
                    onPress={() => {
                        handleCreateAccount();
                    }}>
                    Não sou cadastrado
                </CreateAccountText>
            </CreateAccountButton>
        </Container>
    );
}
