let listaDeGanhos = [10, 30, -10, -5, -1, 40];
let totalNegativo = 0;

for(let i = 0; i< listaDeGanhos.length; i++){
    if(listaDeGanhos[i] < 0){
        totalNegativo++;
    }
}

console.log(totalNegativo);