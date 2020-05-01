import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
    background: #ff9000;
`;

export const ButtonLogin = styled.TouchableOpacity``;

export const ButtonLoginText = styled.Text``;

export const ButtonFacebook = styled.TouchableOpacity``;

export const ButtonTextFacebook = styled.Text``;

export const CreateAccountButton = styled.TouchableOpacity``;

export const CreateAccountText = styled.Text``;
