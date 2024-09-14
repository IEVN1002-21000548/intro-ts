class Distancia{
    Punto_x1:number;
    Punto_x2:number;
    Punto_y1:number;
    Punto_y2:number;
    constructor (Punto_x1:number,Punto_x2:number,Punto_y1:number,Punto_y2:number){
        this.Punto_x1=Punto_x1;
        this.Punto_y1=Punto_y1;
        this.Punto_x2=Punto_x2;
        this.Punto_y2=Punto_y2;
    }
    imprimir(){
        console.log(`La distancia entre los puntos es : ${Math.sqrt((this.Punto_x2 - this.Punto_x1)**2 + (this.Punto_y2 - this.Punto_y1)**2)}`)
    }
}

let dis:Distancia;
dis = new Distancia(2,5,3,1)
dis.imprimir()