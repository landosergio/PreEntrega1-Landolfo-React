import { Link } from "react-router-dom";

function Item({ item, inCart }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div
        className={`flex flex-col items-center ${
          !inCart ? "h-96 w-60" : "h-60 w-40"
        } rounded-lg shadow-lg`}
      >
        <img
          src={item.rutaImg}
          alt={`Imagen de ${item.nombre}`}
          className="aspect-square w-fit p-4"
        />
        <p
          className={`flex-grow flex justify-center items-center px-2 text-center ${
            !inCart ? "text-lg" : "text-sm"
          } font-bold`}
        >
          {item.nombre}
        </p>
        {item.stock == 0 && !inCart && (
          <p className="text-red-500 font-bold py-5 ">Sin stock</p>
        )}
      </div>
    </Link>
  );
}

export default Item;
