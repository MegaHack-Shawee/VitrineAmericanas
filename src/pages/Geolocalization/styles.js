import styled from 'styled-components/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

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
