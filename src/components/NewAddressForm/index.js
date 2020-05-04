import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {addAddress} from '../../store/modules/Address/actions';

import {
    FormRow,
    Label,
    InputView,
    FormInput,
    SubmitButton,
    Text,
    Form,
} from './styles';

export default function NewAddressForm({cep}) {
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [county, setCounty] = useState('');
    const [extra, setExtra] = useState('');
    const [state, setState] = useState('');

    const dispatch = useDispatch();

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

        const address = {
            street,
            number,
            county,
            extra,
            state,
            zipCode: cep,
            key,
        };

        database()
            .ref(`/addresses/${uId}/${key}`)
            .set(address);

        dispatch(addAddress(address));
    }

    const inputs = [];

    function focusField(index) {
        inputs[index].focus();
    }

    return (
        <ScrollView style={{flex: 1}}>
            <Form>
                <FormRow>
                    <InputView width="70%">
                        <Label>Endereço:</Label>
                        <FormInput
                            value={street}
                            onChangeText={setStreet}
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                focusField('number');
                            }}
                            blurOnSubmit={false}
                        />
                    </InputView>
                    <InputView width="25%">
                        <Label>Nº:</Label>
                        <FormInput
                            value={number}
                            onChangeText={setNumber}
                            ref={input => {
                                inputs.number = input;
                            }}
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                focusField('county');
                            }}
                            blurOnSubmit={false}
                        />
                    </InputView>
                </FormRow>
                <Label>Bairro:</Label>
                <FormInput
                    value={county}
                    onChangeText={setCounty}
                    ref={input => {
                        inputs.county = input;
                    }}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        focusField('extra');
                    }}
                    blurOnSubmit={false}
                />
                <Label>Complemento:</Label>
                <FormInput
                    value={extra}
                    onChangeText={setExtra}
                    ref={input => {
                        inputs.extra = input;
                    }}
                    returnKeyType="send"
                    onSubmitEditing={handleFormSubmit}
                />
                <SubmitButton onPress={handleFormSubmit}>
                    <Text>Enviar</Text>
                </SubmitButton>
            </Form>
        </ScrollView>
    );
}
