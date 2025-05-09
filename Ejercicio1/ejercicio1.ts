// 1- Plantear una clase Auto de la forma en que se vió en la clase → especificando variables internas
// y métodos. Implementar en TypeScript

export class Auto {
    private marca: string;
    private modelo: string;
    private año: number;
    private patente: string;
    private velocidadActual: number;
    private estaEncendido: boolean;
 
    public constructor( marca: string, modelo: string, año: number, patente: string, velocidadActual: number) {
      
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.patente = patente;
        this.velocidadActual = velocidadActual;
        this.estaEncendido = false;
      
    }

    // Encender el auto
    public encender(): void {
        this.estaEncendido = true;
        console.log("El auto ha sido encendido");
    }

    // Apagar el auto
    public apagar(): void {
        if (this.velocidadActual > 0) {
            console.log("No se puede apagar el auto en movimiento");
        }else{
            this.estaEncendido = false;
            console.log("El auto ha sido apagado");
        }
        
    }

    // Acelerar el auto
    public acelerar(velocidad: number): void {
        if (!this.estaEncendido) {
            console.log("El auto debe estar encendido para acelerar");
        }else{
            this.velocidadActual += velocidad;
            console.log(`Acelerando... la velocidad aumento a ${this.velocidadActual} km/h`);
        }
    }
    
    // Frenar el auto
    public frenar(velocidad: number): void {
        if ((this.velocidadActual - velocidad) < 0) {
            this.velocidadActual = 0;
        } else {
            this.velocidadActual -= velocidad;
        }
        console.log(`Frenando... la velocidad se redujo a ${this.velocidadActual} km/h`);
    }

    public mostrarEstadoActual(){
        console.log(`La Marca del Auto es: ${this.marca}.`);
        console.log(`El modelo del Auto es: ${this.modelo}.`);
        console.log(`El año de fabricacion del Auto es: ${this.año}.`);
        console.log(`La patente del Auto es: ${this.patente}.`);
        console.log(`La velocidad actual del Auto es: ${this.velocidadActual}.`);
        console.log(`El Auto esta encendido?: ${this.estaEncendido}.`);
    }
 }
 //Ejecutar con "npm run ejercicio1"
 const auto1 = new Auto("Ford", "Focus", 2016, "AB 51561", 0);
 console.log("1 - Se muestra el estado inicial del auto");
 auto1.mostrarEstadoActual();
 console.log("\n2 - Encendemos el auto y mostramos el estadoactual.")
 auto1.encender();
 auto1.mostrarEstadoActual();
 console.log("\n3 - Aceleramos el auto a 60km/k y mostramos el estado");
 auto1.acelerar(60);
 auto1.mostrarEstadoActual();
 console.log("\n4 - Frenamos el auto a 20km/k restandole 40 y mostramos el estado");
 auto1.frenar(40);
 auto1.mostrarEstadoActual();
 console.log("\n5 - Intentamos apagarlo en funcionamiento...");
 auto1.apagar();
 console.log("\n6 - Por ultimo frenamos el auto a 0 y lo apagamos - Muestra el estado actual");
 auto1.frenar(20);
 auto1.apagar();
 auto1.mostrarEstadoActual();
 