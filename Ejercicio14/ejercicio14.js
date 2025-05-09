"use strict";
// Usando la Clase persona del Ejercicio 2 y la clase Cubilete del ejercicio anterior, implementar
// un juego de Generala. Esta Generala solo va a considerar puntos por obtener la siguientes
// marcas:
// • Escalera : 20 puntos
// • Full: 30 puntos
// • Poker: 40 puntos
// • Generala: 50 puntos
// En cada juego, cada jugador tiene 3 tiros y gana el jugador que tenga más puntos. En caso de que
// los 3 tiros ningún jugador haya hecho una marca, se declara empate. Implementar un método de
// desempate a su elección.
// En caso de ser necesario, modificar la clase persona para agregarle más atributos.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio2_1 = require("./ejercicio2");
var ejercicio12_1 = require("./ejercicio12");
var JuegoGenerala = /** @class */ (function () {
    function JuegoGenerala(jugadores) {
        this.jugadores = jugadores;
        this.cubilete = new ejercicio12_1.Cubilete();
        // Forzamos la cantidad de dados a 5 (acceso directo al campo privado)
        this.cubilete.cantidadDado = 5;
    }
    JuegoGenerala.prototype.jugar = function () {
        for (var _i = 0, _a = this.jugadores; _i < _a.length; _i++) {
            var jugador = _a[_i];
            var puntos = this.jugarTurno(jugador);
            jugador.setPuntos(puntos);
            console.log("".concat(jugador.getNombre(), " obtuvo ").concat(puntos, " puntos"));
        }
        var maxPuntos = Math.max.apply(Math, this.jugadores.map(function (j) { return j.getPuntos(); }));
        var ganadores = this.jugadores.filter(function (j) { return j.getPuntos() === maxPuntos; });
        if (ganadores.length === 1) {
            console.log("Gan\u00F3 ".concat(ganadores[0].getNombre(), " con ").concat(maxPuntos, " puntos"));
        }
        else {
            console.log("Empate entre: ".concat(ganadores.map(function (j) { return j.getNombre(); }).join(', ')));
            this.desempate(ganadores);
        }
    };
    JuegoGenerala.prototype.jugarTurno = function (jugador) {
        var mejorPuntaje = 0;
        for (var i = 0; i < 3; i++) {
            var dados = this.cubilete.RecorrerDados();
            console.log("".concat(jugador.getNombre(), ", tiro ").concat(i + 1, ": ").concat(dados.join(', ')));
            var puntaje = this.evaluarDados(dados);
            if (puntaje > mejorPuntaje) {
                mejorPuntaje = puntaje;
            }
        }
        return mejorPuntaje;
    };
    JuegoGenerala.prototype.evaluarDados = function (dados) {
        // Ordenamos los dados para facilitar las comprobaciones
        var dadosOrdenados = this.ordenarArray(dados);
        // Contamos las ocurrencias de cada número
        var conteo = this.contarOcurrencias(dadosOrdenados);
        // Verificar Generala (5 iguales)
        if (this.tieneRepeticiones(conteo, 5))
            return 50;
        // Verificar Poker (4 iguales)
        if (this.tieneRepeticiones(conteo, 4))
            return 40;
        // Verificar Full (3 de un número y 2 de otro)
        var tieneTres = false;
        var tieneDos = false;
        for (var key in conteo) {
            if (conteo[key] === 3)
                tieneTres = true;
            if (conteo[key] === 2)
                tieneDos = true;
        }
        if (tieneTres && tieneDos)
            return 30;
        // Verificar Escalera
        if (this.esEscalera(dadosOrdenados))
            return 20;
        return 0;
    };
    JuegoGenerala.prototype.contarOcurrencias = function (array) {
        var resultado = {};
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var num = array_1[_i];
            resultado[num] = (resultado[num] || 0) + 1;
        }
        return resultado;
    };
    JuegoGenerala.prototype.tieneRepeticiones = function (conteo, cantidad) {
        for (var key in conteo) {
            if (conteo[key] === cantidad) {
                return true;
            }
        }
        return false;
    };
    JuegoGenerala.prototype.ordenarArray = function (array) {
        // Implementación básica de ordenación por inserción
        var nuevoArray = __spreadArray([], array, true);
        for (var i = 1; i < nuevoArray.length; i++) {
            var j = i;
            while (j > 0 && nuevoArray[j - 1] > nuevoArray[j]) {
                // Intercambiar elementos
                var temp = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j - 1];
                nuevoArray[j - 1] = temp;
                j--;
            }
        }
        return nuevoArray;
    };
    JuegoGenerala.prototype.esEscalera = function (dados) {
        // Primero eliminamos duplicados manualmente
        var unicos = this.eliminarDuplicados(dados);
        // Si no tenemos exactamente 5 números únicos, no puede ser escalera
        if (unicos.length !== 5)
            return false;
        // Comprobamos las dos posibles escaleras
        var escalera1 = this.ordenarArray([1, 2, 3, 4, 5]);
        var escalera2 = this.ordenarArray([2, 3, 4, 5, 6]);
        return this.arraysIguales(unicos, escalera1) || this.arraysIguales(unicos, escalera2);
    };
    JuegoGenerala.prototype.eliminarDuplicados = function (array) {
        var resultado = [];
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var num = array_2[_i];
            if (!this.contieneNumero(resultado, num)) {
                resultado.push(num);
            }
        }
        return resultado;
    };
    JuegoGenerala.prototype.contieneNumero = function (array, num) {
        for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
            var n = array_3[_i];
            if (n === num)
                return true;
        }
        return false;
    };
    JuegoGenerala.prototype.arraysIguales = function (a, b) {
        if (a.length !== b.length)
            return false;
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    };
    JuegoGenerala.prototype.desempate = function (jugadores) {
        console.log("Se procede al desempate con un solo tiro por jugador");
        var max = 0;
        var ganador = null;
        for (var _i = 0, jugadores_1 = jugadores; _i < jugadores_1.length; _i++) {
            var j = jugadores_1[_i];
            var dados = this.cubilete.RecorrerDados();
            var suma = this.sumarArray(dados);
            console.log("".concat(j.getNombre(), " sac\u00F3 ").concat(dados.join(', '), " -> suma: ").concat(suma));
            if (suma > max) {
                max = suma;
                ganador = j;
            }
        }
        if (ganador) {
            console.log("Desempate ganado por ".concat(ganador.getNombre(), " con suma ").concat(max));
        }
        else {
            console.log("Empate total, no hay ganador.");
        }
    };
    JuegoGenerala.prototype.sumarArray = function (array) {
        var suma = 0;
        for (var _i = 0, array_4 = array; _i < array_4.length; _i++) {
            var num = array_4[_i];
            suma += num;
        }
        return suma;
    };
    return JuegoGenerala;
}());
// Ejemplo de uso
console.log("=== INICIO DEL JUEGO DE GENERALA ===\n");
var jugador1 = new ejercicio2_1.Persona("Pepe", "Argento", "calle123", 50, "M", "Argentino", new Date(1975, 5, 6));
var jugador2 = new ejercicio2_1.Persona("Coki", "Argento", "calle123", 26, "M", "Argentino", new Date(2000, 1, 1));
var juego = new JuegoGenerala([jugador1, jugador2]);
juego.jugar();
console.log("\n=== FIN DEL JUEGO ===");
