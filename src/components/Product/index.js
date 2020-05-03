import React from 'react';
import {Picker, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {updateProductQuantity} from '../../store/modules/Cart/actions';
import * as CartActions from '../../store/modules/Cart/actions';

import {
    Container,
    MainView,
    SubtotalView,
    ProductImage,
    ProductTitle,
    ProductTitleView,
    ProductPrice,
    TrashTouch,
} from './styles';
import {formatPrice} from '../../utils/format';

export default function Product({product, navigation}) {
    const qrCode = product.code;
    const dispatch = useDispatch();
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function PickerOptions() {
        return options.map(option => {
            return (
                <Picker.Item
                    key={option}
                    label={option + ' un'}
                    value={option}
                />
            );
        });
    }

    function handleRemoveFromCart() {
        dispatch(CartActions.removeFromCart(product.code));
    }

    function handleQtdChanged(qtd) {
        dispatch(CartActions.updateProductQuantity(qtd, product.code));
    }
    return (
        <Container
            onTouchEnd={() =>
                navigation.navigate('ScannedProductScreen', {qrCode})
            }>
            <MainView>
                <ProductImage source={product.photo} />
                <ProductTitleView>
                    <ProductTitle>{product.title}</ProductTitle>
                </ProductTitleView>
            </MainView>
            <SubtotalView>
                <Picker
                    selectedValue={product.amount}
                    style={{height: 50, width: 120}}
                    onValueChange={(itemValue, itemIndex) =>
                        handleQtdChanged(itemValue)
                    }>
                    {PickerOptions()}
                </Picker>
                <ProductPrice>{formatPrice(product.subtotal)}</ProductPrice>
                <TrashTouch onPress={() => handleRemoveFromCart()}>
                    <Icon name="ios-trash" color="#000" size={30} />
                </TrashTouch>
            </SubtotalView>
        </Container>
    );
}
