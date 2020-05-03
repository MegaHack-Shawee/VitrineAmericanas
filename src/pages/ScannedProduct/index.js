import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import specifications from '../../assets/Icons/specification/specifications.png';
import getProduct from '../../utils/products';
import * as CartActions from '../../store/modules/Cart/actions';
import {formatPrice} from '../../utils/format';

import Modal from '../../components/Modal';

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

export default function ScannedProduct({route, navigation}) {
    const {qrCode} = route.params;
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (auth().currentUser == null) {
            navigation.popToTop();
        }
    });

    useEffect(() => {
        setProduct(getProduct(qrCode));
    }, [qrCode]);

    const handleCloseButton = () => {
        navigation.goBack();
    };

    const handleSpecificationsButton = () => {
        navigation.navigate('DetailsScreen', {product});
    };

    const handleAddToCart = () => {
        dispatch(CartActions.addToCart(product));
        navigation.navigate('CartScreen');
    };

    return (
        <Container>
            <Modal>
                <Row>
                    <Touch onPress={handleCloseButton}>
                        <Icon name="close" size={30} color="#9e9e9e" />
                    </Touch>
                </Row>
                {product && (
                    <>
                        <Title>{product?.title}</Title>
                        <Info>
                            <PhotoView>
                                <Image source={product?.photo} />
                            </PhotoView>
                            <Price>{formatPrice(product?.price)}</Price>
                            <Text color="#9e9e9e">{product?.installment}</Text>
                            <Button onPress={handleAddToCart}>
                                <Text color="#fff" weight="bold">
                                    Adicionar ao carrinho
                                </Text>
                            </Button>
                            <Specifications
                                onPress={() =>
                                    handleSpecificationsButton(navigation)
                                }>
                                <SpecificationsIcon>
                                    <Image source={specifications} />
                                </SpecificationsIcon>
                                <Text color="#424242">
                                    Informações Técnicas
                                </Text>
                            </Specifications>
                        </Info>
                    </>
                )}
            </Modal>
        </Container>
    );
}
