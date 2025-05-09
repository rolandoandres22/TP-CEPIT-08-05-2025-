/*
Usando la clase Dado del ejercicio 7, simular el comportamiento de un cubilete de 5 dados.
Implementar los métodos necesarios para que se puedan lanzar todos los dados o algún dado o dados en particular
*/
import * as rls from "readline-sync";
class Cubilete{
    private cantidadDado :  number;//se crea la variable dado numerico
    private valorDado : number//se crea la variable dado numerico

    constructor() {
        this.cantidadDado = this.cantidadDado;
        this.CantidadDadosRLS;
        this.MostrarCantDados= this.MostrarCantDados;
        this.RecorrerDados;
        this.lanzarDado;
    }

    lanzarDado(){//se crea el metodo lanzar dado
        this.valorDado = Math.floor(Math.random() * 6) + 1;//aleatorio entre 1 y 6
    }
    

    CantidadDado(){//se crea el metodo lanzar dado
        this.cantidadDado = Math.floor(Math.random() * 5) + 1;//aleatorio entre 1 y 5
    }

    CantidadDadosRLS(){
        console.log("-----------------------------------------");
        this.cantidadDado = rls.questionInt("\n Ingrese la cantidad de dados: ");
    }

    MostrarCantDados(){
        console.log (`La Cantidad de dados es: ${this.cantidadDado}`)//muestra en consola la tirada del dado
    }
    
    RecorrerDados(){
        if(this.cantidadDado<=5 && this.cantidadDado>0){
          for(let i =1;i<=this.cantidadDado;i++){
            this.lanzarDado();
            console.log (`El numero que salio en el dado ${i} es el:  ${this.valorDado}`);//muestra en consola la tirada del dado
        } 
        } else{
            console.log("El numero no se admite. Es de 1 a 5.");
        }
        
    }
}
//Ejecutar con "npm run ejercicio12"
const dado1 = new Cubilete ();//nueva instancia de la clase dado
//opcion aleatoria
dado1.CantidadDado();
dado1.MostrarCantDados();
dado1.RecorrerDados();

const dado2 = new Cubilete ();//nueva instancia de la clase dado
//opcion rls para ingresar la cant de dados x el usuario
dado1.CantidadDadosRLS();
dado1.MostrarCantDados();
dado1.RecorrerDados();