export const addToCart = product => {
    return {
        type: '@Cart/ADD_TO_CART',
        product,
    };
};
