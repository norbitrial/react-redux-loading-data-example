import types from './types';

const initialState = {
    isLoading: false,
    items: [],
    errorMessage: null,
};

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case types.DATA_FETCH_STARTED:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            };

        case types.DATA_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: [1,2,3,4,5,6],
            };

        case types.DATA_FETCH_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: 'Something went wrong'
            };
        default:
            return state;
    }
}