import styled from 'styled-components/native';

import Background from '../../components/Background';

export const Container = styled(Background)`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 40px 10px;
    background: #f57c00;
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    background: #fff;
    border-radius: 40px;

    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonLoginText = styled.Text`
    font-family: sans-serif;
    color: #f57c00;
    font-size: 18px;
`;

export const ButtonFacebook = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    background: #2c4e96;
    border-radius: 40px;

    justify-content: center;
    align-items: center;
    margin-top: 10px;
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
    font-family: sans-serif;
`;

export const ImageView = styled.View`
    width: 100%;
    margin-bottom: 70px;
    align-items: center;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'cover',
})``;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #4f4f4f;
    font-size: 16px;
    font-family: sans-serif;
    align-items: center;
`;

export const ViewInput = styled.View`
    width: 100%;
    height: 50px;
    padding: 0 16px;
    background: #fff;
    border-radius: 40px;
    margin-bottom: 8px;
    border-width: 2px;
    border-color: #fff;

    flex-direction: row;
    align-items: center;
`;
