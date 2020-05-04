import {Platform} from 'react-native';
import styled from 'styled-components/native';

export default styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    background-color: #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    flex: 1;
    padding: 20px 20px 10px 20px;
`;
