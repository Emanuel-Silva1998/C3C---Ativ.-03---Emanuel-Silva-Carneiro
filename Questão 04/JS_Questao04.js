function coletarValores() {
    let numint = document.getElementById("numint").value;
    return numint
}

function geraLista(numint) {

    const x = parseInt(numint);
    if(x != numint) {
        return "Número inválido, insira um númeor inteiro"
    }

    let listaresposta = [];
    for (let index = 1; index <= numint; index++) {
        
        let mult5 = index%5 == 0;
        let mult9 = index%9 == 0;
        if(mult5 && mult9) {
            listaresposta.push("LuidyMoura");        
        } else if(mult5) {
            listaresposta.push("Luidy");        
        } else if(mult9) {
            listaresposta.push("Moura");        
        } else {
            listaresposta.push(index);        
        }
    }
    return listaresposta
}

function Resultado(res) {
    let Valor = document.getElementById("res")
    if (Valor) {
        Valor.innerText = res;
    }
    else {
        NovoValor = document.createElement("h3")
        NovoValor.innerText = res;
        NovoValor.id = "res";

        document.body.appendChild(NovoValor);
    }
}

function repetidor() {
    let nota = coletarValores();
    let result = geraLista(nota);
    Resultado(result);
}