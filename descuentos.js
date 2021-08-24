// const precio = 120;
// const descuento = 18;

function calcular_precio_con_descuento(precio, descuento) {
  const precio_con_descuento = 100 - descuento;
  const total = (precio * precio_con_descuento) / 100;

  return total;
}

// console.log({
//   precio,
//   descuento,
//   precio_con_descuento,
//   total,
// });
