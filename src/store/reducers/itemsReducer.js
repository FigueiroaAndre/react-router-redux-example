const INITIAL_STATE = {
    itemList: [
        {
            id: 1,
            name: 'Ball',
            description: 'A magic ball capable of bounce up to the sky.',
            cost: 50
        },
        {
            id: 2,
            name: 'Triangle',
            description: 'A 2 dimensional pyramid that contains the power of the egyptian gods.',
            cost: 275
        },
        {
            id: 3,
            name: 'Square',
            description: 'A portal capable of teleport anyone and anything to anywhere.',
            cost: 500
        }
    ]
}

export const itemsActions = {
    ADD_ITEM: 'items/add_item',
}

export default function itemsReducer(state = INITIAL_STATE, action) {
    if (action.type === itemsActions.ADD_ITEM) {
        const newItem = {
            id: state.items.length + 1,
            name: action.payload.name,
            description: action.payload.description,
            cost: action.payload.cost
        }
        return { ...state, itemList: [...state.items, newItem]}
    }
    return state;
}