import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Button} from './styles';

export default function ArrowBack({action, navigation}) {
    return (
        <Button onPress={action}>
            <Icon name="arrow-back" size={35} color="#fff" />
        </Button>
    );
}
