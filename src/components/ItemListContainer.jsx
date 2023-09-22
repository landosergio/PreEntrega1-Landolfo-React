function ItemListContainer({ greeting }) {
  return (
    <div className="flex justify-center">
      <h2 className="inline-block my-8 text-3xl text-slate-700  font-bold ">
        {greeting}
      </h2>
    </div>
  );
}

export default ItemListContainer;
