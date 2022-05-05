function EnviarQuestao(){
    var contadorCerta = localStorage.getItem("contadorCerta");
    var contadorErrada = localStorage.getItem("contadorErrada");
    
    const alternativas = document.querySelectorAll("");
    console.log(alternativas)
    alternativas.forEach(
        function(valor) {
            if(valor.checked){

                if(valor.value == "certa"){
                    let valorNovo =  parseInt(contadorCerta) + 1;
                    localStorage.setItem("contadorCerta", valorNovo);
                    console.log("certa")
                }
                if(valor.value == "errada"){
                    let valorNovo =  parseInt(contadorErrada) + 1;
                    localStorage.setItem("contadorErrada", valorNovo);
                    console.log("errada")
                }
                else{
                    console.log("errada")
                }

            }
        },
    )
}