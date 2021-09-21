/*Verifica el Stock*/

const isStock = (quantity,stock) =>{
    if(quantity > stock){
        alert(`Stock insuficiente, la tienda cuenta con ${stock}`)
        return false;
    }
    else return true;
}

/*Agregado de Productos*/
const addToCart = (option, quantity) =>{
    const build = products.find(product=>product.id === option)
    console.log(build);

    if(isStock(quantity,build.stock)){
        cart += (quantity * build.price);
        products[option-1].stock -= quantity;
        alert(`${build.nombre} Se agrego a tu carrito`)
    }
}

/*Nuevo Menu*/
const seeMenu = () =>{
    let menu = "Seleccione un Producto:\n";
    products.forEach((product)=>{
        menu += product.id + "- " + product.nombre + "\n";
    });
    menu += (products.length +1) + "- Salir";
    return parseInt(prompt(menu));
}
