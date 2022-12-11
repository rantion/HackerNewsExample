import {createSelector} from "@reduxjs/toolkit";

export const NewsFilters = {
    Newest: 'newest',
    Starred: 'starred',
}

const NewsActions = {
    itemsLoading : 'newsItems/newsItemsLoading',
    itemsLoaded: 'newsItems/newsItemsLoaded',
    saveToggled: 'newsItems/saveToggled',
    filterChange: 'newsItems/filterChange',
    deleteItem: 'newsItems/deleteItem',
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
        case NewsActions.deleteItem: {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        }
        default:
            return state;
    }
}

// actions

export const newsItemsLoading = () => ({type: NewsActions.itemsLoading});
export const newsItemsLoaded = (items) => ({type: NewsActions.itemsLoaded, payload: items});
export const newsItemToggled = (itemId) => ({type: NewsActions.saveToggled, payload: itemId});
export const newsItemFilterChange = (status) => ({type: NewsActions.filterChange, payload: status});
export const removeNewsItem = (itemId) => ({type: NewsActions.deleteItem, payload: itemId});


// selectors

export const getNewsItems = (state) => state.newsItems.items;
export const getNewsFilter = (state) => state.newsItems.filter;
export const getFilteredNewsItems = createSelector(
    getNewsItems,
    getNewsFilter,
    (items, filter) => {
        switch (filter) {
            case NewsFilters.Starred:
                return items.filter(item => item.saved);
            case NewsFilters.Newest:
            default:
                return items;
        }
    },);


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