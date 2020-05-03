export const addToCart = product => {
    return {
        type: '@Cart/ADD_TO_CART',
        payload: {
            product,
        },
    };
};

export const updateProductQuantity = (qtd, code) => {
    return {
        type: '@Cart/UPDATE_PRODUCT_QUANTITY',
        qtd,
        code,
    };
};
