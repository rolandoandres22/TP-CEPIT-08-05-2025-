"use strict";
// 1- Plantear una clase Auto de la forma en que se vió en la clase → especificando variables internas
// y métodos. Implementar en TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año, patente, velocidadActual) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.patente = patente;
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
        console.log("La patente del Auto es: ".concat(this.patente, "."));
        console.log("La velocidad actual del Auto es: ".concat(this.velocidadActual, "."));
        console.log("El Auto esta encendido?: ".concat(this.estaEncendido, ".\n"));
    };
    return Auto;
}());
exports.Auto = Auto;
