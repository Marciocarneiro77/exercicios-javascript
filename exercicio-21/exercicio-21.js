let cartela = [9, 12, 21, 28, 31, 46];
let numeroSorteado = 46;

for(let i = 0; i < cartela.length; i++){
    if(cartela[i] == numeroSorteado){
        console.log("Encontrei o número!");
        break;
    }
}