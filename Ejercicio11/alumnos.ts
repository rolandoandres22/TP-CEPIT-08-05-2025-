export class Alumnos {
    public nombreAlumno: string;
    public notaAlumno: number;
    

    constructor(nombreAlumno: string, notaAlumno: number) {
        this.nombreAlumno = nombreAlumno;
        this.notaAlumno = notaAlumno;
    }

    estaAprobado(): boolean {
        return this.notaAlumno >= 7;
    }
}
