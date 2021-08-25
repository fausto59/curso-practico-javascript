// const lista1 = [200, 500, 800, 1200, 40000000];

function es_par(tamanio) {
  if (tamanio % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

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
function calcular_mediana(lista) {
  const lista_ordenada = lista.sort(function (a, b) {
    return a - b;
  });
  const mitad_lista = parseInt(lista_ordenada.length / 2);
  let mediana;
  if (es_par(lista_ordenada.length)) {
    mediana = calcular_promedio([
      lista_ordenada[mitad_lista - 1],
      lista_ordenada[mitad_lista],
    ]);
  } else {
    mediana = lista_ordenada[mitad_lista];
  }
  return mediana;
}
