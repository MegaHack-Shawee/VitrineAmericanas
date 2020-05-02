/**
 * PRODUTS THAT SHOULD BE IN AMERICANAS DATABASE
 */
import phone from '../assets/images/phone.png';

const products = [
    {
        code: '001',
        title:
            'Celular Motorola Moto G8 Plus Cereja 64GB Camêra Tripla 48MP + 5MP + 16MP',
        photo: phone,
        price: '2.000,00',
        installment: '10 x 200,00 s/ juros',
        brand: 'Sansung',
        color: 'Cereja',
        memory: '6GB',
        weight: '150g',
        dimensions: '14,5 x 6,9 x 0,7 cm',
    },
];

const getProduct = search => {
    return products.find(product => product.code === String(search));
};

export default getProduct;
