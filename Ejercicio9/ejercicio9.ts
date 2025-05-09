//9- Implementar una clase Decodificador y relacionarla con la clase Televisor del ejercicio 2.

import { Televisor } from "./ejercicio3";

class Decodificador {
        private televisor : Televisor;
        private marcaDecodificador : string;
        private planDecodificador : string;//plan basico 100 canales, medio 500 canales, full 999 canales

        constructor (televisor : Televisor, marcaDecodificador : string, planDecodificador : string){
                this.televisor = televisor;
                this.marcaDecodificador = marcaDecodificador;
                this.planDecodificador = planDecodificador;
            }
        
            public VolumeUpDeco() {
                this.televisor.volumeUp();
                console.log(`Se subió el volumen del dedificador`)
            }
        
            public VolDownDeco() {
                this.televisor.volumeDown();
                console.log(`Se bajó el volumen del decodificador`)
            }

            public channelUpDeco() {
              //se crea un switch para diferenciar la cantidad de canales de cada plan
                switch (this.planDecodificador.toLowerCase()) {
                    case "basico":
                        if (this.televisor.channel === 100) {
                            this.televisor.channel = 1; // Vuelve al canal 1 si supera el límite
                        } else {
                            this.televisor.channelUp(); // Sube normalmente
                        }
                        console.log(`Se subió el canal del decodificador de ${this.marcaDecodificador} (Plan: ${this.planDecodificador})`);
                        break; 
                    case "medio":
                        if (this.televisor.channel === 500) {
                            this.televisor.channel = 1; 
                        } else {
                            this.televisor.channelUp(); 
                        }
                        console.log(`Se subió el canal del decodificador de ${this.marcaDecodificador} (Plan: ${this.planDecodificador})`);
                        break; 
                    case "full":
                        if (this.televisor.channel === 999) {
                            this.televisor.channel = 1; 
                        } else {
                            this.televisor.channelUp(); 
                        }
                        console.log(`Se subió el canal del decodificador de ${this.marcaDecodificador} (Plan: ${this.planDecodificador})`);
                        break; 
                    default:
                        if (this.televisor.channel === 100) {
                            this.televisor.channel = 1; 
                        } else {
                            this.televisor.channelUp(); 
                        }
                        console.log(`Se subió el canal del decodificador de ${this.marcaDecodificador} (Plan: ${this.planDecodificador})`);
                        break; 
                }
                
            }
            
            public channelDownDeco() {
            //se crea un switch para diferenciar la cantidad de canales de cada plan   
                switch (this.planDecodificador.toLowerCase()) {
                    case "basico":
                        if (this.televisor.channel === 1) {
                            this.televisor.channel = 100; // Vuelve al canal 100 si baja el límite de1
                        } else {
                            this.televisor.channelDown(); // Baja normalmente
                        }
                        console.log(`Se bajó el canal del decodificador de ${this.marcaDecodificador} (Plan: ${this.planDecodificador})`);
                        break; 
                    case "medio":
                        if (this.televisor.channel === 1) {
                            this.televisor.channel = 500; 
                        } else {
                            this.televisor.channelDown();
                        }
                        console.log(`Se bajó el canal del decodificador de ${this.marcaDecodificador} (Plan: ${this.planDecodificador})`);
                        break; 
                    case "full":
                        if (this.televisor.channel === 1) {
                            this.televisor.channel = 999; 
                        } else {
                            this.televisor.channelDown(); 
                        }
                        console.log(`Se bajó el canal del decodificador de ${this.marcaDecodificador} (Plan: ${this.planDecodificador})`);
                        break; 
                    default:
                        if (this.televisor.channel === 1) {
                            this.televisor.channel = 100; 
                        } else {
                            this.televisor.channelDown(); 
                        }
                        console.log(`Se bajó el canal del decodificador de ${this.marcaDecodificador} (Plan: ${this.planDecodificador})`);
                        break; 
                }
                
            }

    }
    //ejecutar con "npm run ejercicio9"
    const televisor2 = new Televisor ("Samsung",1,10,false,false);
    const decodificador1 = new Decodificador (televisor2, "DirecTV", "medio");
    console.log("1 - se muestra el tv apagado")
    televisor2.status();
    console.log("2 - se enciende el TV - se muestra el estado");
    televisor2.switchPower();
    televisor2.status();
    console.log("3 - Se sube el volumen del decodificador");
    decodificador1.VolumeUpDeco();
    televisor2.status();
    console.log("4 - se subio un canal del decodificador - se muestra el estado")
    decodificador1.channelUpDeco();
    televisor2.status();
    console.log("5 - se bajan 2 canales del decodificador para ver si va al maximo del plan");
    decodificador1.channelDownDeco();
    decodificador1.channelDownDeco();
    televisor2.status();