"use strict";
/*
Usando la Clase automotor del ejercicio 1, implementar la clase Registro Automotor, con métodos para:
● Agregar un auto
● Buscar un auto por patente
● Eliminar o actualizar autos existentes
*/
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio1_1 = require("./ejercicio1");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.auto = [];
    }
    RegistroAutomotor.prototype.agregAutoaRegistro = function (auto) {
        this.auto.push(auto);
        console.log("El auto con la patente ".concat(auto.patente, " se agreg\u00F3 correctamente."));
    };
    RegistroAutomotor.prototype.buscarPatente = function (patente) {
        for (var i = 0; i < this.auto.length; i++) {
            if (this.auto[i].patente === patente) {
                var autoEncontrado = this.auto[i];
                console.log("La patente ".concat(autoEncontrado.patente, " fue encontrada con \u00E9xito."));
                autoEncontrado.mostrarEstadoActual();
                return autoEncontrado;
            }
        }
        console.log("No se encontr\u00F3 la patente ".concat(patente, "."));
        return undefined;
    };
    RegistroAutomotor.prototype.eliminarAutoDeRegistro = function (patente) {
        for (var i = 0; i < this.auto.length; i++) {
            if (this.auto[i].patente === patente) {
                this.auto.splice(i, 1);
                console.log("El auto con la patente ".concat(patente, " se elimin\u00F3."));
                return;
            }
        }
        console.log("La patente ".concat(patente, " no est\u00E1 en el registro.\n"));
    };
    RegistroAutomotor.prototype.actualizarAutoDeRegistro = function (patente, newPatente) {
        for (var i = 0; i < this.auto.length; i++) {
            if (this.auto[i].patente === patente) {
                this.auto[i].patente = newPatente;
                console.log("Se actualizaron los datos del auto con la patente ".concat(patente, ".\n"));
                return;
            }
        }
        console.log("No se pudo actualizar porque el n\u00FAmero de patente ".concat(patente, " no existe.\n"));
    };
    RegistroAutomotor.prototype.mostrarRegistro = function () {
        if (this.auto.length === 0) {
            console.log("El registro automotor no tiene autos registrados!\n");
        }
        else {
            console.log("Los autos guardados en el Registro Automotor son: \n");
            this.auto.forEach(function (auto) { return auto.mostrarEstadoActual(); });
        }
    };
    return RegistroAutomotor;
}());
//Ejecutar con "npm run ejercicio10"
var auto1 = new ejercicio1_1.Auto("Ford", "GT90", 2024, "AAA123", 0);
var auto2 = new ejercicio1_1.Auto("Ford", "Focus", 2016, "BBB456", 0);
var auto3 = new ejercicio1_1.Auto("Ford", "Falcon", 1967, "CCC789", 0);
var auto4 = new ejercicio1_1.Auto("Ford", "Mustang Shelby", 1967, "DDD101", 0);
var registro = new RegistroAutomotor();
console.log("1 - se muestra el registro automotor vacio");
registro.mostrarRegistro();
console.log("2 - Se agregan los 4 autos al registro");
registro.agregAutoaRegistro(auto1);
registro.agregAutoaRegistro(auto2);
registro.agregAutoaRegistro(auto3);
registro.agregAutoaRegistro(auto4);
console.log("\n3 - Se muestran los registros agregados");
registro.mostrarRegistro();
console.log("4 - Se busca la patente AAAAAA");
registro.buscarPatente("AAAAAA");
console.log("\n5 - Se eliminan dos patentes y luego se muestra el Registro");
registro.eliminarAutoDeRegistro("AAA123");
registro.eliminarAutoDeRegistro("BBB456");
registro.mostrarRegistro();
console.log("6 - Se actualiza la patente del auto4(DDD101) a EEE333");
registro.actualizarAutoDeRegistro("DDD101", "EEE333");
registro.mostrarRegistro();
