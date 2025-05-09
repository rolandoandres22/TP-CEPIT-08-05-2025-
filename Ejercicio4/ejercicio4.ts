/* 4-Crea una clase llamada Rectangulo que represente. Esta clase debe tener:
 • Un constructor que reciba dos parámetros: ancho y altura.
 • Métodos para calcular el área y el perímetro del rectángulo.
 • El método calcular_area() debe retornar el área del rectángulo (ancho * altura).
 • El método calcular_perimetro() debe retornar el perímetro del rectángulo (2 * (ancho + altura)).
 Una vez definida la clase Rectangulo, crea una instancia de esta clase
 con un ancho de 5 unidades y una altura de 10 unidades. Luego,
 utiliza los métodos de la clase para calcular el área y el perímetro del
 rectángulo creado e imprime los resultados.*/

class Rectangulo{
    ancho: number;
    altura: number;

constructor(ancho:number, altura:number){
    this.ancho = ancho;
    this.altura = altura; 
}

calcular_area(): number {
    return (this.ancho * this.altura);
}

calcular_perimetro(): number {
    return (2 * (this.ancho + this.altura));
}
//se creo un metodo para imprimir el area y el perimetro
mostrarAreayPerimetro(){
    console.log(`El area y perimetro de un rectangulo de ${this.ancho} de ancho y ${this.altura} de altura es:`);
    console.log(`El area del rectangulo es: ${Rectangulo1.calcular_area()}`);
    console.log(`El perimetro del rectangulo es: ${Rectangulo1.calcular_perimetro()}`);
}
}
const Rectangulo1 = new Rectangulo (5, 10);
//Ejecutar con "npm run ejercicio4"
Rectangulo1.mostrarAreayPerimetro();