import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Row, Touch, Title, Deatail, Text} from './styles';
import Modal from '../../components/Modal';

const handleBackButton = navigation => {
    navigation.goBack();
};

const handleCloseButton = navigation => {
    navigation.popToTop();
};

export default function Details({route, navigation}) {
    const {product} = route.params;

    return (
        <Container>
            <Modal>
                <Row>
                    <Touch onPress={() => handleBackButton(navigation)}>
                        <Icon name="arrow-back" size={30} color="#9e9e9e" />
                    </Touch>
                    <Touch onPress={() => handleCloseButton(navigation)}>
                        <Icon name="close" size={30} color="#9e9e9e" />
                    </Touch>
                </Row>
                <Title>{product.title}</Title>
                <Deatail>
                    <Text color="#f57c00">Código</Text>
                    <Text>{product.code}</Text>
                </Deatail>
                <Deatail>
                    <Text color="#f57c00">Marca</Text>
                    <Text>{product.brand}</Text>
                </Deatail>
                <Deatail>
                    <Text color="#f57c00">Memória</Text>
                    <Text>{product.memory}</Text>
                </Deatail>
                <Deatail>
                    <Text color="#f57c00">Peso aproximado (kg)</Text>
                    <Text>{product.weight}</Text>
                </Deatail>
                <Deatail>
                    <Text color="#f57c00">Dimensões aproximadas (AxLxP)</Text>
                    <Text>{product.dimensions}</Text>
                </Deatail>
            </Modal>
        </Container>
    );
}
