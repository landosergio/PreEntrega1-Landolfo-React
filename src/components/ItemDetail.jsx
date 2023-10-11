import ItemCount from "./ItemCount";

function ItemDetail({ producto }) {
  return (
    <div className="grid grid-cols-3 my-10 mx-10 sm:mx-20 xl:mx-52 ">
      <img
        src={producto.rutaImg}
        alt={`Imagen de ${producto.nombre}`}
        className="col-span-2 p-10 "
      />
      <div className="col-span-1 flex flex-col items-center py-10 border rounded-lg">
        <span className="text-2xl">{producto.precioFormat}</span>
        <div className="my-10">
          <ItemCount initial={1} stock={7} onAdd={(productos) => null} />
        </div>
      </div>
      <p className="col-span-2 py-10 mx-20 text-justify border-t">
        {producto.descripcion}
      </p>
    </div>
  );
}

export default ItemDetail;
