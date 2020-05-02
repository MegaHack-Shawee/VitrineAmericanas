export const startAddresses = product => {
    return {
        type: 'ADD_TO_CART',
        product,
    };
};

export const updateProductQuantity = (qtd, code) => {
    return {
        type: 'UPDATE_PRODUCT_QUANTITY',
        qtd,
        code,
    };
};
