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

export const removeFromCart = code => {
    return {
        type: '@Cart/REMOVE_FROM_CART',
        code,
    };
};

export const confirmPayment = () => {
    return {
        type: '@Cart/PAYMENT_CONFIRMED',
    };
};
