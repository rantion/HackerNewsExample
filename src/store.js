import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)

const store = createStore(rootReducer, composedEnhancer)
export default store