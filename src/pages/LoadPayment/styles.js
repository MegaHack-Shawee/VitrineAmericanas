import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const ImageView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Image = styled(Animatable.Image)`
    height: 300px;
    width: 300px;
`;

export const Text = styled.Text`
    font-size: 10px;
    font-weight: bold;
    color: #f57c00;
`;

export const BackgroundPayment = styled.View`
    flex: 1;
    background: #fff;
    align-items: center;
    justify-content: center;
`;
