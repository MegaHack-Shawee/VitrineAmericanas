import {produce} from 'immer';

export default function Addresses(state = null, action) {
    switch (action.type) {
        case '@Address/START_ADDRESSES_LIST': {
            return action.addresses;
        }
        case '@Address/ADD_ADDRESS': {
            return produce(state, draft => {
                draft.push(action.address);
            });
        }
        default: {
            return state;
        }
    }
}
