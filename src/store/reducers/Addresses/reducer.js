import {produce} from 'immer';

export default function Addresses(state = null, action) {
    switch (action.type) {
        case 'START_ADDRESSES_LIST': {
            return action.addresses;
        }
        default: {
            return state;
        }
    }
}
