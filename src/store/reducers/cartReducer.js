const INITIAL_STATE = {
    cart: []
}

const cartActions = {
    PUSH_ITEM: 'cart/add_item',
    REMOVE_ITEM: 'cart/remove_item'
}

export function pushItem(id) {
    return {
        type: cartActions.PUSH_ITEM,
        payload: {
            id
        }
    };
}

export function removeItem(id) {
    return {
        type: cartActions.REMOVE_ITEM,
        payload: {
            id
        }
    }
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case cartActions.PUSH_ITEM:
            const isItemAlreadyInTheCart = !!state.cart.find(cartItem => cartItem.id === action.payload.id);

            if (isItemAlreadyInTheCart) {
                const newCartArray =  state.cart.map(cartItem =>  cartItem.id === action.payload.id ? {...cartItem, amount: cartItem.amount + 1} : cartItem);
                return { ...state, cart: newCartArray}
            } else {
                return { ...state, cart: [...state.cart, { id: action.payload.id, amount: 1 }]}
            }

        case cartActions.REMOVE_ITEM:
            break;

        default:
            break;
    }
    return state;
}