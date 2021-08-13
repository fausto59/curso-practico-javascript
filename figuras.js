//Código del cuadrado
// console.group("Cuadrados");
// const lado_cuadrado = 2;
// console.log("Los lados del cuadrado miden: " + lado_cuadrado + "cm");

function perimetro_cuadrado(lado) {
  return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetro_cuadrado + "cm");

function area_cuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + area_cuadrado + "cm^2");
// console.groupEnd();

//Código del triángulo
// console.group("Triángulos");
// const lado_triangulo1 = 6;
// const lado_triangulo2 = 6;
// const base_triangulo = 4;
// const altura_triangulo = 5.5;
// console.log(
//   "Los lados del triángulo miden: " +
//     lado_triangulo1 +
//     "cm " +
//     lado_triangulo2 +
//     "cm " +
//     base_triangulo +
//     "cm"
// );
// console.log("La altura del triangulo es: " + altura_triangulo + "cm");
function perimetro_triangulo(lado_1, lado_2, base) {
  return lado_1 + lado_2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetro_triangulo + "cm");
function area_triangulo(base, altura) {
  return (base_triangulo * altura_triangulo) / 2;
}

//Código del circulo
// console.group("Circulos");

// // Radio
// const radio_circulo = 4;
// console.log("El radio del circulo es: " + radio_circulo + "cm");

// Diámetro
function diametro_circulo(radio) {
  return radio_circulo * 2;
}
// cons.log("El diametro del circulo es: " + diametro_circulo + "cm");

// PI
const PI = Math.PI;
console.log(PI);

// Circunferencia
function perimetro_circulo(radio) {
  const diametro = diametro_circulo(radio);
  return diametro * PI;
}
// console.log("El Perimetro del circulo es: " + perimetro_triangulo + "cm");

// Área
function area_circulo(radio) {
  return radio * radio * PI;
}
// console.log("El área del circulo es: " + area_circulo + "cm^2");

// console.groupEnd();

function calcular_perimetro_cuadrado() {
  const input = document.getElementById("input_cuadrado");
  const value = input.value;

  const perimetro = perimetro_cuadrado(value);
  alert(perimetro);
}

function calcular_area_cuadrado() {
  const input = document.getElementById("input_cuadrado");
  const value = input.value;

  const area = area_cuadrado(value);
  alert(area);
}
