import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { pushItem, decrementItem, clearCart, removeItem } from '../../store/reducers/cartReducer';
import { ROUTES } from '../../routes';

export default function Cart() {
    const cart = useSelector(state => state.cart.cart);
    const itemList = useSelector(state => state.items.itemList);
    const dispatch = useDispatch();
    const history = useHistory();

    function redirectToDetailsPage(id) {
        history.push(`${ROUTES.ITEM_DETAILS}/${id}`);
    }

    const mergedCartItemArray = cart.map(cartItem => {
        const item = itemList.find(item => item.id === cartItem.id);
        return {
            id: cartItem.id,
            amount: cartItem.amount,
            name: item.name,
            cost: item.cost
        }
    }); 

    function totalCost() {
        return mergedCartItemArray.reduce((accumulator, item) => {
            return accumulator + item.amount * item.cost;
        }, 0);
    }

    return (
        <React.Fragment>
            <h1 style={{marginBottom: '0'}}>Cart</h1>
            <button onClick={() => dispatch(clearCart())}>CLEAR CART</button>
            <hr/>
            {
                mergedCartItemArray.map(item => {
                    return (
                        <div key={item.id}>
                            <h2 style={{margin: '0', display: 'inline'}}>{item.name}</h2>
                            <p style={{margin: '0', marginLeft: '20px', display: 'inline'}}>Amount: {item.amount}</p>
                            <button onClick={() => dispatch(pushItem(item.id))} style={{marginLeft: '10px'}}>+</button>
                            <button onClick={() => dispatch(decrementItem(item.id))} style={{marginLeft: '5px'}}>-</button>
                            <p style={{margin: '0', marginLeft: '20px', display: 'inline'}}>Unit cost: ${item.cost}</p>
                            <p style={{margin: '0'}}>cost: <span style={{ fontWeight:'bold', fontSize:'2rem', color: 'darkgreen'}}>${item.cost * item.amount}</span></p>
                            <button onClick={() => redirectToDetailsPage(item.id)}>Details</button>
                            <button style={{ marginLeft: 20 }} onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                            <hr/>
                        </div>
                    );
                })
            }
            <h2>Total: <span style={{ fontWeight:'bold', fontSize:'2rem', color: 'darkgreen'}}>${totalCost()}</span></h2>
        </React.Fragment>
    );
}