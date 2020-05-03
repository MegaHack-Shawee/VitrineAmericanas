import {produce} from 'immer';

const INITIAL_STATE = [];

export default function Cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@Cart/ADD_TO_CART': {
            return produce(state, draft => {
                const {product} = action.payload;
                draft.push(product);
            });
        }
        case '@Cart/REMOVE_FROM_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        case '@Cart/UPDATE_PRODUCT_QUANTITY': {
            return produce(state, draft => {
                const index = draft.findIndex(p => p.code === action.code);
                draft[index].amount = action.qtd;
                draft[index].total = draft[index].price * action.qtd;
            });
        }
        default: {
            return state;
        }
    }
}
