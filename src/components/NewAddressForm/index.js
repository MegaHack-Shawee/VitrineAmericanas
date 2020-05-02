import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {
    Form,
    FormRow,
    Label,
    InputView,
    FormInput,
    SubmitButton,
    Text,
} from './styles';

export default function NewAddressForm({cep}) {
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [county, setCounty] = useState('');
    const [extra, setExtra] = useState('');
    const [state, setState] = useState('');

    useEffect(() => {
        finfAddressByCep();
    });

    function finfAddressByCep() {
        //busca endereco pelo cep
        // seta campos encontrados
        setState('Rio De Janeiro');
    }

    async function handleFormSubmit() {
        const uId = auth().currentUser.uid;
        const key = database()
            .ref(`/addresses/${uId}`)
            .push().key;

        database()
            .ref(`/addresses/${uId}/${key}`)
            .set({
                street,
                number,
                county,
                extra,
                state,
                zipCode: cep,
                key,
            });
    }

    return (
        <Form showsVerticalScrollIndicator={false}>
            <FormRow>
                <InputView width="70%">
                    <Label>Endereço:</Label>
                    <FormInput value={street} onChangeText={setStreet} />
                </InputView>
                <InputView width="25%">
                    <Label>Nº:</Label>
                    <FormInput value={number} onChangeText={setNumber} />
                </InputView>
            </FormRow>
            <Label>Bairro:</Label>
            <FormInput value={county} onChangeText={setCounty} />
            <Label>Complemento:</Label>
            <FormInput value={extra} onChangeText={setExtra} />
            <SubmitButton onPress={handleFormSubmit}>
                <Text>Enviar</Text>
            </SubmitButton>
        </Form>
    );
}
