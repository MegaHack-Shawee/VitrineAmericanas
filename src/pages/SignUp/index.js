import React, {useState, useRef} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Main from '../../components/Main';
import ArrowBack from '../../components/ArrowBack';

import {
    Form,
    FormInput,
    SubmitButton,
    SignLinkText,
    FormTitle,
    FormInputTitle,
    FormInputMasked,
} from './styles';

export default function Signup({navigation}) {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
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

    function handleSubmit() {
        try {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(async () => {
                    const user = auth().currentUser;
                    await user.updateProfile({
                        displayName: name,
                    });
                    let uId = user.uid;
                    database()
                        .ref('/users')
                        .push({uId, name, cpf, birthDate, cellphone});
                });
            console.warn('Cadastro realizado com sucesso');
            navigation.replace('HomeScreen');
        } catch (e) {
            console.warn(e);
        }
    }

    function handleReturn() {
        navigation.navigate('SignInScreen');
    }

    return (
        <Background>
            <ArrowBack action={handleReturn} />
            <Logo />
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
                        // onSubmitEditing={() => cpfRef.current.focus()}
                        //Problemas ao direcionar para o input de CPF automaticamente
                        //Resolvendo: Como incluir a REF na tag TextInputMask
                        value={name}
                        onChangeText={setName}
                    />

                    <FormInputTitle>CPF</FormInputTitle>
                    <FormInputMasked
                        placeholderTextColor="#e3e3e3"
                        type="cpf"
                        value={cpf}
                        onChangeText={setCpf}
                        placeholder={'CPF'}
                        // ref={cpfRef}
                        onSubmitEditing={() => birthDateRef.current.focus()}
                    />

                    <FormInputTitle>Data de nascimento</FormInputTitle>
                    <FormInputMasked
                        placeholderTextColor="#e3e3e3"
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY',
                        }}
                        value={birthDate}
                        onChangeText={setBirthDate}
                        placeholder={'Data de nascimento'}
                        // ref={birthDateRef}
                        onSubmitEditing={() => cellphoneRef.current.focus()}
                    />

                    <FormInputTitle>Telefone</FormInputTitle>
                    <FormInputMasked
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) ',
                        }}
                        placeholder="(22) 55555-5555"
                        placeholderTextColor="#e3e3e3"
                        value={cellphone}
                        onChangeText={setCellphone}
                        onSubmitEditing={() => emailRef.current.focus()}
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
            </Main>
        </Background>
    );
}
