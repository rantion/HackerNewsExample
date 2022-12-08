import {newsItemsLoaded, newsItemsLoading} from "../actions";

const initialState = {
    status: 'idle',
    items: {},
}

export default function newsItemsReducer(state = initialState, action) {
    switch (action.type) {
        case 'newsItems/newsItemsLoading': {
            return {
                ...state,
                status: 'loading'
            }
        }
        case 'newsItems/newsItemsLoaded': {
            return {
                ...state,
                status: 'idle',
                items: action.payload,
            }
        }
        default:
            return state;
    }
}

export const fetchNewsTest = () => async (dispatch) => {
    dispatch(newsItemsLoading)
    const response = await fetch('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$priority"&limitToFirst=50')
        .then(response => response.json())
        .then(data => dispatch(newsItemsLoaded(data)))
}

const fetchMaxItem = () => async (dispatch) => {
    fetch('https://hacker-news.firebaseio.com/v0/maxitem.json')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const fetchNewsItemById = (id)  => async (dispatch) => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}