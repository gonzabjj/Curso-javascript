let products = [
    {id: 1, nombre: "Filet de merluza", price: 450, stock:10},
    {id: 2, nombre: "Filet de lenguado", price: 800, stock:50},
    {id: 3, nombre: "Filet anchoa de banco", price: 500, stock:40},
    {id: 4, nombre: "Cornalitos", price: 400, stock:40},
    {id: 5, nombre: "Tubo de calamar", price: 750, stock:50},
    {id: 6, nombre: "Anillas de calamar", price: 800, stock:60},
    {id: 7, nombre: "Tentaculo de calamar", price: 400, stock:40},
    {id: 8, nombre: "Langostino entero premium", price: 1000, stock:10},
    {id: 9, nombre: "Cola de langostino", price: 850, stock:20},
    {id: 10, nombre: "Langostino pelado", price: 1000, stock:10},
    {id: 11, nombre: "Camaron pelado", price: 1000, stock:15},
    {id: 12, nombre: "Mejillon pelado", price: 700, stock:12},
    {id: 13, nombre: "Mix de mariscos", price: 900, stock:9},
    {id: 14, nombre: "Pulpo", price: 120, stock:12},
    {id: 15, nombre: "Salmon ahumado", price: 700, stock:7},
]; 

products.sort((a, b) =>{
    if (a.price < b.price){
        return -1;
    }
    if (a.price > b.price){
        return 1;
    }
    return 0;
});

console.log(products)