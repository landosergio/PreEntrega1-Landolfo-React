import ItemCount from "./ItemCount";

import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

import { Link } from "react-router-dom";

function ItemDetail({ producto }) {
  const [cantProd, setCantProd] = useState(0);
  const carrito = useContext(CartContext);

  function onAdd(cantProductos) {
    setCantProd(cantProductos);
  }

  return (
    <div className="grid grid-cols-3 my-10 mx-10 sm:mx-20 xl:mx-52 ">
      <img
        src={producto.rutaImg}
        alt={`Imagen de ${producto.nombre}`}
        className="col-span-2 p-10 place-self-center w-full max-w-2xl aspect-square"
      />
      <div className="col-span-1 flex flex-col items-center py-10 border rounded-lg">
        <span className="text-2xl">{producto.precioFormat}</span>
        <div className="my-10">
          {cantProd == 0 ? (
            producto.stock == 0 ? (
              <p className="text-xl">No hay stock actualmente</p>
            ) : (
              <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
            )
          ) : (
            <div className="flex flex-col justify-center items-center">
              <p className="my-4 text-xl">{`Seleccionaste ${cantProd} unidades`}</p>
              <button
                className="border py-2 px-6 m-2 rounded-md text-xs font-bold"
                onClick={() => setCantProd(0)}
              >
                Cancelar
              </button>
              <Link className="rounded-md" to="/cart">
                <button
                  className="border py-2 px-6  rounded-md text-xs font-bold"
                  onClick={() => carrito.addItem(producto, cantProd)}
                >
                  Agregar al carrito
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <p className="col-span-2 py-10 mx-20 text-justify border-t">
        {producto.descripcion}
      </p>
    </div>
  );
}

export default ItemDetail;
