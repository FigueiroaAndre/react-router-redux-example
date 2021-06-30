import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { pushItem } from '../../store/reducers/cartReducer';

export default function ItemDetails() {
    const { id } = useParams()
    const { name, description, cost } = useSelector(state => state.items.itemList.find(item => item.id === parseInt(id)));
    const dispatch = useDispatch();


    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Cost: <span style={{ fontWeight:'bold', fontSize:'1.3rem', color: 'darkgreen'}}>${cost}</span></p>
            <button onClick={() => dispatch(pushItem(parseInt(id)))}>Add to Cart</button>
        </div>
    );
}