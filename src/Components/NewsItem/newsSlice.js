import {createSelector} from "@reduxjs/toolkit";

const NewsFilters = {
    Newest: 'newest',
    Starred: 'starred',
}

const initialState = {
    status: 'idle',
    items: [],
    filter: NewsFilters.Newest,
}

export default function newsItemsReducer(state = initialState, action) {
    switch (action.type) {
        case 'newsItems/newsItemsLoading': {
            return {
                ...state,
                status: 'loading',
            }
        }
        case 'newsItems/newsItemsLoaded': {
            return {
                ...state,
                status: 'idle',
                items: action.payload,
            }
        }
        case 'newsItems/saveToggled': {
            console.log("saveToggled", action.payload);
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
        case 'newsItems/filterChange': {
            return {
                ...state,
                status: action.payload,
            }
        }
        default:
            return state;
    }
}

// actions

export const newsItemsLoading = () => ({type: 'newsItems/newsItemsLoading'})
export const newsItemsLoaded = (items) => ({
    type: 'newsItems/newsItemsLoaded',
    payload: items,
});
export const newsItemToggled = (itemId) => ({type: 'newsItems/saveToggled', payload: itemId})
export const newsItemFilterChange = (status) => ({type: 'newsItems/filterChang', payload: status})
// selectors

export const getNewsItems = (state) => state.newsItems.items;
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