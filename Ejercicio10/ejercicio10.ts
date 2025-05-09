// Usando la Clase automotor del ejercicio 1, implementar la clase Registro Automotor, con métodos para:
// ● Agregar un auto
// ● Buscar un auto por patente
// ● Eliminar o actualizar autos existentes

import { Auto } from "./ejercicio1";

class RegistroAutomotor {
    private auto : Auto[];

    public constructor (){
        this.auto = [];
    }

    public agregAutoaRegistro(auto : Auto){
        this.auto.push(auto);
        console.log (`El auto con la patente ${auto.patente} se agregó correctamente.`);
    }

    public buscarPatente(patente: string): Auto | undefined {
        for (let i = 0; i < this.auto.length; i++) {
            if (this.auto[i].patente === patente) {
                const autoEncontrado = this.auto[i];
                console.log(`La patente ${autoEncontrado.patente} fue encontrada con éxito.`);
                autoEncontrado.mostrarEstadoActual();
                return autoEncontrado;
            }
        }
        console.log(`No se encontró la patente ${patente}.`);
        return undefined;
    }
    public eliminarAutoDeRegistro(patente: string): void {
    for (let i = 0; i < this.auto.length; i++) {
        if (this.auto[i].patente === patente) {
            this.auto.splice(i, 1); 
            console.log(`El auto con la patente ${patente} se eliminó.`);
           return;//para que salga si se elimina
        }  
    } 
    console.log(`La patente ${patente} no está en el registro.\n`);
}


    public actualizarAutoDeRegistro(patente: string,newPatente: string): void {
        for (let i = 0; i < this.auto.length; i++) {
            if (this.auto[i].patente === patente) {
                this.auto[i].patente = newPatente;
                console.log(`Se actualizaron los datos del auto con la patente ${patente}.\n`);
                return;
            }
        } console.log(`No se pudo actualizar porque el número de patente ${patente} no existe.\n`);
    }

    public mostrarRegistro(): void {
        if(this.auto.length === 0){
            console.log("El registro automotor no tiene autos registrados!\n");
        }else{
              console.log ("Los autos guardados en el Registro Automotor son: \n");
            this.auto.forEach (auto => auto.mostrarEstadoActual());
        } 
        
    }

}
//Ejecutar con "npm run ejercicio10"
const auto1= new Auto("Ford","GT90", 2024, "AAA123",0);
const auto2= new Auto("Ford","Focus", 2016, "BBB456",0);
const auto3= new Auto("Ford","Falcon", 1967, "CCC789",0);
const auto4= new Auto ("Ford" , "Mustang Shelby" , 1967, "DDD101",0)

const registro = new RegistroAutomotor();
console.log("1 - se muestra el registro automotor vacio");
registro.mostrarRegistro();
console.log("2 - Se agregan los 4 autos al registro");
registro.agregAutoaRegistro(auto1);
registro.agregAutoaRegistro(auto2);
registro.agregAutoaRegistro(auto3);
registro.agregAutoaRegistro(auto4);
console.log("\n3 - Se muestran los registros agregados")
registro.mostrarRegistro();
console.log("4 - Se busca la patente AAAAAA");
registro.buscarPatente("AAAAAA");
console.log("\n5 - Se eliminan dos patentes y luego se muestra el Registro")
registro.eliminarAutoDeRegistro("AAA123");
registro.eliminarAutoDeRegistro("BBB456");
registro.mostrarRegistro();
console.log("6 - Se actualiza la patente del auto4(DDD101) a EEE333");
registro.actualizarAutoDeRegistro("DDD101","EEE333");
registro.mostrarRegistro();



























