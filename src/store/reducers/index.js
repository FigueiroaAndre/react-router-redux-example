import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import itemsReducer from "./itemsReducer";

const reducer =  combineReducers({
    items: itemsReducer,
    cart: cartReducer
});

export default reducer;
