/* 4-Crea una clase llamada Rectangulo que represente. Esta clase debe tener:
 • Un constructor que reciba dos parámetros: ancho y altura.
 • Métodos para calcular el área y el perímetro del rectángulo.
 • El método calcular_area() debe retornar el área del rectángulo (ancho * altura).
 • El método calcular_perimetro() debe retornar el perímetro del rectángulo (2 * (ancho +
altura)).
 Una vez definida la clase Rectangulo, crea una instancia de esta clase
 con un ancho de 5 unidades y una altura de 10 unidades. Luego,
 utiliza los métodos de la clase para calcular el área y el perímetro del
 rectángulo creado e imprime los resultados.*/
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }
    Rectangulo.prototype.calcular_area = function () {
        return (this.ancho * this.altura);
    };
    Rectangulo.prototype.calcular_perimetro = function () {
        return (2 * (this.ancho + this.altura));
    };
    Rectangulo.prototype.mostrarAreayPerimetro = function () {
        console.log("El area y perimetro de un rectangulo de ".concat(this.ancho, " de ancho y ").concat(this.altura, " de altura es:"));
        console.log("El area del rectangulo es: ".concat(Rectangulo1.calcular_area()));
        console.log("El perimetro del rectangulo es: ".concat(Rectangulo1.calcular_perimetro()));
    };
    return Rectangulo;
}());
var Rectangulo1 = new Rectangulo(5, 10);
Rectangulo1.mostrarAreayPerimetro();
