import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View``;

export const Form = styled.View`
    align-self: stretch;
    height: 100%;
    margin-bottom: 30px;
`;

export const Label = styled.Text`
    color: #424242;
    font-weight: bold;
    font-size: 10px;
    align-self: stretch;
    margin-left: 5px;
    margin-top: 10px;
`;

export const InputView = styled.View`
    width: ${props => props.width};
`;

export const FormInput = styled(TextInput).attrs({
    placeholderTextColor: '#e3e3e3',
})`
    padding: 5px 20px;
    color: #424242;
    border: 1px solid #9e9e9e;
    border-radius: 30px;
`;

export const FormRow = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin: 0px;
`;

export const SubmitButton = styled(RectButton)`
    background: #f57c00;
    color: #fff;
    border-radius: 50px;
    align-items: center;
    height: 50px;
    width: 150px;
    justify-content: center;
    align-self: center;
    margin-top: 20px;
`;

export const Text = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 13px;
`;
