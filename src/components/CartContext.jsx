import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState({
    lista: [],
    compraTerminada: [],
  });

  function isInCart(item) {
    return cartList.lista.find((prod) => prod.id == item.id);
  }

  function addItem(item, cant) {
    let cartCopy = JSON.parse(JSON.stringify(cartList.lista));

    isInCart(item) &&
      (cartCopy = cartCopy.filter((prod) => prod.id != item.id));

    item.cant = cant;
    cartCopy.push(item);

    setCartList({ lista: cartCopy, compraTerminada: [] });
  }

  function removeItem(id) {
    let cartCopy = cartList.lista.filter((item) => item.id != id);
    setCartList({ lista: cartCopy, compraTerminada: [] });
  }

  function clearCart() {
    setCartList({ lista: [], compraTerminada: false });
  }

  function terminarCompra() {
    let cartCopy = JSON.parse(JSON.stringify(cartList.lista));

    setCartList({ lista: [], compraTerminada: cartCopy });
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clearCart,
        terminarCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
