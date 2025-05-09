// 8-Implementar a una clase que represente una cuenta bancaria, con dos atributos: Número de
// cuenta y Saldo actual. Implementa los siguientes métodos:
// ● Un constructor que me permita establecer el número de cuenta y el saldo.
// ● Un método que incremente el saldo.
// ● Un método que disminuya el saldo si hay fondos suficientes, caso contrario no hace nada.
// ● Un método que devuelva el saldo actual

class CuentaBancaria{
    private numeroDeCuenta: number;
    private saldoActual: number;

    public constructor(numeroDeCuenta: number, saldoActual: number){
        this.numeroDeCuenta = numeroDeCuenta;
        this.saldoActual = saldoActual;
    }

    public incrementarSaldo(montoIngresado): void {
        this.saldoActual = this.saldoActual + montoIngresado;
    }

    public disminuirSaldo(montoIngresado): void {
        if(montoIngresado <= this.saldoActual){
            this.saldoActual = this.saldoActual - montoIngresado;
        } else {
            console.log("No se puede realizar la operación. Saldo insuficiente");
        }
    }

    public mostrarSaldoActual(): void {
        console.log(`El saldo actual de la cuenta ${this.numeroDeCuenta} es de: $${this.saldoActual}`);
    }
}

const cuentaBancaria1 = new CuentaBancaria (10002156, 20000); 
//para ejecutar "npm run ejercicio8"
console.log("1 - Iniciamos mostrando los datos actuales con el método mostrarSaldoActual");
cuentaBancaria1.mostrarSaldoActual();
console.log("2 - Agregaremos dinero a la cuenta con el método incrementarSaldo pasandole por parametro la cantidad");
cuentaBancaria1.incrementarSaldo(1000);
cuentaBancaria1.mostrarSaldoActual();
console.log("3 - Restaremos dinero de la cuenta con el metodo disminuirSaldo pasandole por parametro la cantidad");
cuentaBancaria1.disminuirSaldo(10000);
cuentaBancaria1.mostrarSaldoActual();
console.log("4 - Restaremos mas dinero del que tenemos para ver si da el error de saldo insuficiente");
cuentaBancaria1.disminuirSaldo(15000);
console.log("5 - Por último mostramos el saldo actual luego de que la operación fue rechazada");
cuentaBancaria1.mostrarSaldoActual();