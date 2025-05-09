"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesores = void 0;
var Profesores = /** @class */ (function () {
    function Profesores(nombre) {
        this.listaAlumnos = [];
        this.nombre = nombre;
    }
    Profesores.prototype.agregarAlumno = function (alumno) {
        this.listaAlumnos.push(alumno);
    };
    Profesores.prototype.expulsarAlumno = function (alumno) {
        var alumnoIndeseable = this.listaAlumnos.indexOf(alumno);
        if (alumnoIndeseable !== -1) {
            this.listaAlumnos.splice(alumnoIndeseable, 1);
        }
    };
    return Profesores;
}());
exports.Profesores = Profesores;
