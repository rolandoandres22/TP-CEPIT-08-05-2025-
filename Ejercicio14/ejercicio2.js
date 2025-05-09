"use strict";
//2-Plantear una clase Persona, pensar que atributos y métodos 
//puede tener e implementarla en Typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, edad, sexo, nacionalidad, fechaNac) {
        this.puntos = 0;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.edad = edad;
        this.sexo = sexo;
        this.nacionalidad = nacionalidad;
        this.fechaNac = fechaNac;
    }
    Persona.prototype.setNombre = function (n) {
        this.nombre = n;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setPuntos = function (p) {
        this.puntos = p;
    };
    Persona.prototype.getPuntos = function () {
        return this.puntos;
    };
    Persona.prototype.mostrarInfo = function () {
        console.log("Metodo mostrarInfo, Utilizado para mostrar la informacion de una persona. Ejemplo:");
        console.log(" ------------------------------------------------------------------------------------------\n -      Nombre: ".concat(this.nombre, " \n -      Apellido: ").concat(this.apellido, " \n -      Direcci\u00F3n: ").concat(this.direccion, "\n -      Edad: ").concat(this.edad, "\n -      Sexo: ").concat(this.sexo, "\n -      Nacionalidad: ").concat(this.nacionalidad, "\n -      Fecha de Nacimiento: ").concat(this.fechaNac, "\n -------------------------------------------------------------------------------------------"));
    };
    Persona.prototype.registrarPersona = function () {
        console.log("Metodo registrarPersona, Ingresa un nuevo registro de persona al sistema");
    };
    Persona.prototype.listarPersona = function () {
        console.log("Metodo listarPersona, Tira un listado de todas las personas cargadas en el sistema.");
    };
    Persona.prototype.buscarPersona = function () {
        console.log("Metodo buscarPersona, Hace una consulta de una persona especifica en el sistema.");
    };
    Persona.prototype.modificarPersona = function () {
        console.log("Metodo modificarPersona, Modifica los datos de una persona en el sistema.");
    };
    Persona.prototype.eliminarPersona = function () {
        console.log("Metodo eliminarPersona, elimina el registro de una persona en el sistema.");
    };
    return Persona;
}());
exports.Persona = Persona;
