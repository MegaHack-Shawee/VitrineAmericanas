import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const LogoView = styled.View`
    height: 100px;
    width: 100px;
    align-self: center;
    align-items: center;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'cover',
})``;

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

export const FormInput = styled(TextInput).attrs({
    placeholderTextColor: '#9e9e9e',
})`
    padding-left: 20px;
    color: #333;
    margin-bottom: 20px;
    border: 1px solid #111;
    border-radius: 50px;
`;

export const SubmitButton = styled(LinearGradient).attrs({
    colors: ['#F57C00', '#D84315'],
})`
    color: #fff;
    border-radius: 50px;
    align-items: center;
    flex: 1;
    height: 40px;
    justify-content: center;
`;

export const SignLink = styled.TouchableOpacity`
    margin-top: 20px;
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
