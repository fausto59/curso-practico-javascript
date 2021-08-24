// const precio = 120;
// const descuento = 18;

function precio_con_descuento(precio, descuento) {
  const precio_con_descuento = 100 - descuento;
  const total = (precio * precio_con_descuento) / 100;

  return total;
}

function calcular_precio_con_descuento() {
  const input_price = document.getElementById("input_price");
  const price_value = input_price.value;
  const input_discount = document.getElementById("input_discount");
  const discount_value = input_discount.value;

  const total_a_pagar = precio_con_descuento(price_value, discount_value);

  const resultado = document.getElementById("resultado");
  resultado.innerText =
    "El precio con descuento del producto es de: $" + total_a_pagar;
}

// console.log({
//   precio,
//   descuento,
//   precio_con_descuento,
//   total,
// });
