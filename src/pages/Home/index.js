import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Home() {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <hr/>
            <p>This is a sample application to practice with react-router-dom and react-redux libraries</p>
            <p>You can check the available items in the <Link to={ROUTES.ITEMS}>Items page</Link></p>
            <p>You can add a new item to the catalog in the <Link to={ROUTES.CREATE_ITEM}>Create Items page</Link></p>
            <p>You can check which items you have selected in the <Link to={ROUTES.CART}>Cart page</Link></p>
        </React.Fragment>
    );
}