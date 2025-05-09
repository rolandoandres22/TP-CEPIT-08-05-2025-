"use strict";
// 1- Plantear una clase Auto de la forma en que se vió en la clase → especificando variables internas
// y métodos. Implementar en TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año, cantPuertas, velocidadActual) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.cantPuertas = cantPuertas;
        this.velocidadActual = velocidadActual;
        this.estaEncendido = false;
    }
    // Encender el auto
    Auto.prototype.encender = function () {
        this.estaEncendido = true;
        console.log("El auto ha sido encendido");
    };
    // Apagar el auto
    Auto.prototype.apagar = function () {
        if (this.velocidadActual > 0) {
            console.log("No se puede apagar el auto en movimiento");
        }
        else {
            this.estaEncendido = false;
            console.log("El auto ha sido apagado");
        }
    };
    // Acelerar el auto
    Auto.prototype.acelerar = function (velocidad) {
        if (!this.estaEncendido) {
            console.log("El auto debe estar encendido para acelerar");
        }
        else {
            this.velocidadActual += velocidad;
            console.log("Acelerando... la velocidad aumento a ".concat(this.velocidadActual, " km/h"));
        }
    };
    // Frenar el auto
    Auto.prototype.frenar = function (velocidad) {
        if ((this.velocidadActual - velocidad) < 0) {
            this.velocidadActual = 0;
        }
        else {
            this.velocidadActual -= velocidad;
        }
        console.log("Frenando... la velocidad se redujo a ".concat(this.velocidadActual, " km/h"));
    };
    Auto.prototype.mostrarEstadoActual = function () {
        console.log("La Marca del Auto es: ".concat(this.marca, "."));
        console.log("El modelo del Auto es: ".concat(this.modelo, "."));
        console.log("El a\u00F1o de fabricacion del Auto es: ".concat(this.año, "."));
        console.log("La cantidad de puertas del Auto es: ".concat(this.cantPuertas, "."));
        console.log("La velocidad actual del Auto es: ".concat(this.velocidadActual, "."));
        console.log("El Auto esta encendido?: ".concat(this.estaEncendido, "."));
    };
    return Auto;
}());
exports.Auto = Auto;
//Ejecutar con "npm run ejercicio1"
var auto1 = new Auto("Ford", "Focus", 2016, 5, 0);
console.log("1 - Se muestra el estado inicial del auto");
auto1.mostrarEstadoActual();
console.log("\n2 - Encendemos el auto y mostramos el estadoactual.");
auto1.encender();
auto1.mostrarEstadoActual();
console.log("\n3 - Aceleramos el auto a 60km/k y mostramos el estado");
auto1.acelerar(60);
auto1.mostrarEstadoActual();
console.log("\n4 - Frenamos el auto a 20km/k restandole 40 y mostramos el estado");
auto1.frenar(40);
auto1.mostrarEstadoActual();
console.log("\n5 - Intentamos apagarlo en funcionamiento...");
auto1.apagar();
console.log("\n6 - Por ultimo frenamos el auto a 0 y lo apagamos - Muestra el estado actual");
auto1.frenar(20);
auto1.apagar();
auto1.mostrarEstadoActual();
