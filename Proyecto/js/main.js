alert('Bienvenido a Peshku');

do{
    let option = seeMenu();
    if(option === products.length +1) break;
    let qty = parseInt(prompt(selectQty))

    addToCart(option, qty);

    resp = prompt('Seguir Compando? S/N')

}while(resp == 'S' || resp === `s`);

if(cart > 0){
    alert (`Total de su Compra $${cart}`)
}

alert(`Gracias por Comprar en Peshku`)