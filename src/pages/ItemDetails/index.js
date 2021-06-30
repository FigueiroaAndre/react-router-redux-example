import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function ItemDetails() {
    const { id } = useParams()
    const { name, description, cost } = useSelector(state => state.items.itemList.find(item => item.id === parseInt(id)));

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Cost: <span style={{ fontWeight:'bold', fontSize:'2rem', color: 'darkgreen'}}>${cost}</span></p>
            <button>Add to Cart</button>
        </div>
    );
}