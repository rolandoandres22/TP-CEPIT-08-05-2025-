// 5-Implementar una clase llamada Libro que contenga los siguientes atributos: ISBN, Título, Autor,
// Número de páginas. La clase debe tener un método para cargar un libro pidiendo los datos al
// usuario y luego informar mediante otro método el número de ISBN, el título, el autor del
// libro y el número de páginas. Crear dos o tres instancias de la Clase e implementar ambos
// métodos.
import * as rls from "readline-sync"

export class Libro {
    public ISBN : string;
    private titulo : string;
    private autor : string;
    private numPagina : number;
    private activo : boolean;//se agrego la variable activo para la baja logica
    
    public constructor (){
        this.ISBN = "";
        this.titulo = "";
        this.autor = "";
        this.numPagina = 0;
        this.activo= true;
    }
// meto getter y setter ya me canse de poner las variables publicas
get getISBN() {
    return this.ISBN;
}

get getTitulo() {
    return this.titulo;
}

get getAutor() {
    return this.autor;
}

get getNumPagina() {
    return this.numPagina;
}

get getActivo() {
    return this.activo;
}

// Setters
set getISBN(valor) {
    this.ISBN = valor;
}

set getTitulo(valor) {
    this.titulo = valor;
}

set getAutor(valor) {
    this.autor = valor;
}

set getNumPagina(valor) {
    this.numPagina = valor;
}

set getActivo(valor) {
    this.activo = valor;
}
    cargarLibro() :void {
        console.log("Ingreso de un nuevo libro en el sistema");
        this.ISBN = rls.question ("\nIngrese el ISBN: ");
        this.titulo = rls.question ("\nIngrese el tiutlo: ");
        this.autor = rls.question ("\nIngrese el autor: ");
        this.numPagina = rls.questionInt ("\nIngrese la cantidad de paginas(Debe ser numerico): ");
        this.activo = true;//se asigna sin que el usuario se entere cuando crea el libro
    }
    infoLibro() : void {
        console.log(`\n-------------------------------------------------------------------------`);
        console.log(`Titulo del Libro: "${this.titulo}"`);
        console.log(`El número de ISBN es: ${this.ISBN}`);
        console.log(`El nombre del autor es: ${this.autor}`);
        console.log(`La cantidad de páginas del libro es: ${this.numPagina}`);
        console.log(`Estado: ${this.activo ? "Activo" : "Inactivo"}`);
        console.log(`-------------------------------------------------------------------------\n`);
    }
}
