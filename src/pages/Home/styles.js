import styled from 'styled-components/native';

export const Search = styled.TouchableOpacity`
    padding: 5px 5px 0 0;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'cover',
})``;

export const Row = styled.View`
    flex-direction: row;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
`;

export const Button = styled.TouchableOpacity`
    height: 110px;
    width: 110px;
    border-radius: 55px;
    margin: 10px 10px 0 10px;
    border: 1px solid orange;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const QRCodeReader = styled.View`
    flex: 2;
    align-items: center;
    justify-content: center;
`;

export const ButtonQrCode = styled.TouchableOpacity`
    height: 90%;
    width: 90%;
    margin: 10px 10px 0 10px;
    align-items: center;
    justify-content: center;
`;

export const ImageQrCode = styled.Image.attrs({
    resizeMode: 'cover',
})`
    height: 100%;
    width: 100%;
`;

export const TextQrCode = styled.Text`
    color: #9e9e9e;
    font-size: 18px;
    position: absolute;
`;
