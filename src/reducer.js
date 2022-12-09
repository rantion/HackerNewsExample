import {combineReducers} from "@reduxjs/toolkit";
import newsItemsReducer from "../../features/news/newsSlice";

const rootReducer = combineReducers({
    newsItems: newsItemsReducer
})

export default rootReducer;