"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
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
        this.activo = true;
    }
    Object.defineProperty(Libro.prototype, "getISBN", {
        // meto getter y setter ya me canse de poner las variables publicas
        get: function () {
            return this.ISBN;
        },
        // Setters
        set: function (valor) {
            this.ISBN = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "getTitulo", {
        get: function () {
            return this.titulo;
        },
        set: function (valor) {
            this.titulo = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "getAutor", {
        get: function () {
            return this.autor;
        },
        set: function (valor) {
            this.autor = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "getNumPagina", {
        get: function () {
            return this.numPagina;
        },
        set: function (valor) {
            this.numPagina = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "getActivo", {
        get: function () {
            return this.activo;
        },
        set: function (valor) {
            this.activo = valor;
        },
        enumerable: false,
        configurable: true
    });
    Libro.prototype.cargarLibro = function () {
        console.log("Ingreso de un nuevo libro en el sistema");
        this.ISBN = rls.question("\nIngrese el ISBN: ");
        this.titulo = rls.question("\nIngrese el tiutlo: ");
        this.autor = rls.question("\nIngrese el autor: ");
        this.numPagina = rls.questionInt("\nIngrese la cantidad de paginas(Debe ser numerico): ");
        this.activo = true; //se asigna sin que el usuario se entere cuando crea el libro
    };
    Libro.prototype.infoLibro = function () {
        console.log("\n-------------------------------------------------------------------------");
        console.log("Titulo del Libro: \"".concat(this.titulo, "\""));
        console.log("El n\u00FAmero de ISBN es: ".concat(this.ISBN));
        console.log("El nombre del autor es: ".concat(this.autor));
        console.log("La cantidad de p\u00E1ginas del libro es: ".concat(this.numPagina));
        console.log("Estado: ".concat(this.activo ? "Activo" : "Inactivo"));
        console.log("-------------------------------------------------------------------------\n");
    };
    return Libro;
}());
exports.Libro = Libro;
