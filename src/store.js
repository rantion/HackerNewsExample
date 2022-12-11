import {configureStore} from "@reduxjs/toolkit";
import newsItemsReducer from "./features/News/newsSlice";
import nightModeReducer from "./features/NightMode/nightModeSlice";

const store = configureStore({
    reducer: {
        newsItems: newsItemsReducer,
        nightMode: nightModeReducer,
    },
    devTools: true,

})
export default store