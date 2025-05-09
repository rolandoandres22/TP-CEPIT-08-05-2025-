// Usando la Clase persona del Ejercicio 2 y la clase Cubilete del ejercicio anterior, implementar
// un juego de Generala. Esta Generala solo va a considerar puntos por obtener la siguientes
// marcas:
// • Escalera : 20 puntos
// • Full: 30 puntos
// • Poker: 40 puntos
// • Generala: 50 puntos
// En cada juego, cada jugador tiene 3 tiros y gana el jugador que tenga más puntos. En caso de que
// los 3 tiros ningún jugador haya hecho una marca, se declara empate. Implementar un método de
// desempate a su elección.
// En caso de ser necesario, modificar la clase persona para agregarle más atributos.

import { Persona } from './ejercicio2';
import { Cubilete } from './ejercicio12';
//tube que hacer un kilombo barbaro porque en la version de mi PC no anda ni include ni set ni fill, etc
//y ni agregando el archivo tsconfig.json con la configuracion me funciono, voy a tener que 
//reinstalar todo o formatear la PC porque no hubo forma de arreglarlo.
class JuegoGenerala {
    jugadores: Persona[];
    cubilete: Cubilete;

    constructor(jugadores: Persona[]) {
        this.jugadores = jugadores;
        this.cubilete = new Cubilete();
        // Forzamos la cantidad de dados a 5 (acceso directo al campo privado)
        (this.cubilete as any).cantidadDado = 5;
    }

    jugar() {
        for (let jugador of this.jugadores) {
            let puntos = this.jugarTurno(jugador);
            jugador.setPuntos(puntos);
            console.log(`${jugador.getNombre()} obtuvo ${puntos} puntos`);
        }

        const maxPuntos = Math.max(...this.jugadores.map(j => j.getPuntos()));
        const ganadores = this.jugadores.filter(j => j.getPuntos() === maxPuntos);

        if (ganadores.length === 1) {
            console.log(`Ganó ${ganadores[0].getNombre()} con ${maxPuntos} puntos`);
        } else {
            console.log(`Empate entre: ${ganadores.map(j => j.getNombre()).join(', ')}`);
            this.desempate(ganadores);
        }
    }

    jugarTurno(jugador: Persona): number {
        let mejorPuntaje = 0;

        for (let i = 0; i < 3; i++) {
            const dados = (this.cubilete as any).RecorrerDados();
            console.log(`${jugador.getNombre()}, tiro ${i+1}: ${dados.join(', ')}`);
            const puntaje = this.evaluarDados(dados);
            if (puntaje > mejorPuntaje) {
                mejorPuntaje = puntaje;
            }
        }

        return mejorPuntaje;
    }

    evaluarDados(dados: number[]): number {
        const dadosOrdenados = this.ordenarArray(dados);
        
        const conteo = this.contarOcurrencias(dadosOrdenados);
        
        // Verificar Generala 5 iguales
        if (this.tieneRepeticiones(conteo, 5)) return 50;
        
        // Verificar Poker 4 iguales
        if (this.tieneRepeticiones(conteo, 4)) return 40;
        
        // Verificar Full 3 de un número y 2 de otro
        let tieneTres = false;
        let tieneDos = false;
        for (const key in conteo) {
            if (conteo[key] === 3) tieneTres = true;
            if (conteo[key] === 2) tieneDos = true;
        }
        if (tieneTres && tieneDos) return 30;
        
        // Verificar Escalera
        if (this.esEscalera(dadosOrdenados)) return 20;
        
        return 0;
    }

    contarOcurrencias(array: number[]): {[key: number]: number} {
        const resultado: {[key: number]: number} = {};
        for (const num of array) {
            resultado[num] = (resultado[num] || 0) + 1;
        }
        return resultado;
    }

    tieneRepeticiones(conteo: {[key: number]: number}, cantidad: number): boolean {
        for (const key in conteo) {
            if (conteo[key] === cantidad) {
                return true;
            }
        }
        return false;
    }

    ordenarArray(array: number[]): number[] {
        // Implementación básica de ordenación por inserción
        const nuevoArray = [...array];
        for (let i = 1; i < nuevoArray.length; i++) {
            let j = i;
            while (j > 0 && nuevoArray[j-1] > nuevoArray[j]) {
                // Intercambiar elementos
                const temp = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j-1];
                nuevoArray[j-1] = temp;
                j--;
            }
        }
        return nuevoArray;
    }

    esEscalera(dados: number[]): boolean {
        // Primero eliminamos duplicados manualmente
        const unicos = this.eliminarDuplicados(dados);
        
        // Si no tenemos exactamente 5 números únicos, no puede ser escalera
        if (unicos.length !== 5) return false;
        
        // Comprobamos las dos posibles escaleras
        const escalera1 = this.ordenarArray([1, 2, 3, 4, 5]);
        const escalera2 = this.ordenarArray([2, 3, 4, 5, 6]);
        
        return this.arraysIguales(unicos, escalera1) || this.arraysIguales(unicos, escalera2);
    }

    eliminarDuplicados(array: number[]): number[] {
        const resultado: number[] = [];
        for (const num of array) {
            if (!this.contieneNumero(resultado, num)) {
                resultado.push(num);
            }
        }
        return resultado;
    }

    contieneNumero(array: number[], num: number): boolean {
        for (const n of array) {
            if (n === num) return true;
        }
        return false;
    }

    arraysIguales(a: number[], b: number[]): boolean {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    desempate(jugadores: Persona[]) {
        console.log("Se procede al desempate con un solo tiro por jugador");
        let max = 0;
        let ganador: Persona | null = null;

        for (let j of jugadores) {
            const dados = (this.cubilete as any).RecorrerDados();
            const suma = this.sumarArray(dados);
            console.log(`${j.getNombre()} sacó ${dados.join(', ')} -> suma: ${suma}`);
            if (suma > max) {
                max = suma;
                ganador = j;
            }
        }

        if (ganador) {
            console.log(`Desempate ganado por ${ganador.getNombre()} con suma ${max}`);
        } else {
            console.log("Empate total, no hay ganador.");
        }
    }

    sumarArray(array: number[]): number {
        let suma = 0;
        for (const num of array) {
            suma += num;
        }
        return suma;
    }
}

//Ejecutar con "npm run ejercicio14"
console.log("=== INICIO DEL JUEGO DE GENERALA ===\n");

const jugador1 = new Persona("Pepe", "Argento", "calle123", 50, "M", "Argentino", new Date(1975,5,6)); 
const jugador2 = new Persona("Coki", "Argento", "calle123", 26, "M", "Argentino", new Date(2000,1,1)); 

const juego = new JuegoGenerala([jugador1, jugador2]);
juego.jugar();

console.log("\n=== FIN DEL JUEGO ===");