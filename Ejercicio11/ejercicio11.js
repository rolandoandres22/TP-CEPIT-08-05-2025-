"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
• Los profesores deben tener un listado de sus listaAlumnos.
• Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7).
• La escuela debe tener un registro de los listaAlumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos
*/
var alumnos_1 = require("./alumnos");
var profesores_1 = require("./profesores");
var Escuela = /** @class */ (function () {
    function Escuela() {
        this.listaAlumnos = [];
        this.listaProfesores = [];
    }
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.listaAlumnos.push(alumno);
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        var index = this.listaAlumnos.indexOf(alumno);
        if (index !== -1) {
            this.listaAlumnos.splice(index, 1);
        }
    };
    Escuela.prototype.contratarProfesor = function (profesor) {
        this.listaProfesores.push(profesor);
    };
    Escuela.prototype.despedirProfesor = function (profesor) {
        var index = this.listaProfesores.indexOf(profesor);
        if (index !== -1) {
            this.listaProfesores.splice(index, 1);
        }
    };
    Escuela.prototype.mostrarEstado = function () {
        // Validar si hay alumnos matriculados
        if (this.listaAlumnos.length === 0) {
            console.log("No hay alumnos matriculados.\n");
        }
        else {
            console.log("Alumnos matriculados:");
            this.listaAlumnos.forEach(function (alumno) {
                var estado = alumno.estaAprobado() ? "Aprobado" : "Desaprobado";
                console.log("".concat(alumno.nombreAlumno, ": ").concat(estado));
            });
        }
        // Validar si hay profesores contratados
        if (this.listaProfesores.length === 0) {
            console.log("No hay profesores contratados.\n");
        }
        else {
            console.log("\nProfesores contratados:");
            this.listaProfesores.forEach(function (profesor) {
                console.log(profesor.nombre);
            });
        }
    };
    return Escuela;
}());
//Ejecutar con "npm run ehercicio11"
var alumno1 = new alumnos_1.Alumnos("Juan Roman Riquelme", 3);
var alumno2 = new alumnos_1.Alumnos("Leonel Messi", 10);
var alumno3 = new alumnos_1.Alumnos("Carlos Ramon Fernandez", 7);
var profesor1 = new profesores_1.Profesores("Dr. Jorge Anibal Sardon(experto en casi todo)");
var profesor2 = new profesores_1.Profesores("Dr. Strange");
var escuela = new Escuela();
console.log("1 - Se muestra el estado inicial de la escuela");
escuela.mostrarEstado();
console.log("2 - Se matriculan 3 alumnos - se muestra el estado");
escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.matricularAlumno(alumno3);
escuela.mostrarEstado();
console.log("3 - Se contratan 2 profesores - se muestra el estado");
escuela.contratarProfesor(profesor1);
escuela.contratarProfesor(profesor2);
escuela.mostrarEstado();
console.log("\n4 - Se asignan alumnos a los profesores");
profesor1.agregarAlumno(alumno1);
profesor1.agregarAlumno(alumno2);
profesor2.agregarAlumno(alumno3);
escuela.mostrarEstado();
console.log("5 - Se expulsa al alumno1 y se despide al profesor2 - se muestra el estado");
escuela.expulsarAlumno(alumno1);
escuela.despedirProfesor(profesor2);
escuela.mostrarEstado();
