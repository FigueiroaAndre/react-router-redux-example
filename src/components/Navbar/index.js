import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Navbar() {
    return (
        <nav>
            <ul>
            <li><Link to={ROUTES.HOME}>HOME</Link></li>
            <li><Link to={ROUTES.ITEMS}>ITEMS</Link></li>
            <li><Link to={ROUTES.CART}>CART</Link></li>
            <li><Link to={ROUTES.CREATE_ITEM}>CREATE ITEM</Link></li>
            <li><Link to={ROUTES.ITEM_DETAILS}>ITEM DETAIL</Link></li>
            </ul>
        </nav>
    );
}