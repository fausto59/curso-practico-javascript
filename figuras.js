//Código del cuadrado
console.group("Cuadrados");
const lado_cuadrado = 2;
console.log("Los lados del cuadrado miden: " + lado_cuadrado + "cm");

const perimetro_cuadrado = lado_cuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetro_cuadrado + "cm");

const area_cuadrado = lado_cuadrado * lado_cuadrado;
console.log("El area del cuadrado es: " + area_cuadrado + "cm^2");
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
const lado_triangulo1 = 6;
const lado_triangulo2 = 6;
const base_triangulo = 4;
const altura_triangulo = 5.5;
console.log(
  "Los lados del triángulo miden: " +
    lado_triangulo1 +
    "cm " +
    lado_triangulo2 +
    "cm " +
    base_triangulo +
    "cm"
);
console.log("La altura del triangulo es: " + altura_triangulo + "cm");
const perimetro_triangulo = lado_triangulo1 + lado_triangulo2 + base_triangulo;
console.log("El perimetro del triangulo es: " + perimetro_triangulo + "cm");
const area_triangulo = (base_triangulo * altura_triangulo) / 2;
console.log("El area del triangulo es: " + area_triangulo + "cm^2");

console.groupEnd();

//Código del circulo
console.group("Circulos");

// Radio
const radio_circulo = 4;
console.log("El radio del circulo es: " + radio_circulo + "cm");

// Diámetro
const diametro_circulo = radio_circulo * 2;
console.log("El diametro del circulo es: " + diametro_circulo + "cm");

// PI
const PI = Math.PI;
console.log(PI);

// Circunferencia
const perimetro_circulo = diametro_circulo * PI;
console.log("El Perimetro del circulo es: " + perimetro_triangulo + "cm");

// Área
const area_circulo = radio_circulo * radio_circulo * PI;
console.log("El área del circulo es: " + area_circulo + "cm^2");

console.groupEnd();
