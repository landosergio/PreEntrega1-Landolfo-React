import { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [cantProd, setCantProd] = useState(initial);

  return (
    <div className="flex items-center mb-4 text-slate-700 ">
      <div className="flex mx-2  border rounded-md">
        <button
          className="px-3 py-1 "
          onClick={() => (cantProd > 0 ? setCantProd(cantProd - 1) : null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>
        <span className="mx-12 px-3 py-1  text-2xl"> {cantProd} </span>
        <button
          className="px-3 py-1 "
          onClick={() => (cantProd < stock ? setCantProd(cantProd + 1) : null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
      </div>
      <button
        className="border py-2 px-6 mx-2 rounded-md text-xs font-bold"
        onClick={() => (stock ? onAdd(cantProd) : null)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;

/*
FUNC pasadas a ternarias

  function sumar() {
    if (cantProd < stock) {
      setCantProd(cantProd + 1);
    }
  }

  function restar() {
    if (cantProd > 0) {
      setCantProd(cantProd - 1);
    }
  }

  function agregarAlCarrito () {
    if (stock) {
        onAdd(cantProd)
    }
  }

  
*/
