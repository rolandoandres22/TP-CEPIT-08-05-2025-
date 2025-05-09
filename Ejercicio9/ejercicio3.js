"use strict";
// 3-Implementar la clase Televisor con todos los atributos y métodos, como se vio en clase, incluido
// la funcionalidad mute.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisor = void 0;
var Televisor = /** @class */ (function () {
    function Televisor(brand, channel, volume, isOn, isMuted) {
        this.channel = 1; //la puse publica para acceder y cambiar el canal segun plan sino tenia que hacer getter y setter y no se vio aun
        this.volume = 0;
        this.isOn = false; //prendido o apagado
        this.isMuted = false; // Si el volumen llega a 0 y damos al boton de bajar volumen, el televisor se pone en mute
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
        this.isOn = isOn;
        this.isMuted = isMuted;
    }
    // METODOS (funciones dentro de una clase = class)
    Televisor.prototype.switchPower = function () {
        this.isOn = !this.isOn;
        this.isOn ? console.log("Hello ".concat(this.brand)) : console.log("Good bye ".concat(this.brand));
    };
    Televisor.prototype.muteOnOff = function () {
        this.isMuted = !this.isMuted;
        this.volume = 0;
    };
    Televisor.prototype.getTime = function () {
        var fullDate = new Date();
        return "".concat(fullDate.getHours(), ":").concat(fullDate.getMinutes());
    };
    // Patron llamado "early return"
    Televisor.prototype.status = function () {
        if (this.isOn === false) {
            return console.log("El TV se encuentra apagado, enciendalo y disfrute!!\n");
        }
        else {
            console.log("\n                ------------------\n                - Channel: ".concat(this.channel, "\n                - Volume: ").concat(this.volume, "\n                - Hour: ").concat(this.getTime(), " \n                - Mute: ").concat(this.isMuted, "\n                ------------------\n                "));
        }
    };
    Televisor.prototype.channelUp = function () {
        if (this.channel === 99) { // Si el canal esta en el 99 y sube un canal mas, pasa al canal 1 (99 es el canal maximo)
            this.channel = 1; // Canal 1 porque estaba en 99, subio uno mas y pego la vuelta (1 es el canal minimo)
        }
        else {
            this.channel += 1;
        }
    };
    Televisor.prototype.channelDown = function () {
        if (this.channel === 1) {
            this.channel = 99;
        }
        else {
            this.channel -= 1;
        }
    };
    Televisor.prototype.selectChannel = function (channelNumber) {
        if (channelNumber > 0 && channelNumber <= 99) {
            this.channel = channelNumber;
        }
    };
    Televisor.prototype.volumeUp = function () {
        if (this.volume < 100) {
            if (this.isMuted === true) {
                this.isMuted = false;
            }
            this.volume += 1;
        }
        else {
            console.log("No se puede subir mas el volumen");
        }
    };
    Televisor.prototype.volumeDown = function () {
        if (this.volume > 0) {
            this.volume -= 1;
        }
        else {
            this.isMuted = true;
        }
    };
    return Televisor;
}());
exports.Televisor = Televisor;
