//crear un modulo que se llame figura: tipo de figura, dependiendo de eso numero de lados, area rectangulo, circulo
//en el index también los mando llamar. Metodo que te de area y perimetro.

//modulo persona, ese modulo va a recibir parametros para cada instancia de personas. Metodo que regrese nombre, apellido e imc y un saludo.


module.exports = class Figura{
  constructor(tipofig, num_lados, longitud_lado, base, altura, radio) {
    this.tipo = tipofig;
    this.lados = num_lados;
    this.longitud_lado = longitud_lado;
    this.base= base;
    this.altura= altura;
    this.radio = radio;
}
    area_circulo(radio){
      var PI = Math.PI;
      console.log( "el area de mi circulo es " + PI * this.radio *this.radio);
    };
    area_cuadrado_rectangulo(base, altura){
      var area = this.base * this.altura;
      console.log("El area de mi " + this.tipo + " es " + area);
    };
    area_triangulo(base,altura){
      var area = this.base * this.altura / 2;
      console.log("El area de mi triangulo es" + area);
    };
    perimetro_rectangulo_cuadrado(num_lados, longitud_lado){
      var perimetro = 2 * (this.base + this.altura);
      console.log("el perimetro del "+ this.tipo + " es " + perimetro);
    };
    perimetro_triangulo(longitud_lado){
      var perimetro = 3 * this.longitud_lado;
      console.log("El perimetro de mi triangulo es " + perimetro);
    };
}
