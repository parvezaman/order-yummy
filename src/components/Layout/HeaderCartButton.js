import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import cartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const [showBump, setShowBump] = useState(false)
    const cartCtx = useContext(cartContext)
    const { items } = cartCtx

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${showBump ? classes.bump : ""}`

    useEffect(() => {
        if (items.length === 0) {
            return
        }

        setShowBump(true)

        const timer = setTimeout(() => {
            setShowBump(false)
        }, 300);

        // as you have a sideeffect in the useeffect  you should have a clean up function. and by default returning a function in a useEffect will act as a cleanup function \

        return () => {
            clearTimeout(timer)
        }
    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.iscon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;