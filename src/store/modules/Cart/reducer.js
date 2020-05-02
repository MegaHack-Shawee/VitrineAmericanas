import {produce} from 'immer';
import phone from '../../../assets/phone.png';

const INITIAL_STATE = [
    {
        code: '647386253',
        photo: phone,
        title:
            'Celular Motorola Moto G8 Plus 64GB Camêra Tripla 48MP + 5MP + 13MP',
        qtd: 1,
        price: '2.000,00',
    },
    {
        code: '6473862574',
        photo: phone,
        title:
            'Celular Motorola Moto G8 Plus 64GB Camêra Tripla 48MP + 5MP + 13MP',
        qtd: 1,
        price: '2.000,00',
    },
];

export default function Cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            return produce(state, draft => {
                draft.push(action.product);
            });
        }
        default: {
            return state;
        }
    }
}
