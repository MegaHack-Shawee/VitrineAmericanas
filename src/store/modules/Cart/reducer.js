import {produce} from 'immer';
import getProduct from '../../../utils/products';

const INITIAL_STATE = [getProduct('001'), getProduct('002')];

export default function Cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@Cart/ADD_TO_CART': {
            return produce(state, draft => {
                const {product} = action.payload;
                const index = draft.findIndex(p => p.code === product.code);
                if (index >= 0) {
                    draft[index].amount += 1;
                    draft[index].total =
                        draft[index].price * (draft[index].amount + 1);
                } else {
                    draft.push(product);
                }
            });
        }
        case '@Cart/REMOVE_FROM_CART':
            return produce(state, draft => {
                const index = draft.findIndex(p => p.code === action.code);
                draft.splice(index, 1);
            });
        case '@Cart/UPDATE_PRODUCT_QUANTITY': {
            return produce(state, draft => {
                const index = draft.findIndex(p => p.code === action.code);
                draft[index].amount = action.qtd;
                draft[index].total = draft[index].price * action.qtd;
            });
        }
        case '@Cart/PAYMENT_CONFIRMED':
            return produce(state, draft => {
                draft.length = 0;
            });
        default: {
            return state;
        }
    }
}
