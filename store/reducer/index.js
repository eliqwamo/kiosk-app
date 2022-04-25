import { GET_STORES } from '../action';

const initialState = {
    allStores : []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_STORES:
            return {
                ...state,
                allStores: action.data
            };
        default:
            return state;
    }
};
