import React from 'react';
import {Picker} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateProductQuantity} from '../../store/modules/Cart/actions';

import {
    Container,
    MainView,
    SubtotalView,
    ProductImage,
    ProductTitle,
    ProductTitleView,
    ProductPrice,
} from './styles';
import {formatPrice} from '../../utils/format';

export default function Product({product}) {
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

    function handleQtdChanged(qtd) {
        dispatch(updateProductQuantity(qtd, product.code));
    }
    return (
        <Container>
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
            </SubtotalView>
        </Container>
    );
}
