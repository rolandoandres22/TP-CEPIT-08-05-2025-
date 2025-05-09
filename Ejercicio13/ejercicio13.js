"use strict";
// Usando la clase libro del ejercicio 5, simular el funcionamiento de un sistema para gestionar
//  una colección de libros, permitiendo realizar las operaciones básicas: alta, baja, modificación y consulta.
// La clase Gestor de Libros debe permitir realizar las siguientes acciones:
// • Insertar un libro: agregar un nuevo libro a la colección.
// • Consultar un libro: buscar un libro y mostrar sus datos.
// • Modificar un libro: cambiar los datos de un libro ya existente (por ejemplo: autor, año, etc.).
// • Eliminar un libro: realizar una baja lógica, es decir, el libro no se borra definitivamente, sino que se marca como inactivo o dado de baja.
//     Consideraciones importantes:
// • Antes de realizar cualquier operación (incluso insertar), se debe verificar si el libro ya existe en la colección.
// • El estado de cada libro (activo o dado de baja) debe formar parte de la clase Libro,
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorLibros = void 0;
var ejercicio5_1 = require("./ejercicio5");
var rls = require("readline-sync");
var GestorLibros = /** @class */ (function () {
    function GestorLibros() {
        this.libros = [];
    }
    GestorLibros.prototype.buscarLibro = function (isbn) {
        for (var i = 0; i < this.libros.length; i++) {
            if (this.libros[i].ISBN === isbn && this.libros[i].getActivo === true) {
                return this.libros[i];
            }
        }
        return null;
    };
    GestorLibros.prototype.insertarLibro = function () {
        var nuevoLibro = new ejercicio5_1.Libro();
        nuevoLibro.cargarLibro();
        if (this.buscarLibro(nuevoLibro.ISBN)) {
            console.log("\nEl libro ya existe en la colección.");
        }
        else {
            this.libros.push(nuevoLibro);
            console.log("\nEl libro ha sido agregado a la colección.");
        }
    };
    GestorLibros.prototype.consultarLibro = function () {
        var isbn = rls.question("\nIngrese el ISBN del libro a consultar: ");
        var libro = this.buscarLibro(isbn);
        if (libro) {
            libro.infoLibro(); // Asumiendo que esta función existe en Libro
        }
        else {
            console.log("\nEl libro no se encuentra en la colección.");
        }
    };
    GestorLibros.prototype.modificarLibro = function () {
        var isbn = rls.question("\nIngrese el ISBN del libro a modificar: ");
        var libro = this.buscarLibro(isbn);
        if (libro && libro.getActivo) {
            libro.getTitulo = rls.question("Nuevo titulo: ");
            libro.getAutor = rls.question("Nuevo autor: ");
            libro.getNumPagina = parseInt(rls.question("Nuevo numero de paginas: "));
            console.log("Libro modificado.");
        }
        else {
            console.log("Libro no encontrado o esta inactivo.");
        }
    };
    GestorLibros.prototype.eliminarLibro = function () {
        var isbn = rls.question("\nIngrese el ISBN del libro a eliminar: ");
        var libroEncontrado = this.buscarLibro(isbn);
        if (libroEncontrado && libroEncontrado.getActivo) {
            libroEncontrado.getActivo = false;
            console.log("Libro dado de baja (logica).");
        }
        else {
            console.log("Libro no encontrado o ya está inactivo.");
        }
    };
    GestorLibros.prototype.listarLibros = function () {
        for (var i = 0; i < this.libros.length; i++) {
            if (this.libros[i].getActivo) {
                this.libros[i].infoLibro();
            }
        }
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
//Ejecutar con "npm run ejercicio13"
var gestor = new GestorLibros();
console.log("1 - Ingresamos 3 libros al sistema");
gestor.insertarLibro();
gestor.insertarLibro();
gestor.insertarLibro();
console.clear();
gestor.listarLibros();
console.log("2 - Consultamos un libro especifico en el sistema");
gestor.consultarLibro();
console.log("3 - Modificamos un libro especifico del sistema");
gestor.modificarLibro();
console.log("4 - Eliminamos un libro del sistema - mostramos listado de libros activos");
gestor.eliminarLibro();
gestor.listarLibros();
