import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const cartItems = [
    {
        id: 'c1',
        name: "Sushi",
        amount: 2,
        price: 12.99
    }
]
const Cart = (props) => {
    const cartItemMap = <ul className={classes['cart-items']}> {cartItems.map(item => <li>{item.name}</li>)}</ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItemMap}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>36.63</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['.button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart