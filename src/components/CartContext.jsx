import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState({
    lista: [],
    compraTerminada: [],
  });

  useEffect(() => {
    let cartStorage = JSON.parse(localStorage.getItem("carrito")) || [];
    setCartList({ lista: cartStorage, compraTerminada: [] });
  }, []);

  function isInCart(item) {
    return cartList.lista.find((prod) => prod.id == item.id);
  }

  function addItem(item, cant) {
    let cartCopy = JSON.parse(JSON.stringify(cartList.lista));

    isInCart(item) &&
      (cartCopy = cartCopy.filter((prod) => prod.id != item.id));

    item.cant = cant;
    cartCopy.push(item);
    localStorage.setItem("carrito", JSON.stringify(cartCopy));

    setCartList({ lista: cartCopy, compraTerminada: [] });
  }

  function removeItem(id) {
    let cartCopy = cartList.lista.filter((item) => item.id != id);
    localStorage.setItem("carrito", JSON.stringify(cartCopy));

    setCartList({ lista: cartCopy, compraTerminada: [] });
  }

  function clearCart() {
    localStorage.setItem("carrito", "[]");
    setCartList({ lista: [], compraTerminada: [] });
  }

  function checkout(docRef) {
    let cartCopy = JSON.parse(JSON.stringify(cartList.lista));
    docRef.then((infoCompra) => {
      localStorage.setItem("carrito", "[]");
      setCartList({ lista: [infoCompra], compraTerminada: cartCopy });
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clearCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
