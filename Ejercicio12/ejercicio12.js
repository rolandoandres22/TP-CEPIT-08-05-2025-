"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Usando la clase Dado del ejercicio 7, simular el comportamiento de un cubilete de 5 dados.
Implementar los métodos necesarios para que se puedan lanzar todos los dados o algún dado o dados en particular
*/
var rls = require("readline-sync");
var Cubilete = /** @class */ (function () {
    function Cubilete() {
        this.cantidadDado = this.cantidadDado;
        this.CantidadDadosRLS;
        this.MostrarCantDados = this.MostrarCantDados;
        this.RecorrerDados;
        this.lanzarDado;
    }
    Cubilete.prototype.lanzarDado = function () {
        this.valorDado = Math.floor(Math.random() * 6) + 1; //aleatorio entre 1 y 6
    };
    Cubilete.prototype.CantidadDado = function () {
        this.cantidadDado = Math.floor(Math.random() * 5) + 1; //aleatorio entre 1 y 5
    };
    Cubilete.prototype.CantidadDadosRLS = function () {
        console.log("-----------------------------------------");
        this.cantidadDado = rls.questionInt("\n Ingrese la cantidad de dados: ");
    };
    Cubilete.prototype.MostrarCantDados = function () {
        console.log("La Cantidad de dados es: ".concat(this.cantidadDado)); //muestra en consola la tirada del dado
    };
    Cubilete.prototype.RecorrerDados = function () {
        if (this.cantidadDado <= 5 && this.cantidadDado > 0) {
            for (var i = 1; i <= this.cantidadDado; i++) {
                this.lanzarDado();
                console.log("El numero que salio en el dado ".concat(i, " es el:  ").concat(this.valorDado)); //muestra en consola la tirada del dado
            }
        }
        else {
            console.log("El numero no se admite. Es de 1 a 5.");
        }
    };
    return Cubilete;
}());
//Ejecutar con "npm run ejercicio12"
var dado1 = new Cubilete(); //nueva instancia de la clase dado
//opcion aleatoria
dado1.CantidadDado();
dado1.MostrarCantDados();
dado1.RecorrerDados();
var dado2 = new Cubilete(); //nueva instancia de la clase dado
//opcion rls para ingresar la cant de dados x el usuario
dado1.CantidadDadosRLS();
dado1.MostrarCantDados();
dado1.RecorrerDados();
