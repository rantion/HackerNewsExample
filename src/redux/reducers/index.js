import {combineReducers} from "@reduxjs/toolkit";
import newsItemsReducer from "./newsItems";

const rootReducer = combineReducers({
    newsItems: newsItemsReducer
})

export default rootReducer;