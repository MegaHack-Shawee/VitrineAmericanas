import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #ddd;
    align-items: center;
`;

export const Row = styled.View`
    flex-direction: row;
    margin: 5px 0 15px 0;
    justify-content: space-between;
`;

export const Touch = styled.TouchableOpacity`
    padding: 5px 0;
`;

export const Deatail = styled.View`
    margin: 5px 0;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 2,
    llipsizeMode: 'tail',
})`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Text = styled.Text`
    color: ${props => props.color || '#000'};
`;
