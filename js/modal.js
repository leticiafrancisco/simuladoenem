function fechar() {
    var button = document.getElementsByClassName("close-model")
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");

    if(button[0]) {
        modelErrada.style.display = "none";
    }if(button[1]) {
        modelCerta.style.display = "none";
    }
}

function Q1C() {
    
    var opcaoC = document.getElementById("opcaoC");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoC.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "ressaltar a necessidade de reflexão dos fãs."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "ressaltar a necessidade de reflexão dos fãs."'
        modelErrada.style.display = "block";
    }
}

function Q2A() {
    
    var opcaoA = document.getElementById("opcaoA");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoA.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "a riqueza da mistura cultural."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "a riqueza da mistura cultural."'
        modelErrada.style.display = "block";
    }
}

function Q3A() {
    
    var opcaoA = document.getElementById("opcaoA");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoA.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "a ascenção social era improvável."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "a ascenção social era improvável."'
        modelErrada.style.display = "block";
    }
}

function Q4B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "dificuldade de conciliar diferentes anseios."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "dificuldade de conciliar diferentes anseios."'
        modelErrada.style.display = "block";
    }
}

function Q5B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "perspectiva do visitante."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "perspectiva do visitante."'
        modelErrada.style.display = "block";
    }
}

function Q6B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "a recorrência de formulações hipotéticas."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "a recorrência de formulações hipotéticas."'
        modelErrada.style.display = "block";
    }
}

function Q7D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "valoriza o uso de variedades populares."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "valoriza o uso de variedades populares."'
        modelErrada.style.display = "block";
    }
}

function Q8C() {
    
    var opcaoC = document.getElementById("opcaoC");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoC.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "proeza da premiação de uma história ambientada no interior do Nordeste brasileiro."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "proeza da premiação de uma história ambientada no interior do Nordeste brasileiro."'
        modelErrada.style.display = "block";
    }
}

function Q9D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "ao emprego de ditados populares que resgatam memórias e saberes coletivos."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "ao emprego de ditados populares que resgatam memórias e saberes coletivos."'
        modelErrada.style.display = "block";
    }
}

function Q10E() {
    
    var opcaoE = document.getElementById("opcaoE");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoE.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "[…] premiar uma abordagem muito usada e radical como Son of Saul não deixaria de ser um passo à frente dos votantes."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "[…] premiar uma abordagem muito usada e radical como Son of Saul não deixaria de ser um passo à frente dos votantes."'
        modelErrada.style.display = "block";
    }
}

function Q11A() {
    
    var opcaoA = document.getElementById("opcaoA");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoA.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "remetem a violência física e simbólica contra os povos escravizados."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "remetem a violência física e simbólica contra os povos escravizados."'
        modelErrada.style.display = "block";
    }
}

function Q12D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "sensibilizar o público em relação ao abandono de animais domésticos."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "sensibilizar o público em relação ao abandono de animais domésticos."'
        modelErrada.style.display = "block";
    }
}

function Q13C() {
    
    var opcaoC = document.getElementById("opcaoC");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoC.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "ironizar as condições de igualdade."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "ironizar as condições de igualdade."'
        modelErrada.style.display = "block";
    }
}

function Q14E() {
    
    var opcaoE = document.getElementById("opcaoE");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoE.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "a arte como perpetuadora de episódios marcantes da humanidade que tem de ser relembrados para que não tornem acontecer."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "a arte como perpetuadora de episódios marcantes da humanidade que tem de ser relembrados para que não tornem acontecer."'
        modelErrada.style.display = "block";
    }
}

function Q15D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "tensa relação entre o erudito e o popular na constituição da música brasileira."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "tensa relação entre o erudito e o popular na constituição da música brasileira."'
        modelErrada.style.display = "block";
    }
}

function Q16B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "exemplifica o fato criticado no texto com uma situação concreta."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "exemplifica o fato criticado no texto com uma situação concreta."'
        modelErrada.style.display = "block";
    }
}

function Q17E() {
    
    var opcaoE = document.getElementById("opcaoE");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoE.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "atitude contestadora de um “jogador-problemas”."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "atitude contestadora de um “jogador-problemas”."'
        modelErrada.style.display = "block";
    }
}

function Q18D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "representação gramática e idealizada do corpo da índia."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "representação gramática e idealizada do corpo da índia."'
        modelErrada.style.display = "block";
    }
}

function Q19D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "promoveram uma vivência corporal menos ativa."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "promoveram uma vivência corporal menos ativa."'
        modelErrada.style.display = "block";
    }
}

function Q20D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "produzir uma arte multimodal, com o intuito de ampliar as possibilidades de expressão estética."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "produzir uma arte multimodal, com o intuito de ampliar as possibilidades de expressão estética."'
        modelErrada.style.display = "block";
    }
}

function Q21A() {
    
    var opcaoA = document.getElementById("opcaoA");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoA.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "manter os estoques de água doce."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "manter os estoques de água doce."'
        modelErrada.style.display = "block";
    }
}

function Q22B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "a possibilidade de se usar tanto “tu” quanto “você” caracteriza a diversidade da língua."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "a possibilidade de se usar tanto “tu” quanto “você” caracteriza a diversidade da língua."'
        modelErrada.style.display = "block";
    }
}

function Q23B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "a criação artística é beneficiada pelo encontro de modelos oriundos de diferentes realidades socioculturais."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "a criação artística é beneficiada pelo encontro de modelos oriundos de diferentes realidades socioculturais."'
        modelErrada.style.display = "block";
    }
}

function Q24B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "trazem à tona atitudes de um estado de exceção."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "trazem à tona atitudes de um estado de exceção."'
        modelErrada.style.display = "block";
    }
}

function Q25B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "conferir à narrativa um tom anedótico."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "conferir à narrativa um tom anedótico."'
        modelErrada.style.display = "block";
    }
}

function Q26D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "O gigante do Brasil" e "O Pedro mencionado."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "O gigante do Brasil" e "O Pedro mencionado."'
        modelErrada.style.display = "block";
    }
}

function Q27E() {
    
    var opcaoE = document.getElementById("opcaoE");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoE.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "surgem na simplificação das informações visuais de cada composição."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "surgem na simplificação das informações visuais de cada composição."'
        modelErrada.style.display = "block";
    }
}

function Q28B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "assimilam os comportamentos dos usuários."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "assimilam os comportamentos dos usuários."'
        modelErrada.style.display = "block";
    }
}

function Q29C() {
    
    var opcaoC = document.getElementById("opcaoC");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoC.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "adotarem uma postura crítica em relação às informações recebidas."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "adotarem uma postura crítica em relação às informações recebidas."'
        modelErrada.style.display = "block";
    }
}

function Q30E() {
    
    var opcaoE = document.getElementById("opcaoE");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoE.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "desconsiderar diferentes níveis de formalidade nas situações de comunicação."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "desconsiderar diferentes níveis de formalidade nas situações de comunicação."'
        modelErrada.style.display = "block";
    }
}

function Q31A() {
    
    var opcaoA = document.getElementById("opcaoA");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoA.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "contribuíram para democratização do skate."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "contribuíram para democratização do skate."'
        modelErrada.style.display = "block";
    }
}

function Q32D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "enunciador, buscando expressar sua atitude em relação ao conteúdo do enunciado."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "enunciador, buscando expressar sua atitude em relação ao conteúdo do enunciado."'
        modelErrada.style.display = "block";
    }
}

function Q33A() {
    
    var opcaoA = document.getElementById("opcaoA");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoA.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "função de apresentação do livro."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "função de apresentação do livro."'
        modelErrada.style.display = "block";
    }
}

function Q34B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "influenciar o leitor a mudar atitudes e hábitos considerados prejudiciais às crianças."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "influenciar o leitor a mudar atitudes e hábitos considerados prejudiciais às crianças."'
        modelErrada.style.display = "block";
    }
}

function Q35D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "tem sua identidade e seu lugar referendados pelo homem."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "tem sua identidade e seu lugar referendados pelo homem."'
        modelErrada.style.display = "block";
    }
}

function Q36B() {
    
    var opcaoB = document.getElementById("opcaoB");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoB.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "reposicionamento estético de objetos por meio da mudança de função."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "reposicionamento estético de objetos por meio da mudança de função."'
        modelErrada.style.display = "block";
    }
}

function Q37A() {
    
    var opcaoA = document.getElementById("opcaoA");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoA.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "ironizar a incorporação de ideias e atitudes conformistas."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "ironizar a incorporação de ideias e atitudes conformistas."'
        modelErrada.style.display = "block";
    }
}

function Q37A() {
    
    var opcaoA = document.getElementById("opcaoA");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoA.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "ironizar a incorporação de ideias e atitudes conformistas."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "ironizar a incorporação de ideias e atitudes conformistas."'
        modelErrada.style.display = "block";
    }
}

function Q38C() {
    
    var opcaoC = document.getElementById("opcaoC");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoC.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "sonho de autorrealização desenhado pela memória."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "sonho de autorrealização desenhado pela memória."'
        modelErrada.style.display = "block";
    }
}

function Q39A() {
    
    var opcaoA = document.getElementById("opcaoA");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoA.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "falação" e "pros bailes."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "falação" e "pros bailes."'
        modelErrada.style.display = "block";
    }
}

function Q40C() {
    
    var opcaoC = document.getElementById("opcaoC");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoC.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "alimentada pela imersão lírica no espaço da segregação."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "alimentada pela imersão lírica no espaço da segregação."'
        modelErrada.style.display = "block";
    }
}

function Q41D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "metaforiza a conquista de sua plena realização."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "metaforiza a conquista de sua plena realização."'
        modelErrada.style.display = "block";
    }
}

function Q42C() {
    
    var opcaoC = document.getElementById("opcaoC");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoC.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "educação de espaços para vivência de práticas corporais."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "educação de espaços para vivência de práticas corporais."'
        modelErrada.style.display = "block";
    }
}

function Q43D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "acentuar a resistência identitária dos povos escravizados."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "acentuar a resistência identitária dos povos escravizados."'
        modelErrada.style.display = "block";
    }
}

function Q44D() {
    
    var opcaoD = document.getElementById("opcaoD");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoD.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "informações não fidedignas."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "informações não fidedignas."'
        modelErrada.style.display = "block";
    }
}

function Q45C() {
    
    var opcaoC = document.getElementById("opcaoC");
    var modelCerta = document.getElementById("model-certa");
    var modelErrada = document.getElementById("model-errada");
    var correta = document.getElementById("repCerta");
    var errada = document.getElementById("repErrada");

    if (opcaoC.checked==true) { // Opção correta
        correta.innerHTML = 'A resposta é: "destacar a relevância histórica e a riqueza estética do choro no cenário musical brasileiro."';
        modelCerta.style.display = "block"
    }
    else {
        errada.innerHTML = 'A resposta correta é: "destacar a relevância histórica e a riqueza estética do choro no cenário musical brasileiro."'
        modelErrada.style.display = "block";
    }
}