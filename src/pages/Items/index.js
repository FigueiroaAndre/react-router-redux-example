import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Items() {
    const items = useSelector(state => state.items);
    const history = useHistory();

    function redirectToDetailsPage(id) {
        history.push(`${ROUTES.ITEM_DETAILS}/${id}`);
    }

    return items.itemList.map(item => (
        <div key={item.id}>
            <p><span style={{fontWeight: 'bold', display: 'inline'}}>{item.name}</span> cost: ${item.cost}</p>
            <button onClick={(e) => redirectToDetailsPage(item.id)}>Details</button>
            <button style={{ marginLeft: 20 }}>Add to Cart</button>
            <hr/>
        </div>
    ));
}
