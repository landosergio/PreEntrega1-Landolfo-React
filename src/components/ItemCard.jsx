import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="flex flex-col h-96 w-60 rounded-lg shadow-lg ">
        <img
          src={item.rutaImg}
          alt={`Imagen de ${item.nombre}`}
          className="aspect-square w-fit p-4  "
        />
        <p className=" flex-grow flex justify-center items-center  font-bold">
          {item.nombre}
        </p>
      </div>
    </Link>
  );
}

export default ItemCard;
