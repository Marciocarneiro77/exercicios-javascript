let familia = ["Marinalva", "José", "Marilene", "Marcos", "Pedro", "Marcelo"];

for(let i = 0; i < familia.length; i++){
    if(familia[i] == "Pedro"){
        console.log(familia[i] + " Sousa");
        continue;
    }else{
        console.log(familia[i] + " Macedo");
    }
}