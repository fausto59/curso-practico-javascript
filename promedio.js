function calcular_promedio(lista) {
  //   let suma_lista = 0;
  //   for (let i = 0; i < lista.length; i++) {
  //     suma_lista += lista[i];
  //   }
  let suma_lista = lista.reduce(function (valor_acumulado = 0, valor_actual) {
    return valor_acumulado + valor_actual;
  });
  const promedio = suma_lista / lista.length;
  return promedio;
}
