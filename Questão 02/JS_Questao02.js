function coletarValores() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    return [a, b, c]
}

function bhaskara(a, b, c) {
    let valorDelta = b * b - 4 * a * c;
    if(valorDelta < 0) {
        return "Delta é negativo."
    }
    if(a == 0) {
        return "O valor de 'a' deve ser diferente de 0."
    }

    let x1 = (-b + Math.sqrt(valorDelta)) / (2 * a);
    let x2 = (-b - Math.sqrt(valorDelta)) / (2 * a);
    return `Os valores são X1= ${x1.toFixed(4)} e X2= ${x2.toFixed(4)}`
}

function Resultado(res) {
    let ValorRes = document.getElementById("res");
    if (ValorRes) {
        ValorRes.innerText = res
    }
    else {
        NovoValorRes = document.createElement("h3");
        NovoValorRes.innerText = res;
        NovoValorRes.id = "res";

        document.body.appendChild(NovoValorRes);
    }
}

function calBhaskara() {
    let [a, b, c] = coletarValores();
    let result = bhaskara(a, b, c);
    Resultado(result);
}