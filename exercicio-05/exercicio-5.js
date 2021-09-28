function Calcular(){
    let idade = document.getElementById("idade").value;

    if(idade<65){
    
        document.getElementById("mensagem").innerText = "VOCÊ NÃO PODE SE APOSENTAR AINDA!";
    }
    if(idade>65){
        
        document.getElementById("mensagem").innerText = "PARABÉNS, VOCÊ JÁ PODE SE APOSENTAR.";
}




if(idade > 65){
    console.log("Parabéns, você já pode se aposentar.");
}else{
    console.log("Você não pode se aposentar ainda!");
}
}

