// 5-Implementar una clase llamada Libro que contenga los siguientes atributos: ISBN, Título, Autor,
// Número de páginas. La clase debe tener un método para cargar un libro pidiendo los datos al
// usuario y luego informar mediante otro método el número de ISBN, el título, el autor del
// libro y el número de páginas. Crear dos o tres instancias de la Clase e implementar ambos
// métodos.
import * as rls from "readline-sync"

class Libro {
    public ISBN : string;
    private titulo : string;
    private autor : string;
    private numPagina : number;
    
    public constructor (){
        this.ISBN = "";
        this.titulo = "";
        this.autor = "";
        this.numPagina = 0;
    }

    cargarLibro() :void {
        console.log("Ingreso de un nuevo libro en el sistema");
        this.ISBN = rls.question ("\nIngrese el ISBN: ");
        this.titulo = rls.question ("\nIngrese el tiutlo: ");
        this.autor = rls.question ("\nIngrese el autor: ");
        this.numPagina = rls.questionInt ("\nIngrese la cantidad de paginas(Debe ser numerico): ");
    }
    infoLibro() : void {
        console.log (`\n-------------------------------------------------------------------------`);
        console.log (`Titulo del Libro: "${this.titulo}"`);
        console.log (`El número de ISBN es: ${this.ISBN}`);
        console.log (`El nombre del autor es: ${this.autor}`);
        console.log (`La cantidad de páginas del libro es: ${this.numPagina}`);
        console.log (`-------------------------------------------------------------------------\n`);
    }
}
const libro1 = new Libro();
const libro2 = new Libro();
const libro3 = new Libro();
//Ejecutar con "npm run ejercicio5"
libro1.cargarLibro();
libro2.cargarLibro();
libro3.cargarLibro();
console.clear();
libro1.infoLibro();
libro2.infoLibro();
libro3.infoLibro();