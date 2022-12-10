export const NewsFilters = {
    Newest: 'newest',
    Starred: 'starred',
}

export const NewsActions = {
    itemsLoading : 'newsItems/newsItemsLoading',
    itemsLoaded: 'newsItems/newsItemsLoaded',
    saveToggled: 'newsItems/saveToggled',
    filterChange: 'newsItems/filterChange',
}

const initialState = {
    status: 'idle',
    items: [],
    filter: NewsFilters.Newest,
}

export default function newsItemsReducer(state = initialState, action) {
    switch (action.type) {
        case NewsActions.itemsLoading: {
            return {
                ...state,
                status: 'loading',
            }
        }
        case NewsActions.itemsLoaded: {
            return {
                ...state,
                status: 'idle',
                items: action.payload,
            }
        }
        case NewsActions.saveToggled: {
            return {
                ...state,
                items: state.items.map((item) => {
                    if(item.id !== action.payload){
                        return item
                    }
                    return {
                        ...item,
                        saved: !item.saved,
                    }
                })
            }
        }
        case NewsActions.filterChange: {
            return {
                ...state,
                filter: action.payload,
            }
        }
        default:
            return state;
    }
}

// actions

export const newsItemsLoading = () => ({type: NewsActions.itemsLoading})
export const newsItemsLoaded = (items) => ({
    type: NewsActions.itemsLoaded,
    payload: items,
});
export const newsItemToggled = (itemId) => ({type: NewsActions.saveToggled, payload: itemId})
export const newsItemFilterChange = (status) => ({type: NewsActions.filterChange, payload: status})


// selectors

export const getNewsItems = (state) => state.newsItems.items;
export const getNewsFilter = (state) => state.newsItems.filter;
export const getFilteredNewsItems = (state, filter) => {
    const items = getNewsItems(state);
    switch(filter) {
        case NewsFilters.Starred:
            return items.filter(item => item.saved);
        case NewsFilters.Newest:
        default:
            return items;
    }
}


// other functions/requests

export const fetchNewsTest = () => async (dispatch) => {
    dispatch(newsItemsLoading())
    await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
        .then(response => response.json())
        .then(data => {
            dispatch(newsItemsLoaded(data.map(item  => ({
                id: item,
                saved: false,
            }))))
        })
}

export const fetchNewsItemById = (id)  => async (dispatch) => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}