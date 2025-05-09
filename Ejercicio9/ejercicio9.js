"use strict";
//9- Implementar una clase Decodificador y relacionarla con la clase Televisor del ejercicio 2.
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio3_1 = require("./ejercicio3");
var Decodificador = /** @class */ (function () {
    function Decodificador(televisor, marcaDecodificador, planDecodificador) {
        this.televisor = televisor;
        this.marcaDecodificador = marcaDecodificador;
        this.planDecodificador = planDecodificador;
    }
    Decodificador.prototype.VolumeUpDeco = function () {
        this.televisor.volumeUp();
        console.log("Se subi\u00F3 el volumen del dedificador");
    };
    Decodificador.prototype.VolDownDeco = function () {
        this.televisor.volumeDown();
        console.log("Se baj\u00F3 el volumen del decodificador");
    };
    Decodificador.prototype.channelUpDeco = function () {
        //se crea un switch para diferenciar la cantidad de canales de cada plan
        switch (this.planDecodificador.toLowerCase()) {
            case "basico":
                if (this.televisor.channel === 100) {
                    this.televisor.channel = 1; // Vuelve al canal 1 si supera el límite
                }
                else {
                    this.televisor.channelUp(); // Sube normalmente
                }
                console.log("Se subi\u00F3 el canal del decodificador de ".concat(this.marcaDecodificador, " (Plan: ").concat(this.planDecodificador, ")"));
                break;
            case "medio":
                if (this.televisor.channel === 500) {
                    this.televisor.channel = 1;
                }
                else {
                    this.televisor.channelUp();
                }
                console.log("Se subi\u00F3 el canal del decodificador de ".concat(this.marcaDecodificador, " (Plan: ").concat(this.planDecodificador, ")"));
                break;
            case "full":
                if (this.televisor.channel === 999) {
                    this.televisor.channel = 1;
                }
                else {
                    this.televisor.channelUp();
                }
                console.log("Se subi\u00F3 el canal del decodificador de ".concat(this.marcaDecodificador, " (Plan: ").concat(this.planDecodificador, ")"));
                break;
            default:
                if (this.televisor.channel === 100) {
                    this.televisor.channel = 1;
                }
                else {
                    this.televisor.channelUp();
                }
                console.log("Se subi\u00F3 el canal del decodificador de ".concat(this.marcaDecodificador, " (Plan: ").concat(this.planDecodificador, ")"));
                break;
        }
    };
    Decodificador.prototype.channelDownDeco = function () {
        //se crea un switch para diferenciar la cantidad de canales de cada plan   
        switch (this.planDecodificador.toLowerCase()) {
            case "basico":
                if (this.televisor.channel === 1) {
                    this.televisor.channel = 100; // Vuelve al canal 100 si baja el límite de1
                }
                else {
                    this.televisor.channelDown(); // Baja normalmente
                }
                console.log("Se baj\u00F3 el canal del decodificador de ".concat(this.marcaDecodificador, " (Plan: ").concat(this.planDecodificador, ")"));
                break;
            case "medio":
                if (this.televisor.channel === 1) {
                    this.televisor.channel = 500;
                }
                else {
                    this.televisor.channelDown();
                }
                console.log("Se baj\u00F3 el canal del decodificador de ".concat(this.marcaDecodificador, " (Plan: ").concat(this.planDecodificador, ")"));
                break;
            case "full":
                if (this.televisor.channel === 1) {
                    this.televisor.channel = 999;
                }
                else {
                    this.televisor.channelDown();
                }
                console.log("Se baj\u00F3 el canal del decodificador de ".concat(this.marcaDecodificador, " (Plan: ").concat(this.planDecodificador, ")"));
                break;
            default:
                if (this.televisor.channel === 1) {
                    this.televisor.channel = 100;
                }
                else {
                    this.televisor.channelDown();
                }
                console.log("Se baj\u00F3 el canal del decodificador de ".concat(this.marcaDecodificador, " (Plan: ").concat(this.planDecodificador, ")"));
                break;
        }
    };
    return Decodificador;
}());
var televisor2 = new ejercicio3_1.Televisor("Samsung", 1, 10, false, false);
var decodificador1 = new Decodificador(televisor2, "DirecTV", "medio");
console.log("1 - se muestra el tv apagado");
televisor2.status();
console.log("2 - se enciende el TV - se muestra el estado");
televisor2.switchPower();
televisor2.status();
console.log("3 - Se sube el volumen del decodificador");
decodificador1.VolumeUpDeco();
televisor2.status();
console.log("4 - se subio un canal del decodificador - se muestra el estado");
decodificador1.channelUpDeco();
televisor2.status();
console.log("5 - se bajan 2 canales del decodificador para ver si se resetea va al maximo del plan");
decodificador1.channelDownDeco();
decodificador1.channelDownDeco();
televisor2.status();
