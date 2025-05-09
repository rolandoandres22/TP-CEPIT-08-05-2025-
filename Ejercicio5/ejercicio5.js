"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 5-Implementar una clase llamada Libro que contenga los siguientes atributos: ISBN, Título, Autor,
// Número de páginas. La clase debe tener un método para cargar un libro pidiendo los datos al
// usuario y luego informar mediante otro método el número de ISBN, el título, el autor del
// libro y el número de páginas. Crear dos o tres instancias de la Clase e implementar ambos
// métodos.
var rls = require("readline-sync");
var Libro = /** @class */ (function () {
    function Libro() {
        this.ISBN = "";
        this.titulo = "";
        this.autor = "";
        this.numPagina = 0;
    }
    Libro.prototype.cargarLibro = function () {
        console.log("Ingreso de un nuevo libro en el sistema");
        this.ISBN = rls.question("\nIngrese el ISBN: ");
        this.titulo = rls.question("\nIngrese el tiutlo: ");
        this.autor = rls.question("\nIngrese el autor: ");
        this.numPagina = rls.questionInt("\nIngrese la cantidad de paginas(Debe ser numerico): ");
    };
    Libro.prototype.infoLibro = function () {
        console.log("\n-------------------------------------------------------------------------");
        console.log("Titulo del Libro: \"".concat(this.titulo, "\""));
        console.log("El n\u00FAmero de ISBN es: ".concat(this.ISBN));
        console.log("El nombre del autor es: ".concat(this.autor));
        console.log("La cantidad de p\u00E1ginas del libro es: ".concat(this.numPagina));
        console.log("-------------------------------------------------------------------------\n");
    };
    return Libro;
}());
var libro1 = new Libro();
var libro2 = new Libro();
var libro3 = new Libro();
libro1.cargarLibro();
libro2.cargarLibro();
libro3.cargarLibro();
console.clear();
libro1.infoLibro();
libro2.infoLibro();
libro3.infoLibro();
