// 3-Implementar la clase Televisor con todos los atributos y métodos, como se vio en clase, incluido
// la funcionalidad mute.

export class Televisor {
    private brand: string; // Marca 
    public channel: number = 1; //la puse publica para acceder y cambiar el canal segun plan sino tenia que hacer getter y setter y no se vio aun
    private volume: number = 0;
    private isOn: boolean = false;//prendido o apagado
    private isMuted : boolean = false; // Si el volumen llega a 0 y damos al boton de bajar volumen, el televisor se pone en mute
    
    public constructor(brand: string, channel: number, volume:number, isOn: boolean, isMuted: boolean) { // Es lo que va a recibir por parametro
        this.brand = brand; 
        this.channel = channel;
        this.volume = volume;
        this.isOn = isOn;
        this.isMuted = isMuted;
    }

    // METODOS (funciones dentro de una clase = class)

    public switchPower(): void {
        this.isOn = !this.isOn;
        this.isOn ? console.log (`Hello ${this.brand}`) : console.log (`Good bye ${this.brand}`);
    }

    public muteOnOff(): void {
        this.isMuted = !this.isMuted;
        this.volume = 0;
    }

    private getTime(): string {
        const fullDate = new Date();
        return `${fullDate.getHours()}:${fullDate.getMinutes()}`;
    }

    // Patron llamado "early return"
    public status(): void {
        if (this.isOn === false) {
            return console.log("El TV se encuentra apagado, enciendalo y disfrute!!\n");
        } else {
            console.log(`
                ------------------
                - Channel: ${this.channel}
                - Volume: ${this.volume}
                - Hour: ${this.getTime()} 
                - Mute: ${this.isMuted}
                ------------------
                `);
        }
    }

    public channelUp(): void {
        if (this.channel === 99) { // Si el canal esta en el 99 y sube un canal mas, pasa al canal 1 (99 es el canal maximo)
            this.channel = 1; // Canal 1 porque estaba en 99, subio uno mas y pego la vuelta (1 es el canal minimo)
        } else {
            this.channel += 1;
        }
    }

    public channelDown(): void {
        if (this.channel === 1) {
            this.channel = 99;
        } else {
            this.channel -= 1;
        }
    }

    public selectChannel(channelNumber: number) {
        if (channelNumber > 0 && channelNumber <= 99) {
            this.channel = channelNumber;
        }
    }

    public volumeUp(): void {
        if (this.volume < 100) {
            if (this.isMuted === true) {
                this.isMuted = false;
            }
            this.volume += 1;
        }else {
            console.log("No se puede subir mas el volumen");
        }
    }

    public volumeDown(): void {
        if (this.volume > 0) {
            this.volume -=1;
        }else {
            this.isMuted = true;
        }
    }
}

