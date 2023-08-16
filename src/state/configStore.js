import { createStore, combineReducers} from "redux"
import {allocateReducer} from "./reducer/allocateReducer";

export const configStore = () => {
	const store = createStore(
	combineReducers({ allocateReducer }),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
}