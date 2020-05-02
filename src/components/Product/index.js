import React, {useState} from 'react';
import {Text, Picker} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateProductQuantity} from '../../store/actions/Cart';

import {
    Container,
    MainView,
    SubtotalView,
    ProductImage,
    ProductTitle,
    ProductTitleView,
    ProductPrice,
} from './styles';

export default function Product({product}) {
    const [qtd, setQtd] = useState(1);
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
        setQtd(qtd);
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
                    selectedValue={qtd}
                    style={{height: 50, width: 120}}
                    onValueChange={(itemValue, itemIndex) =>
                        handleQtdChanged(itemValue)
                    }>
                    {PickerOptions()}
                </Picker>
                <ProductPrice>R$ {product.total.toString()}</ProductPrice>
            </SubtotalView>
        </Container>
    );
}
