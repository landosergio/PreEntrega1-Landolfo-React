export function calcTotal(lista) {
  return lista.reduce((acum, prod) => acum + prod.precio * prod.cant, 0);
}

export function calcCant(lista) {
  return lista.reduce((acum, prod) => acum + prod.cant, 0);
}
