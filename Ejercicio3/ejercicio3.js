var Televisor = /** @class */ (function () {
    function Televisor(brand, channel, volume, isOn, isMuted) {
        this.channel = 1;
        this.volume = 0;
        this.isOn = false;
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
// La palabra "new" es la palabra clave para crear una nueva instancia de una clase, para crear un objeto de una clase. Se llama a la clase y despues se le da la marca
var Televisor1 = new Televisor("Samsung", 1, 10, false, false);
console.log("1 - Iniciamos la secuencia con el TV apagado\n");
Televisor1.status();
console.log("2 - Encendemos el TV y mostramos el estado.");
Televisor1.switchPower();
Televisor1.status();
console.log("3 - cambiamos de canal a 2 y mostramos el estado para verificar el cambio");
Televisor1.channelUp();
Televisor1.status();
console.log("4 - Subimos el volumen a 11 y mostramos el estado para verificar el cambio");
Televisor1.volumeUp();
Televisor1.status();
console.log("5 - Bajamos el volumen a 10 y mostramos el estado para verificar los cambios");
Televisor1.volumeDown();
Televisor1.status();
console.log("6 - Muteamos el TV por ultimo y mostramos el estado (volumen deberia estar en 0)");
Televisor1.muteOnOff();
Televisor1.status();
