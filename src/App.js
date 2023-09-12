import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartIsShown, setIsCartIsShown] = useState(false)

  const showCartHandler = () => {
    setIsCartIsShown(true)
  }

  const hideCartHandler = () => {
    setIsCartIsShown(false)
  }
  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
