function ordemCrescente() {
  const numeros = [
    parseFloat(document.getElementById("c1").value),
    parseFloat(document.getElementById("c2").value),
    parseFloat(document.getElementById("c3").value),
  ];

  if (numeros.some(isNaN)) {
    document.getElementById("resultado2").innerText =
      "Por favor, insira todos os números.";
    return;
  }

  numeros.sort((a, b) => a - b);
  document.getElementById(
    "resultado2"
  ).innerText = `Ordem crescente: ${numeros.join(", ")}`;
}
