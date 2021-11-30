import { combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import todo from "./reducer/todo";


const rootReducer = combineReducers({
    todo,
});


const store = createStore(rootReducer, composeWithDevTools());

export default store;