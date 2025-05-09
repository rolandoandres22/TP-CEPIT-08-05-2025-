// Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
// • Los profesores deben tener un listado de sus listaAlumnos.
// • Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7). 
// • La escuela debe tener un registro de los listaAlumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos

import { Alumnos } from "./alumnos";
import { Profesores } from "./profesores";

class Escuela {
    public listaAlumnos: Alumnos[] = [];
    public listaProfesores: Profesores[] = [];

    matricularAlumno(alumno: Alumnos): void {
        this.listaAlumnos.push(alumno);
    }

    expulsarAlumno(alumno: Alumnos): void {
        const index = this.listaAlumnos.indexOf(alumno);
        if (index !== -1) {
            this.listaAlumnos.splice(index, 1);
        }
    }

    contratarProfesor(profesor: Profesores): void {
        this.listaProfesores.push(profesor);
    }

    despedirProfesor(profesor: Profesores): void {
        const index = this.listaProfesores.indexOf(profesor);
        if (index !== -1) {
            this.listaProfesores.splice(index, 1);
        }
    }

    mostrarEstado(): void {
        // Validar si hay alumnos matriculados
        if (this.listaAlumnos.length === 0) {
            console.log("No hay alumnos matriculados.\n");
        } else {
            console.log("Alumnos matriculados:");
            this.listaAlumnos.forEach(alumno => {
                const estado = alumno.estaAprobado() ? "Aprobado" : "Desaprobado";
                console.log(`${alumno.nombreAlumno}: ${estado}`);
            });
        }
    
        // Validar si hay profesores contratados
        if (this.listaProfesores.length === 0) {
            console.log("No hay profesores contratados.\n");
        } else {
            console.log("\nProfesores contratados:");
            this.listaProfesores.forEach(profesor => {
                console.log(profesor.nombre);
            });
        }
    }
    
}

//Ejecutar con "npm run ehercicio11"

let alumno1 = new Alumnos("Juan Roman Riquelme", 3);
let alumno2 = new Alumnos("Leonel Messi", 10);
let alumno3 = new Alumnos("Carlos Ramon Fernandez", 7);

let profesor1 = new Profesores("Dr. Jorge Anibal Sardon(experto en casi todo)");
let profesor2 = new Profesores("Dr. Strange");

let escuela = new Escuela();

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
console.log("\n5 - Se expulsa al alumno1 y se despide al profesor2 - se muestra el estado");
escuela.expulsarAlumno(alumno1);
escuela.despedirProfesor(profesor2);
escuela.mostrarEstado();
