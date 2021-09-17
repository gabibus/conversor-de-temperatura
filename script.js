function Converter() {
  var elementValue = document.getElementById("valor");
  var value = elementValue.value;
  var dolarValue = parseFloat(value);

  var realValue = dolarValue * 1.8 + 32;
  var realValue = realValue.toFixed(0);
  console.log(realValue);

  var elementConvertedValue = document.getElementById("valorConvertido");
  var valorConvertido = "F " + realValue;
  elementConvertedValue.innerHTML = valorConvertido;
}

function Conver() {
  var elementValue = document.getElementById("valor");
  var value = elementValue.value;
  var dolarValue = parseFloat(value);

  var realValue = dolarValue + 273;
  var realValue = realValue.toFixed(0);
  console.log(realValue);

  var elementConvertedValue = document.getElementById("valorConvertido");
  var valorConvertido = "K " + realValue;
  elementConvertedValue.innerHTML = valorConvertido;
}



