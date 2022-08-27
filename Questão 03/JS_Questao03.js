function coletarValores() {
    let nota = document.getElementById("nota").value;

    return nota
}

function arredond(nota) {
    if(nota<38) {
        return nota
    }

    let modNota = nota%5;
    if(modNota>=3) {
        return parseInt(nota) + 5 - modNota;
    } else {
        return nota
    }
}

function aprovReprov(nota) {
    if(nota<0 || nota>100) {
        return "Valor de nota inválido, insira um valor entre 0 e 100."
    }
    novaNota=arredond(nota);
    if(novaNota<40) {
        return `Reprovado com nota: ${novaNota}`
    }
    else {
        return `Aprovado com nota: ${novaNota}`
    }
}

function Resultado(res) {
    let Valor = document.getElementById("res");
    if (Valor) {
        Valor.innerText = res;
    }
    else {
        NovoValor = document.createElement("h3");
        NovoValor.innerText = res;
        NovoValor.id = "res";

        document.body.appendChild(NovoValor);
    }
}

function passaOuNaoPassa() {
    let nota = coletarValores();
    let result = aprovReprov(nota);
    Resultado(result);
}
