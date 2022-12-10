import {combineReducers} from "@reduxjs/toolkit";
import newsItemsReducer from "./features/News/newsSlice";
import nightModeReducer from "./features/NightMode/nightModeSlice";

const rootReducer = combineReducers({
    newsItems: newsItemsReducer,
    nightMode: nightModeReducer,
})

export default rootReducer;