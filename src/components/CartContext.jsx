import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function isInCart(item) {
    return cartList.find((prod) => prod.id == item.id);
  }

  function addItem(item, cant) {
    let cartCopy = JSON.parse(JSON.stringify(cartList));

    isInCart(item) &&
      (cartCopy = cartCopy.filter((prod) => prod.id != item.id));

    item.cant = cant;
    cartCopy.push(item);
    setCartList(cartCopy);
  }

  function removeItem(id) {
    let cartCopy = cartList.filter((item) => item.id != id);
    setCartList(cartCopy);
  }

  function clearCart() {
    setCartList([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
