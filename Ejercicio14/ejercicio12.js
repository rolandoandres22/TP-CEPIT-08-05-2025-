"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cubilete = void 0;
/*
Usando la clase Dado del ejercicio 7, simular el comportamiento de un cubilete de 5 dados.
Implementar los métodos necesarios para que se puedan lanzar todos los dados o algún dado o dados en particular
*/
var Cubilete = /** @class */ (function () {
    function Cubilete() {
        this.cantidadDado = this.cantidadDado;
        this.dadosRecorridos = [0, 0, 0, 0, 0];
    }
    //get y set
    Cubilete.prototype.setValordado = function (v) {
        this.valorDado = v;
    };
    Cubilete.prototype.getValorDado = function () {
        return this.valorDado;
    };
    Cubilete.prototype.lanzarDado = function () {
        this.valorDado = Math.floor(Math.random() * 6) + 1; //aleatorio entre 1 y 6
    };
    Cubilete.prototype.CantidadDado = function () {
        this.cantidadDado = Math.floor(Math.random() * 5) + 1; //aleatorio entre 1 y 5
    };
    Cubilete.prototype.MostrarCantDados = function () {
        console.log("La Cantidad de dados es: ".concat(this.cantidadDado)); //muestra en consola la tirada del dado
    };
    Cubilete.prototype.RecorrerDados = function () {
        this.dadosRecorridos = [];
        if (this.cantidadDado <= 5 && this.cantidadDado > 0) {
            for (var i = 1; i <= this.cantidadDado; i++) {
                this.lanzarDado();
                this.dadosRecorridos.push(this.valorDado);
                console.log("El numero que salio en el dado ".concat(i, " es el:  ").concat(this.valorDado)); //muestra en consola la tirada del dado
            }
        }
        else {
            console.log("El numero no se admite. Es de 1 a 5.");
        }
        return this.dadosRecorridos;
    };
    return Cubilete;
}());
exports.Cubilete = Cubilete;
