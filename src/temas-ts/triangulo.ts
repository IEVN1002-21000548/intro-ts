import { Distancia } from "./distanciaEntreDosPuntos";

class Triangulo extends Distancia {
    Punto_x3: number;
    Punto_y3: number;

    constructor(Punto_x1: number, Punto_y1: number, Punto_x2: number, Punto_y2: number, Punto_x3: number, Punto_y3: number) {
        super(Punto_x1, Punto_x2, Punto_y1, Punto_y2); 
        this.Punto_x3 = Punto_x3;
        this.Punto_y3 = Punto_y3;
    }

    esTriangulo(): boolean {
        const d1 = this.calcularDistancia();

        const distanciaPunto2a3 = new Distancia(this.Punto_x2, this.Punto_x3, this.Punto_y2, this.Punto_y3);
        const d2 = distanciaPunto2a3.calcularDistancia();

        const distanciaPunto3a1 = new Distancia(this.Punto_x3, this.Punto_x1, this.Punto_y3, this.Punto_y1);
        const d3 = distanciaPunto3a1.calcularDistancia(); 

        return d1 + d2 > d3 && d2 + d3 > d1 && d3 + d1 > d2;
    }

    imprimir() {
        if (this.esTriangulo()) {
            console.log("Los puntos SI forman un triángulo.");
        } else {
            console.log("Los puntos NO forman un triángulo.");
        }
    }
}
//3, 2, 4, 6, 7, 1
//Proyecto terminado
let triangulo1 = new Triangulo(0, 0, 1, 1, 2, 2);
triangulo1.imprimir(); 

let triangulo2 = new Triangulo(0, 0, 1, 1, 2, 2);
triangulo2.imprimir(); 
