import { calcularIVA2,Producto } from "./05-destructura-funciones";

const carrito:Producto[]=[
    {
        desc:'telefono1',
        precio:100,
    },
    {
        desc:'telefono2',
        precio:100,
    },
    {
        desc:'telefono3',
        precio:100,
    },
]

const [total, iva] = calcularIVA2(carrito)
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);