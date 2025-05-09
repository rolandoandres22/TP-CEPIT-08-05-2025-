/*
Usando la clase Dado del ejercicio 7, simular el comportamiento de un cubilete de 5 dados.
Implementar los métodos necesarios para que se puedan lanzar todos los dados o algún dado o dados en particular
*/
export class Cubilete{
    private cantidadDado :  number;//se crea la variable dado numerico
    private valorDado : number;//se crea la variable dado numerico
    private dadosRecorridos:number[];

    constructor() {
        this.cantidadDado = this.cantidadDado;
        this.dadosRecorridos = [0, 0, 0, 0, 0];
    }

    //get y set
    setValordado(v: number) {
        this.valorDado = v;
    }
    
    getValorDado(): number {
        return this.valorDado;
    }

    lanzarDado(){//se crea el metodo lanzar dado
        this.valorDado = Math.floor(Math.random() * 6) + 1;//aleatorio entre 1 y 6
    }
    

    CantidadDado(){//se crea el metodo lanzar dado
        this.cantidadDado = Math.floor(Math.random() * 5) + 1;//aleatorio entre 1 y 5
    }

    MostrarCantDados(){
        console.log (`La Cantidad de dados es: ${this.cantidadDado}`)//muestra en consola la tirada del dado
    }
    
    RecorrerDados(){
        this.dadosRecorridos = [];
        if(this.cantidadDado<=5 && this.cantidadDado>0){
          for(let i =1;i<=this.cantidadDado;i++){
            this.lanzarDado();
            this.dadosRecorridos.push(this.valorDado);
            console.log (`El numero que salio en el dado ${i} es el:  ${this.valorDado}`);//muestra en consola la tirada del dado
        } 
        } else{
            console.log("El numero no se admite. Es de 1 a 5.");
        }
        return this.dadosRecorridos;
    }
}
