import { Alumnos } from "./alumnos";
export class Profesores {
    nombre: string;
    listaAlumnos: Alumnos[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarAlumno(alumno: Alumnos): void {
        this.listaAlumnos.push(alumno);
    }

    expulsarAlumno(alumno: Alumnos): void {
        const alumnoIndeseable = this.listaAlumnos.indexOf(alumno);
        if (alumnoIndeseable !== -1) {
            this.listaAlumnos.splice(alumnoIndeseable, 1);
        }
    }
}