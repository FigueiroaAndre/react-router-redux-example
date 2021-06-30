import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
    const cart = useSelector(state => state.cart.cart);
    const itemList = useSelector(state => state.items.itemList);
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
            <h1>Cart</h1>
            <hr/>
            {
                mergedCartItemArray.map(item => {
                    return (
                        <div key={item.id}>
                            <h2 style={{margin: '0', display: 'inline'}}>{item.name}</h2>
                            <p style={{margin: '0', marginLeft: '20px', display: 'inline'}}>Amount: {item.amount}</p>
                            <p style={{margin: '0', marginLeft: '20px', display: 'inline'}}>Unit cost: ${item.cost}</p>
                            <p style={{margin: '0'}}>cost: <span style={{ fontWeight:'bold', fontSize:'2rem', color: 'darkgreen'}}>${item.cost * item.amount}</span></p>
                            <hr/>
                        </div>
                    );
                })
            }
            <h2>Total: <span style={{ fontWeight:'bold', fontSize:'2rem', color: 'darkgreen'}}>${totalCost()}</span></h2>
        </React.Fragment>
    );
}