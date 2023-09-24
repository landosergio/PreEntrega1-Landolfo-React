import ItemCount from "./ItemCount";

function ItemListContainer({ greeting }) {
  return (
    <div className="flex flex-col items-center ">
      <h2 className="inline-block my-8 text-3xl text-slate-700  font-bold ">
        {greeting}
      </h2>
      <ItemCount initial={0} stock={7} onAdd={(cantProd) => null} />
    </div>
  );
}

export default ItemListContainer;
