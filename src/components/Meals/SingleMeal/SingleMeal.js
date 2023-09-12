import React, { useContext } from 'react'
import classes from './SingleMeal.module.css'
import MealItemForm from './MealItemForm'
import cartContext from '../../../store/cart-context'

const SingleMeal = (props) => {
    const cartCtx = useContext(cartContext)

    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>

            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default SingleMeal