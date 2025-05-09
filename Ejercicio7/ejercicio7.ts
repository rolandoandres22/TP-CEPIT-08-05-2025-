/*
Implementar una clase  que simule el comportamiento de un dado de seis caras. 
La clase debe tener un atributo que almacena el valor actual del dado (un número entre 1 y 6). 
A su vez la clase cuenta con varios métodos.
● Método constructor que inicializa el dado con un valor aleatorio entre 1 y 6.
● Método que simula el lanzamiento del dado, asignando un nuevo valor aleatorio entre 1 y 6 al 
atributo valor del dado
● Método que devuelve el valor actual del dado.
*/

export class Dado{
    private valorActual : number;

    constructor() {
        this.valorActual = Math.floor(Math.random() * 6) + 1;
    }

    lanzarDado() : void {//se crea el metodo lanzar dado
        this.valorActual = Math.floor(Math.random() * 6) + 1;
    }
    
    numActualDado() : void {
        console.log (`El numero que salio en el dado es ${this.valorActual}`)//muestra en consola la tirada del dado
    }
}

const dado1 = new Dado ();
//Ejecutar con "npm run ejercicio7"
console.log("Muestra el valor actual del dado generado en el constructor");
dado1.numActualDado();
console.log("Nuevo lanzamiento - se muestra el nuevo valor");
dado1.lanzarDado();
dado1.numActualDado();
console.log("Nuevo lanzamiento - se muestra el nuevo valor");
dado1.lanzarDado();
dado1.numActualDado();
console.log("Nuevo lanzamiento - se muestra el nuevo valor");
dado1.lanzarDado();
dado1.numActualDado();
