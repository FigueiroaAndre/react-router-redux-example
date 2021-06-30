import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route    
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CreateItem from './pages/CreateItem';
import Items from './pages/Items';
import ItemDetails from './pages/ItemDetails';

export const ROUTES = {
    HOME: '/',
    ITEMS: '/items',
    CREATE_ITEM: '/create',
    CART: '/cart',
    ITEM_DETAILS: '/details'
}

export default function Routes() {
    return (
        <Router>
            <Navbar />
            <hr/>
            <Switch>
                <Route path={ROUTES.HOME} exact component={Home}/>
                <Route path={ROUTES.ITEMS} component={Items}/>
                <Route path={ROUTES.CREATE_ITEM} component={CreateItem}/>
                <Route path={ROUTES.CART} component={Cart}/>
                <Route path={ROUTES.ITEM_DETAILS} component={ItemDetails}/>
            </Switch>
        </Router>
    );
}