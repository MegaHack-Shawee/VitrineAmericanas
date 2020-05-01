import styled from 'styled-components/native';

export const LogoView = styled.View`
    height: 100px;
    width: 100px;
    align-self: center;
    align-items: center;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'stretch',
})`
    height: 70%;
    width: 120px;
`;
