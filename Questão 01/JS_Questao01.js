function ColetarValores() {
    let LadoA = document.getElementById("LadoA").value;
    let LadoB = document.getElementById("LadoB").value;
    let LadoC = document.getElementById("LadoC").value;
  
    return [LadoA, LadoB, LadoC]
  }

function VerificarTipoDeTriangulo(LadoA, LadoB, LadoC) {
    if((LadoA <= 0) || (LadoB <= 0) || (LadoC <= 0)) {
        return "Medidas inválidas";
    }
    if((LadoA == LadoB) && (LadoA == LadoC)) {
        return "Equilátero";
    }
    else if((LadoA != LadoB) && (LadoA != LadoC) && (LadoB != LadoC)) {
        return "Escaleno";
    }
    else {
        return "Isósceles";
    }
}

function Resultado(res) {
    let ValorRes = document.getElementById("res")
    if (ValorRes) {
        ValorRes.innerText = res
    }
    else {
        NovoValorRes = document.createElement("h3")
        NovoValorRes.innerText = res
        NovoValorRes.id = "res"
  
        document.body.appendChild(NovoValorRes)
    }
  }

  function TesteTriangulo() {
    let [LadoA, LadoB, LadoC] = ColetarValores()
    let res = VerificarTipoDeTriangulo(LadoA, LadoB, LadoC)
    Resultado(res)
  }