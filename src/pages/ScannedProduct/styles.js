import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    background-color: #d84315;
    border-radius: 20px;
    margin: 20px 0;
    padding: 10px 50px;
`;

export const Container = styled.View`
    flex: 1;
    background-color: #ddd;
    align-items: center;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 2,
    llipsizeMode: 'tail',
})`
    margin-bottom: 5px;
    margin-top: -15px;
`;

export const Info = styled.View`
    align-items: center;
`;

export const PhotoView = styled.View`
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'stretch',
})`
    max-height: 180px;
    max-width: 200px;
`;

export const Price = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const Text = styled.Text`
    font-size: 10px;
    font-weight: ${props => props.weight || 'normal'};
    color: ${props => props.color || '#000'};
`;

export const SpecificationsIcon = styled.View`
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

export const Specifications = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 10px 0 20px 0;
`;

export const Row = styled.View`
    flex-direction: row;
    margin: 5px 0 15px 0;
    justify-content: flex-end;
`;

export const Touch = styled.TouchableOpacity`
    padding: 5px 0;
`;
