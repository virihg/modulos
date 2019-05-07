const Figura = require ("./modulos-figuras.js");
const circulo = new Figura("circulo", null, null, null, null, 6);
circulo.area_circulo();

const cuadrado = new Figura("cuadrado", 4, 5, 5, 5, null);
cuadrado.perimetro_rectangulo_cuadrado();

const triangulo = new Figura("triangulo", 3, 9, 9, 9, null);
triangulo.perimetro_triangulo();
