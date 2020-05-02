import styled from 'styled-components/native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

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

export const ViewAboveMap = styled.SafeAreaView`
    border-radius: 20px;
    margin-bottom: 60px;
`;

export const MapViewGoogle = styled(MapView)`
    margin-top: 10px;
    height: 100%;
    width: 100%;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #4f4f4f;
    font-size: 16px;
    font-family: sans-serif;
    align-items: center;
`;

export const ButtonSearch = styled.TouchableOpacity``;
