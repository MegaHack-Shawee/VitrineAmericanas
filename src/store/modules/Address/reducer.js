import {produce} from 'immer';

export default function Addresses(state = null, action) {
    switch (action.type) {
        case '@Address/START_ADDRESSES_LIST': {
            if (action.addresses.length > 0) {
                return action.addresses;
            } else {
                return state;
            }
        }
        case '@Address/ADD_ADDRESS': {
            return produce(state, draft => {
                if (draft == null) {
                    draft = new Array(action.address);
                } else {
                    draft.push(action.address);
                }
            });
        }
        default: {
            return state;
        }
    }
}
