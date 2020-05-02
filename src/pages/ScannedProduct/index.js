import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import phone from '../../assets/phone.png';
import specifications from '../../assets/specifications.png';

import {
    Container,
    Title,
    PhotoView,
    Image,
    Price,
    Info,
    Text,
    Specifications,
    SpecificationsIcon,
    Button,
    Row,
    Touch,
} from './styles';
import Modal from '../../components/Modal';

const product = {
    title:
        'Celular Motorola Moto G8 Plus Cereja 64GB Camêra Tripla 48MP + 5MP + 16MP',
    photo: phone,
    price: '2.000,00',
    installment: '10 x 200,00 s/ juros',
    brand: 'Sansung',
    code: '999909999',
    color: 'Cereja',
    memory: '6GB',
    weight: '150g',
    dimensions: '14,5 x 6,9 x 0,7 cm',
};

const handleSpecificationsButton = navigation => {
    navigation.navigate('DetailsScreem', {product});
};

const handleCloseButton = navigation => {
    navigation.goBack();
};

export default function ScannedProduct({navigation}) {
    return (
        <Container>
            <Modal>
                <Row>
                    <Touch onPress={() => handleCloseButton(navigation)}>
                        <Icon name="close" size={30} color="#9e9e9e" />
                    </Touch>
                </Row>
                <Title>{product.title}</Title>
                <Info>
                    <PhotoView>
                        <Image source={product.photo} />
                    </PhotoView>
                    <Price>R$ {product.price}</Price>
                    <Text color="#9e9e9e">{product.installment}</Text>
                    <Button>
                        <Text color="#fff" weight="bold">
                            Adicionar ao carrinho
                        </Text>
                    </Button>
                    <Specifications
                        onPress={() => handleSpecificationsButton(navigation)}>
                        <SpecificationsIcon>
                            <Image source={specifications} />
                        </SpecificationsIcon>
                        <Text color="#424242">Informações Técnicas</Text>
                    </Specifications>
                </Info>
            </Modal>
        </Container>
    );
}
