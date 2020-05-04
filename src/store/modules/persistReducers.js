import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'; // V6

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'gobarber',
            storage: AsyncStorage, // V6
            whitelist: ['Cart'],
        },
        reducers,
    );
    return persistedReducer;
};
