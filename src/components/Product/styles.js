import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 0 10px;
`;

export const MainView = styled.View`
    flex-direction: row;
    border: 0px solid #9e9e9e;
    border-bottom-width: 1px;
    border-top-width: 1px;
    padding: 10px 5px;
    align-items: center;
`;

export const SubtotalView = styled.View`
    flex-direction: row;
    border: 0px solid #9e9e9e;
    border-bottom-width: 1px;
    padding: 10px 5px;
    align-items: center;
    justify-content: space-between;
`;

export const ProductImage = styled.Image.attrs({
    resizeMode: 'stretch',
})`
    height: 70px;
    width: 70px;
`;

export const ProductTitleView = styled.View`
    padding: 0 20px;
    width: 75%;
`;

export const ProductTitle = styled.Text.attrs({
    numberOfLines: 3,
    llipsizeMode: 'tail',
})`
    color: #424242;
    font-size: 10px;
`;

export const ProductPrice = styled.Text`
    color: #424242;
    font-weight: bold;
`;
export const TrashTouch = styled.TouchableOpacity`
    padding: 0 10px;
`;
