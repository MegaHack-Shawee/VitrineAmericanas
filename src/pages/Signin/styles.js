import styled from 'styled-components/native';
import {Platform} from 'react-native';

import Background from '../../components/Background';

export const Container = styled(Background)`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 40px ${Platform.OS === 'android' ? 150 : 40}px;
    background: #f57c00;
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    background: #fff;
    border-radius: 40px;

    justify-content: center;
    align-items: center;
    margin-top: 8px;
`;

export const ButtonLoginText = styled.Text`
    font-family: sans-serif;
    color: #f57c00;
    font-size: 18px;
`;

export const ButtonFacebook = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    background: #c51618;
    border-radius: 40px;

    justify-content: center;
    align-items: center;
    margin-top: 8px;
`;

export const ButtonTextFacebook = styled.Text`
    font-family: sans-serif;
    color: #fff;
    font-size: 18px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
    margin-top: 20px;
`;

export const CreateAccountText = styled.Text`
    color: #f4ede8;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
`;
