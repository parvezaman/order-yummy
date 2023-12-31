import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

        const existingCartItem = state.items[existingCartItemIndex]

        // let updatedItem
        let updatedItems

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }



        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE_CART_ITEM') {
        console.log(state);
        console.log(action);
        const findExistingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )

        // console.log(findExistingCartItemIndex);
        const existingItem = state.items[findExistingCartItemIndex]
        // console.log(existingItem); 

        const updatedTotalAmount = state.totalAmount - existingItem.price

        let updatedItemsList;

        if (existingItem.amount === 1) {
            updatedItemsList = state.items.filter(item => item.id !== action.id)
        }
        else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItemsList = [...state.items]
            updatedItemsList[findExistingCartItemIndex] = updatedItem
        }

        return {
            items: updatedItemsList,
            totalAmount: updatedTotalAmount
        }

    }

    return defaultCartState
}

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: "ADD_CART_ITEM", item: item })
    }

    const removeItemToCartHandler = id => {
        dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartContextProvider