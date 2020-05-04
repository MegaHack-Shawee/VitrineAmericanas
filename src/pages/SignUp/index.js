import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Toast from 'react-native-simple-toast';

import Layout from '../Layout';
import Background from '../../components/Background';
import LoadingAnimation from '../../components/LoadingAnimation';

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
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function emailsMatch() {
        if (email !== confirmEmail) {
            return false;
        }
        return true;
    }

    function passwordsMatch() {
        if (password !== confirmPassword) {
            return false;
        }
        return true;
    }

    function isAnyInputEmpty() {
        if (
            name === '' ||
            cpf === '' ||
            email === '' ||
            confirmEmail === '' ||
            password === '' ||
            confirmPassword === '' ||
            cellphone === ''
        ) {
            return true;
        }
        return false;
    }

    function handleSubmit() {
        if (isAnyInputEmpty()) {
            Toast.show('Todos os campos são obrigatórios');
            return;
        }
        if (!emailsMatch()) {
            Toast.show('Os e-mails não coincidem');
            return;
        }
        if (!passwordsMatch()) {
            Toast.show('As senhas não coincidem');
            return;
        }
        setLoading(true);
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

                    Toast.show('Cadastro realizado com sucesso');
                    setLoading(false);
                    navigation.replace('LoadDataScreen');
                })
                .catch(e => {
                    setLoading(false);
                });
        } catch (e) {
            setLoading(false);
            console.warn(e);
        }
    }

    function handleReturn() {
        navigation.navigate('SignInScreen');
    }

    const inputs = [];

    function focusField(index) {
        inputs[index].focus();
    }

    return (
        <Background>
            {loading && <LoadingAnimation />}
            {!loading && (
                <Layout arrowBack={handleReturn}>
                    <Form showsVerticalScrollIndicator={false}>
                        <FormTitle>Crie uma conta</FormTitle>
                        <FormInputTitle>Nome e sobrenome</FormInputTitle>
                        <FormInput
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Nome"
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
                            ref={input => {
                                inputs.phone = input;
                            }}
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                focusField('email');
                            }}
                            blurOnSubmit={false}
                        />

                        <FormInputTitle>E-mail</FormInputTitle>
                        <FormInput
                            icon="mail-outline"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="E-mail"
                            value={email}
                            onChangeText={setEmail}
                            ref={input => {
                                inputs.email = input;
                            }}
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                focusField('corfirmEmail');
                            }}
                            blurOnSubmit={false}
                        />

                        <FormInputTitle>Confirme seu e-mail</FormInputTitle>
                        <FormInput
                            icon="mail-outline"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Confirmar e-mail"
                            value={confirmEmail}
                            onChangeText={setConfirmEmail}
                            ref={input => {
                                inputs.corfirmEmail = input;
                            }}
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                focusField('password');
                            }}
                            blurOnSubmit={false}
                        />

                        <FormInputTitle>Senha</FormInputTitle>
                        <FormInput
                            icon="lock-outline"
                            secureTextEntry
                            placeholder="Senha"
                            value={password}
                            onChangeText={setPassword}
                            ref={input => {
                                inputs.password = input;
                            }}
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                focusField('confirmPassword');
                            }}
                            blurOnSubmit={false}
                        />

                        <FormInputTitle>Confirmar senha</FormInputTitle>
                        <FormInput
                            icon="lock-outline"
                            secureTextEntry
                            placeholder="Confirmar senha"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            ref={input => {
                                inputs.confirmPassword = input;
                            }}
                            returnKeyType="send"
                            onSubmitEditing={handleSubmit}
                        />
                        <SubmitButton onPress={handleSubmit}>
                            <SignLinkText>Enviar</SignLinkText>
                        </SubmitButton>
                    </Form>
                </Layout>
            )}
        </Background>
    );
}
