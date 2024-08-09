function calculateIMC() {
  /* Valores do IMC */
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || height === 0) {
    document.getElementById("result").innerText =
      "Por favor querido(a), insira valores válidos!.";
    return;
  } /* Resposta caso valores em branco */

  var imc = weight / (height * height); /* Valores e exbição do IMC */
  document.getElementById("result").innerText = "Seu IMC é: " + imc.toFixed(2);
}
