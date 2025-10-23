function verificarTriangulo() {
  const a = parseFloat(document.getElementById("t1").value);
  const b = parseFloat(document.getElementById("t2").value);
  const c = parseFloat(document.getElementById("t3").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("resultado4").innerText =
      "Por favor, insira todos os lados.";
    return;
  }

  if (a + b > c && a + c > b && b + c > a) {
    let tipo = "";
    if (a === b && b === c) tipo = "Equilátero (todos os lados iguais)";
    else if (a === b || a === c || b === c)
      tipo = "Isósceles (dois lados iguais)";
    else tipo = "Escaleno (todos os lados diferentes)";
    document.getElementById(
      "resultado4"
    ).innerText = `Formam um triângulo ${tipo}`;
  } else {
    document.getElementById("resultado4").innerText =
      "Os valores não formam um triângulo ❌";
  }
}
