import React, {useState} from 'react';
import {Text, Picker} from 'react-native';

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
    const [qtd, setQtd] = useState(product.qtd);
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
                    onValueChange={(itemValue, itemIndex) => setQtd(itemValue)}>
                    <Picker.Item label="1un" value="1" />
                    <Picker.Item label="2un" value="2" />
                </Picker>
                <ProductPrice>R$ {product.price}</ProductPrice>
            </SubtotalView>
        </Container>
    );
}
