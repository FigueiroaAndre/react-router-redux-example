import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Navbar() {
    const cart = useSelector(state => state.cart.cart);

    return (
        <nav>
            <ul>
            <li><Link to={ROUTES.HOME}>HOME</Link></li>
            <li><Link to={ROUTES.ITEMS}>ITEMS</Link></li>
            <li><Link to={ROUTES.CART}>CART {cart.length === 0 ? '' : `(${cart.length})`}</Link></li>
            <li><Link to={ROUTES.CREATE_ITEM}>CREATE ITEM</Link></li>
            </ul>
        </nav>
    );
}