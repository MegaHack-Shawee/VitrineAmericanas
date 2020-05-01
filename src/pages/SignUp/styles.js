import {TextInputMask} from 'react-native-masked-text';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const FormInputTitle = styled.Text`
    color: #424242;
    font-weight: bold;
    align-self: stretch;
    margin-left: 20px;
`;

export const FormTitle = styled.Text`
    font-size: 20px;
    color: #f57c00;
    font-weight: bold;
    align-self: center;
    margin-bottom: 30px;
`;

export const Form = styled.ScrollView`
    align-self: stretch;
    height: 100%;
`;

export const FormInputMasked = styled(TextInputMask)`
    padding-left: 20px;
    color: #424242;
    margin-bottom: 20px;
    border: 1px solid #9e9e9e;
    border-radius: 50px;
`;

export const FormInput = styled(TextInput).attrs({
    placeholderTextColor: '#e3e3e3',
})`
    padding-left: 20px;
    color: #424242;
    margin-bottom: 20px;
    border: 1px solid #9e9e9e;
    border-radius: 50px;
`;

export const SubmitButton = styled(RectButton)`
    background: #d84315;
    color: #fff;
    border-radius: 50px;
    align-items: center;
    height: 40px;
    justify-content: center;
`;

export const SignLinkText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;

export const Row = styled.View`
    flex-direction: row;
    margin: 10px 20px 0px 20px;
`;
