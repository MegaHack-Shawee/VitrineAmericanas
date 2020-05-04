import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
    colors: ['#F57C00', '#D84315'],
})`
    flex: 1;
`;
