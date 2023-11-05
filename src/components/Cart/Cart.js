import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import cartContext from '../../store/cart-context'
import CartItem from './CartItem'

// const cartItems = [
//     {
//         id: 'c1',
//         name: "Sushi",
//         amount: 2,
//         price: 12.99
//     }
// ]
const Cart = (props) => {
    const cartCtx = useContext(cartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemMap = <ul className={classes['cart-items']}> {cartCtx.items.map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)} />)}</ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItemMap}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['.button--alt']}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart