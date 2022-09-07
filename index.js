function ConverterReais() {
  var valorReais = document.getElementById("valor").value;
  if (valorReais == "" || valorReais <= "0") {
    alert("Verifique os dados!");
  } else {
    var cotaDolar = 0.19;
    var cotaBitcoin = 0.00005028;
    var converter = (parseFloat(valorReais) * cotaDolar).toFixed(2);
    var valorConvertido = document.getElementById("valorConvertido");
    var valorBitcoin = (converter * cotaBitcoin).toFixed(7);
    valorConvertido.style.color = "#000F2C";
    valorConvertido.innerHTML = `O valor em dólar é: U$ ${converter}<br> O valor em bitcoin é: BTC ${valorBitcoin}`;
    valorConvertido.style.backgroundColor = "white";
    valorConvertido.style.boxShadow = "1px 1px 5px black";
    valorConvertido.style.borderRadius = "4px";
    valorConvertido.style.padding = "10px";
    valorConvertido.style.transition = "all 0.3s";
  }
}

function ConverterEuro() {
  var valorReais = document.getElementById("valor").value;
  if (valorReais == "" || valorReais <= "0") {
    alert("Verifique os dados!");
  } else {
    var cotaEuro = 0.1934;
    var cotaBitcoin = 0.00005;
    var converter = (parseFloat(valorReais) * cotaEuro).toFixed(2);
    var valorConvertido = document.getElementById("valorConvertido");
    var valorBitcoin = (converter * cotaBitcoin).toFixed(7);
    valorConvertido.style.color = "#000F2C";
    valorConvertido.innerHTML = `O valor em euro é: € ${converter}<br> O valor em bitcoin é: BTC ${valorBitcoin}`;
    valorConvertido.style.backgroundColor = "white";
    valorConvertido.style.boxShadow = "1px 1px 5px black";
    valorConvertido.style.borderRadius = "4px";
    valorConvertido.style.padding = "10px";
    valorConvertido.style.transition = "all 0.3s";
  }
}
