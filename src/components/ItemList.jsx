import Item from "./Item";

function ItemList({ greeting, categoria, productos, inCart }) {
  return (
    <div className="flex flex-col items-center ">
      <h2 className="inline-block my-8 text-3xl text-slate-700  font-bold ">
        {greeting || categoria}
      </h2>
      <ul className="grid xl:grid-cols-4 md:grid-cols-2 gap-x-10 gap-y-20 my-20">
        {productos[0] &&
          productos.map((producto) => (
            <li key={producto.id}>
              <Item item={producto} inCart={inCart} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ItemList;
