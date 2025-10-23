function verificarPalindromo() {
  const textoOriginal = document.getElementById("palavra").value.trim();

  if (!textoOriginal) {
    document.getElementById("resultado3").innerText =
      "Digite uma palavra ou frase.";
    return;
  }

  const texto = textoOriginal.toLowerCase().replace(/\s+/g, "");
  const reverso = texto.split("").reverse().join("");

  const resultado =
    texto === reverso
      ? `"${textoOriginal}" é um palíndromo ✅`
      : `"${textoOriginal}" não é um palíndromo ❌`;

  document.getElementById("resultado3").innerText = resultado;
}
