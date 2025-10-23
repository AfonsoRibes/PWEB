function maiorNumero() {
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);
  const n3 = parseFloat(document.getElementById("n3").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById("resultado1").innerText =
      "Por favor, insira todos os números.";
    return;
  }

  const maior = Math.max(n1, n2, n3);
  document.getElementById(
    "resultado1"
  ).innerText = `O maior número é: ${maior}`;
}
