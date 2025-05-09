/*
Implementar  una clase que simule el comportamiento de una Calculadora,
con dos números y las cuatro operaciones básicas: suma resta, multiplicación
y división. Todas la operaciones deben retornar un resultado, que luego va a
ser mostrado por un método aparte. A su vez en las operaciones de multiplicación y
división se debe validar que no se ingrese un valor igual a 0. Probar la calculadora
con diferentes valores
*/
var Calculadora = /** @class */ (function () {
    function Calculadora(numeroUno, numeroDos) {
        this.numeroUno = numeroUno;
        this.numeroDos = numeroDos;
    }
    Calculadora.prototype.suma = function () {
        return (this.numeroUno + this.numeroDos);
    };
    Calculadora.prototype.resta = function () {
        return (this.numeroUno - this.numeroDos);
    };
    Calculadora.prototype.multiplicacion = function () {
        return (this.numeroUno * this.numeroDos);
    };
    Calculadora.prototype.division = function () {
        return (this.numeroUno / this.numeroDos);
    };
    Calculadora.prototype.mostrarResultado = function (operacion) {
        var resultado;
        switch (operacion.toLowerCase()) {
            case 'suma':
                resultado = this.suma();
                break;
            case 'resta':
                resultado = this.resta();
                break;
            case 'multiplicacion':
                if (this.numeroUno === 0 || this.numeroDos === 0) {
                    resultado = console.log("El numero ingresado no puede ser 0");
                }
                else {
                    resultado = this.multiplicacion();
                }
                break;
            case 'division':
                if (this.numeroDos === 0) {
                    resultado = console.log("El numero ingresado no puede ser 0");
                }
                else {
                    resultado = this.division();
                }
                break;
            default:
                resultado = "Operación no válida";
        }
        console.log("Resultado de ".concat(operacion, ": ").concat(resultado));
    };
    return Calculadora;
}());
var calculadora1 = new Calculadora(10, 5);
console.log("calculadora1 con los numeros 10 y 5");
calculadora1.mostrarResultado('suma');
calculadora1.mostrarResultado('resta');
calculadora1.mostrarResultado('multiplicacion');
calculadora1.mostrarResultado('division');
var calculadora2 = new Calculadora(8, 0);
console.log("\ncalculadora2 con los numeros 8 y 0");
calculadora2.mostrarResultado('suma');
calculadora2.mostrarResultado('resta');
calculadora2.mostrarResultado('multiplicacion');
calculadora2.mostrarResultado('division');
