
const iva = 21
let precioProducto = 100


function precioIvaIncluido ()
{
    let precioTotal = (iva * precioProducto / 100) + precioProducto 
    return precioTotal
}
console.log(precioIvaIncluido());