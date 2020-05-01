import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '../../assets/logo_home.png';
import Background from '../../components/Background';
import Main from '../../components/Main';

import {
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
    LogoView,
    Image,
    FormTitle,
    FormInputTitle,
    Row,
} from './styles';

export default function Signup({navigation}) {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const cpfRef = useRef();
    const birthDateRef = useRef();
    const cellphoneRef = useRef();
    const confirmEmailRef = useRef();
    const confirmPasswordRef = useRef();

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit() {}

    function handleReturn() {
        navigation.navigate('SignInScreem');
    }

    return (
        <Background>
            <Row>
                <Icon
                    name="arrow-back"
                    size={30}
                    color="#fff"
                    onPress={handleReturn}
                />
            </Row>
            <LogoView>
                <Image source={Logo} />
            </LogoView>
            <Main>
                <Form showsVerticalScrollIndicator={false}>
                    <FormTitle>Crie uma conta</FormTitle>
                    <FormInputTitle>Nome e sobrenome</FormInputTitle>
                    <FormInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome"
                        ref={nameRef}
                        returnKeyType="next"
                        onSubmitEditing={() => cpfRef.current.focus()}
                        value={name}
                        onChangeText={setName}
                    />

                    <FormInputTitle>CPF</FormInputTitle>
                    <FormInput
                        maxLength={11}
                        keyboardType="numeric"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="CPF"
                        returnKeyType="next"
                        ref={cpfRef}
                        onSubmitEditing={() => birthDateRef.current.focus()}
                        value={cpf}
                        onChangeText={setCpf}
                    />

                    <FormInputTitle>Data de nascimento</FormInputTitle>
                    <FormInput
                        keyboardType="numeric"
                        placeholder="Data"
                        returnKeyType="send"
                        ref={birthDateRef}
                        onSubmitEditing={() => cellphoneRef.current.focus()}
                        value={birthDate}
                        onChangeText={setBirthDate}
                    />

                    <FormInputTitle>Telefone</FormInputTitle>
                    <FormInput
                        placeholder="Telefone"
                        ref={cellphoneRef}
                        returnKeyType="send"
                        onSubmitEditing={() => cellphoneRef.current.focus()}
                        value={cellphone}
                        onChangeText={setCellphone}
                    />

                    <FormInputTitle>E-mail</FormInputTitle>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="E-mail"
                        returnKeyType="next"
                        ref={emailRef}
                        onSubmitEditing={() => confirmEmailRef.current.focus()}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <FormInputTitle>Confirme seu e-mail</FormInputTitle>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Confirmar e-mail"
                        returnKeyType="next"
                        ref={confirmEmailRef}
                        onSubmitEditing={() => passwordRef.current.focus()}
                        value={confirmEmail}
                        onChangeText={setConfirmEmail}
                    />

                    <FormInputTitle>Senha</FormInputTitle>
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Senha"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={() =>
                            confirmPasswordRef.current.focus()
                        }
                        value={password}
                        onChangeText={setPassword}
                    />

                    <FormInputTitle>Confirmar senha</FormInputTitle>
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Confirmar senha"
                        ref={confirmPasswordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <SubmitButton onPress={handleSubmit}>
                        <SignLinkText>Enviar</SignLinkText>
                    </SubmitButton>
                </Form>

                {/* <SignLink onPress={() => navigation.navigate('SignInScreem')}>
                    <SignLinkText>Already have an account</SignLinkText>
                </SignLink> */}
            </Main>
        </Background>
    );
}
