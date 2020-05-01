import styled from 'styled-components/native';

// Header

export const HeaderView = styled.View`
    flex-direction: row;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`;

export const BackButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const SearchButton = styled.TouchableOpacity``;

export const LogoView = styled.View`
    height: 100px;
    width: 100px;
    align-self: center;
    align-items: center;
`;

// Main
export const Scroll = styled.ScrollView`
    align-self: stretch;
    height: 100%;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'cover',
})``;

export const Text = styled.Text`
    color: ${props => props.color};
    font-size: ${props => props.size || '12px'};
    font-weight: ${props => props.weight || 'normal'};
`;

export const StatusView = styled.View`
    height: 50px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background: ${props => props.background};
`;

export const OrderMainView = styled.View`
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    margin-top: 10px;
    border: 2px solid #eee;
`;

export const OrderInfo = styled.View``;

export const OrderPrice = styled.View`
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
`;

export const TextProduct = styled.Text`
    color: ${props => props.color};
    font-size: ${props => props.size || '12px'};
    font-weight: ${props => props.weight || 'normal'};
    padding: 10px;
    width: 75%;
`;

export const OrderViewImage = styled.View`
    height: 100%;
    width: 25%;
    align-self: center;
    align-items: center;
`;

export const OrderImage = styled.Image.attrs({
    resizeMode: 'stretch',
})`
    height: 70px;
    width: 70px;
`;

export const ProductOrder = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    margin: 5px;
    border: 0px solid #9e9e9e;
    border-bottom-width: 1px;
`;

export const Button = styled.TouchableOpacity`
    height: 90px;
    width: 90px;
    border-radius: 55px;
    margin: 10px 10px 0 10px;
    border: 1px solid orange;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const RowButtons = styled.View`
    flex-direction: row;
    margin: 0 5px 10px;
    align-items: center;
    justify-content: center;
    bottom: 0;
`;

export const ProductsList = styled.FlatList``;
