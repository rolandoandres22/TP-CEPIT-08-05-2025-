"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumnos = void 0;
var Alumnos = /** @class */ (function () {
    function Alumnos(nombreAlumno, notaAlumno) {
        this.nombreAlumno = nombreAlumno;
        this.notaAlumno = notaAlumno;
    }
    Alumnos.prototype.estaAprobado = function () {
        return this.notaAlumno >= 7;
    };
    return Alumnos;
}());
exports.Alumnos = Alumnos;
