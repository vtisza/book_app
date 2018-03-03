import * as types from './type';

// Initial (starting) state
export const initialState = {
    books: [{
            key: 0,
            label: 'Gárdonyi Géza: Egri csillagok',
            rating: 5
        },
        {
            key: 1,
            label: 'Szerb Antal: Utas és holdvilág',
            rating: 5
        }
    ],
    recommended:[],
    searchText:""
}

// Our root reducer starts with the initial state
// and must return a representation of the next state
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_BOOK:
            return { ...state,
                books: action.payload
            }
        default:
            return state;
    }

}
export default rootReducer