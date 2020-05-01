import React, {useState, useRef} from 'react';
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

export default function SignIn({navigation}) {
    const passRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = nav => {
        nav.navigate('HomeScreem');
    };

    const handleSignUp = nav => {
        nav.navigate('SignUpScreem');
    };

    const handleSignInFacebook = () => {
        console.log('Clicou login facebook');
    };

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
                    returnKeyType="next"
                    keyboardType="email-address"
                    onSubmitEditing={() => passRef.current.focus()}
                />
            </ViewInput>
            <ViewInput>
                <Icon name="lock" size={20} color="#ff9000" />
                <TextInput
                    ref={passRef}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Senha"
                    secureTextEntry
                    autoCapitalize="none"
                    returnKeyType="send"
                    onSubmitEditing={() => handleSignIn()}
                />
            </ViewInput>
            <ButtonLogin onPress={() => handleSignIn()}>
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
            <CreateAccountButton onPress={() => handleSignUp(navigation)}>
                <CreateAccountText>Não sou cadastrado</CreateAccountText>
            </CreateAccountButton>
        </Container>
    );
}
