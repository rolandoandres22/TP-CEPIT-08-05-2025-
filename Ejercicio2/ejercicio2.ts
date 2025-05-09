//2-Plantear una clase Persona, pensar que atributos y métodos 
//puede tener e implementarla en Typescript

class Persona{
    private nombre: string;
    private apellido: string;
    private direccion: string;
    private edad: number;
    private sexo: string;
    private nacionalidad: string;
    private fechaNac: Date;
    
    public constructor(nombre:string, apellido:string, direccion:string, edad:number, sexo:string, nacionalidad:string, fechaNac:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.edad = edad;
        this.sexo = sexo;
        this.nacionalidad = nacionalidad;
        this.fechaNac = fechaNac;
    }

public mostrarInfo(){
    console.log(`Metodo mostrarInfo, Utilizado para mostrar la informacion de una persona. Ejemplo:`);
        console.log(` ------------------------------------------------------------------------------------------
 -      Nombre: ${this.nombre} 
 -      Apellido: ${this.apellido} 
 -      Dirección: ${this.direccion}
 -      Edad: ${this.edad}
 -      Sexo: ${this.sexo}
 -      Nacionalidad: ${this.nacionalidad}
 -      Fecha de Nacimiento: ${this.fechaNac}
 -------------------------------------------------------------------------------------------`);
    }

public registrarPersona(){
    console.log(`Metodo registrarPersona, Ingresa un nuevo registro de persona al sistema`);
}
public listarPersona(){
    console.log(`Metodo listarPersona, Tira un listado de todas las personas cargadas en el sistema.`);
}
public buscarPersona(){
    console.log(`Metodo buscarPersona, Hace una consulta de una persona especifica en el sistema.`);
}
public modificarPersona(){
    console.log(`Metodo modificarPersona, Modifica los datos de una persona en el sistema.`);
}
public eliminarPersona(){
    console.log(`Metodo eliminarPersona, elimina el registro de una persona en el sistema.`);
}
}

const Persona1 = new Persona("Pepe", "Argento", "calle123", 50, "Macho cabrío", "Argentino", new Date(1975,5,6)); 
//Ejecutar con "npm run ejercicio2"
Persona1.mostrarInfo();
Persona1.registrarPersona();
Persona1.listarPersona();
Persona1.buscarPersona();
Persona1.modificarPersona();
Persona1.eliminarPersona();