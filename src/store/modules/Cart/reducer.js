import {produce} from 'immer';
import phone from '../../../assets/images/products/motoG8/motoG8PNG.png';

const INITIAL_STATE = [
    {
        code: '647386253',
        photo: phone,
        title:
            'Celular Motorola Moto G8 Plus 64GB Camêra Tripla 48MP + 5MP + 13MP',
        qtd: 1,
        price: 2000,
        total: 2000,
    },
    {
        code: '6473862574',
        photo: phone,
        title:
            'Celular Motorola Moto G8 Plus 64GB Camêra Tripla 48MP + 5MP + 13MP',
        qtd: 1,
        price: 2000,
        total: 2000,
    },
];

export default function Cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@Cart/ADD_TO_CART': {
            return produce(state, draft => {
                draft.push(action.product);
            });
        }
        case 'UPDATE_PRODUCT_QUANTITY': {
            return produce(state, draft => {
                const index = draft.findIndex(p => p.code === action.code);
                draft[index].qtd = action.qtd;
                draft[index].total = draft[index].price * action.qtd;
            });
        }
        default: {
            return state;
        }
    }
}
