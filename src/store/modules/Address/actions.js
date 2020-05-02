export const startAddresses = addresses => {
    return {
        type: '@Address/START_ADDRESSES_LIST',
        addresses,
    };
};
export const addAddress = address => {
    return {
        type: '@Address/ADD_ADDRESS',
        address,
    };
};
