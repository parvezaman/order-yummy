import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import cartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(cartContext)

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.iscon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;