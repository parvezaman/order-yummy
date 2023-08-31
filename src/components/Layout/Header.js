import React from 'react'
import classes from './Header.module.css'
import headerMealsImg from '../../assets/meals.jpg'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>OrderYummY</h1>

        <button>Cart</button>
      </header>

      <div className={classes['main-image']}>
        <img src={headerMealsImg} alt="Table full of delicious meals" />
      </div>
    </>
  )
}

export default Header