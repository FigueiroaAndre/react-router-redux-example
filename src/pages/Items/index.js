import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { pushItem } from '../../store/reducers/cartReducer';

export default function Items() {
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();
    const history = useHistory();

    function redirectToDetailsPage(id) {
        history.push(`${ROUTES.ITEM_DETAILS}/${id}`);
    }

    return (
        <React.Fragment>

        <h1>Items</h1>
        <hr/>
            {
                items.itemList.map(item => (
                    <div key={item.id}>
                        <p><span style={{fontWeight: 'bold', display: 'inline'}}>{item.name}</span> cost: ${item.cost}</p>
                        <button onClick={() => redirectToDetailsPage(item.id)}>Details</button>
                        <button style={{ marginLeft: 20 }} onClick={() => dispatch(pushItem(item.id))}>Add to Cart</button>
                        <hr/>
                    </div>
                ))
            }
        </React.Fragment>
    );
}
