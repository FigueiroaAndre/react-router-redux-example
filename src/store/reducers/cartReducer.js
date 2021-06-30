const INITIAL_STATE = {
    cart: []
}

const cartActions = {
    PUSH_ITEM: 'cart/add',
    DECREMENT_ITEM: 'cart/decrement',
    CLEAR_CART: 'cart/clear',
    REMOVE_ITEM: 'cart/remove'
}

export function pushItem(id) {
    return {
        type: cartActions.PUSH_ITEM,
        payload: {
            id
        }
    };
}

export function decrementItem(id) {
    return {
        type: cartActions.DECREMENT_ITEM,
        payload: {
            id
        }
    }
}

export function clearCart() {
    return {
        type: cartActions.CLEAR_CART
    }
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
                const newCartArray = state.cart.map(cartItem => cartItem.id === action.payload.id ? {...cartItem, amount: cartItem.amount + 1} : cartItem);
                return { ...state, cart: newCartArray};
            } else {
                return { ...state, cart: [...state.cart, { id: action.payload.id, amount: 1 }]};
            }

        case cartActions.DECREMENT_ITEM:
            const selectedCartItem = state.cart.find(cartItem => cartItem.id === action.payload.id);
            
            if (selectedCartItem.amount === 1) {
                const newCartArray = state.cart.filter(cartItem => cartItem.id !== selectedCartItem.id);
                return { ...state, cart: newCartArray};
            } else {
                const newCartArray = state.cart.map(cartItem => cartItem.id === action.payload.id ? {...cartItem, amount: cartItem.amount - 1} : cartItem);
                return { ...state, cart: newCartArray};
            }
        
        case cartActions.CLEAR_CART:
            return { ...state, cart: []}

        case cartActions.REMOVE_ITEM:
            const newCartArray = state.cart.filter(cartItem => cartItem.id !== action.payload.id);
            return { ...state, cart: newCartArray};

        default:
            break;
    }
    return state;
}