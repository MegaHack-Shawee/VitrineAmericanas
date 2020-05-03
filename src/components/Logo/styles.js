import styled from 'styled-components/native';

export const LogoView = styled.View`
    margin-top: 10px;
    height: 100px;
    width: 100px;
    align-self: center;
    align-items: center;
    margin-bottom: -10px;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'stretch',
})`
    height: 70%;
    width: 120px;
`;
