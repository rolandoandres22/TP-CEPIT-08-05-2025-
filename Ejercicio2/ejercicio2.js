//2-Plantear una clase Persona, pensar que atributos y métodos 
//puede tener e implementarla en Typescript
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, edad, sexo, nacionalidad, fechaNac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.edad = edad;
        this.sexo = sexo;
        this.nacionalidad = nacionalidad;
        this.fechaNac = fechaNac;
    }
    Persona.prototype.mostrarInfo = function () {
        console.log("Metodo mostrarInfo, Utilizado para mostrar la informacion de una persona. Ejemplo:");
        console.log(" ------------------------------------------------------------------------------------------\n -      Nombre: ".concat(this.nombre, " \n -      Apellido: ").concat(this.apellido, " \n -      Direcci\u00F3n: ").concat(this.direccion, "\n -      Edad: ").concat(this.edad, "\n -      Sexo: ").concat(this.sexo, "\n -      Nacionalidad: ").concat(this.nacionalidad, "\n -      Fecha de Nacimiento: ").concat(this.fechaNac, "\n -------------------------------------------------------------------------------------------"));
    };
    Persona.prototype.registrarPersona = function () {
        console.log("Metodo registrarPersona, Ingresa un nuevo registro de persona al sistema");
    };
    Persona.prototype.listarPersona = function () {
        console.log("Metodo listarPersona, Tira un listado de todas las personas cargadas en el sistema.");
    };
    Persona.prototype.buscarPersona = function () {
        console.log("Metodo buscarPersona, Hace una consulta de una persona especifica en el sistema.");
    };
    Persona.prototype.modificarPersona = function () {
        console.log("Metodo modificarPersona, Modifica los datos de una persona en el sistema.");
    };
    Persona.prototype.eliminarPersona = function () {
        console.log("Metodo eliminarPersona, elimina el registro de una persona en el sistema.");
    };
    return Persona;
}());
var Persona1 = new Persona("Pepe", "Argento", "calle123", 50, "Macho alfa", "Argentino", new Date(1975, 5, 6));
Persona1.mostrarInfo();
Persona1.registrarPersona();
Persona1.listarPersona();
Persona1.buscarPersona();
Persona1.modificarPersona();
Persona1.eliminarPersona();
