import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";

const reducer =  combineReducers({
    items: itemsReducer,
});

export default reducer;
