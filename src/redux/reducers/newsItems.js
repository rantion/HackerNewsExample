const initialState = {
    status: 'idle',
    newsItems: {},
}

export default function newsItemsReducer(state = initialState, action) {
    switch (action.type) {
        case 'newsItems/newsItemsLoading': {
            return {
                ...state,
                status: 'loading'
            }
        }
        default:
            return state;
    }
}