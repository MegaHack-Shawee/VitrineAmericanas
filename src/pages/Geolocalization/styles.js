import styled from 'styled-components/native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

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

export const ViewAboveMap = styled.SafeAreaView`
    border-radius: 20px;
    margin-bottom: 60px;
`;

export const MapViewGoogle = styled(MapView)`
    margin-top: 10px;
    height: 100%;
    width: 100%;
`;

export const Text = styled.Text`
    color: ${props => props.color};
    font-size: ${props => props.size || '12px'};
    font-weight: ${props => props.weight || 'normal'};
`;
