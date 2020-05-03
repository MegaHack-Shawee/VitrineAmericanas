import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import specifications from '../../assets/Icons/specification/specifications.png';
import getProduct from '../../utils/products';

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

export default function ScannedProduct({route, navigation}) {
    const {qrCode} = route.params;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(getProduct(qrCode));
    }, [qrCode]);

    const handleCloseButton = () => {
        navigation.goBack();
    };

    const handleSpecificationsButton = () => {
        navigation.navigate('DetailsScreen', {product});
    };

    return (
        <Container>
            <Modal>
                <Row>
                    <Touch onPress={() => handleCloseButton(navigation)}>
                        <Icon name="close" size={30} color="#9e9e9e" />
                    </Touch>
                </Row>
                <Title>{product?.title}</Title>
                <Info>
                    <PhotoView>
                        <Image source={product?.photo} />
                    </PhotoView>
                    <Price>R$ {product?.price}</Price>
                    <Text color="#9e9e9e">{product?.installment}</Text>
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
