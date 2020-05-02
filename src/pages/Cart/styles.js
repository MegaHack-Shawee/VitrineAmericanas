import {TextInputMask} from 'react-native-masked-text';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Row = styled.View`
    flex-direction: row;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    margin: 0 20px;
`;

export const Search = styled.TouchableOpacity`
    padding: 5px 5px 0 0;
`;

export const LogoView = styled.View`
    height: 100px;
    width: 100px;
    align-self: center;
    align-items: center;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'cover',
})`
    height: 110px;
    width: 110px;
`;

export const Text = styled.Text.attrs({
    numberOfLines: 1,
    llipsizeMode: 'tail',
})`
    color: ${props => props.color};
    font-size: ${props => props.size || '12px'};
    font-weight: ${props => props.weight || 'normal'};
`;

export const AddressView = styled.View`
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
`;

export const AddressButtonsView = styled.View`
    flex-direction: row;
    border: 1px solid #f57c00;
    border-radius: 10px;
    overflow: hidden;
`;

export const AddressButton = styled.TouchableOpacity`
    width: 50%;
    align-items: center;
    background-color: ${props => props.bgColor};
    padding: 5px;
`;

export const CurrentAddressView = styled.View`
    flex-direction: row;
    background-color: #fff;
    border-radius: 10px;
    justify-content: space-between;
    margin-top: 10px;
    padding: 5px 10px;
    align-items: center;
`;

export const ChangeAddressView = styled.FlatList`
    background-color: #fff;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px 10px;
    width: 70%;
    height: 150px;
`;

export const Select = styled.View`
    flex-direction: row;
    margin: 5px 0;
    align-items: center;
    justify-content: center;
`;

export const Address = styled.View`
    width: 80%;
    margin-left: 10px;
`;

export const ProductsList = styled.FlatList`
    margin-top: 30px;
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

export const Scroll = styled.ScrollView`
    align-self: stretch;
    height: 100%;
`;

export const BottomText = styled.Text`
    font-family: sans-serif;
    color: ${props => props.color || '#424242'};
    font-size: 10px;
`;

export const BottomView = styled.View`
    padding: 10px 5px;
`;

export const CEPInput = styled(TextInputMask).attrs({
    placeholderTextColor: '#e3e3e3',
    placeholderTextSize: '5px',
})`
    font-size: 10px;
    color: #424242;
    border: 1px solid #9e9e9e;
    background-color: #fff;
    margin-top: 15px;
    padding: 2px 10px;
`;
