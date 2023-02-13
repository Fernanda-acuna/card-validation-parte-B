const validator = {
  isValid,
  maskify,
};

function isValid(creditCardNumber) {
  const darloVuelta = creditCardNumber.split("").reverse();

  const almacenaNumeros = [];
  for (let i = 0; i < darloVuelta.length; i++) {
    if ((i + 1) % 2 === 0) {
      const numeroMultiplicado = darloVuelta[i] * 2;

      if (numeroMultiplicado >= 10) {
        const numeroSeparado = numeroMultiplicado.toString().split("");

        const primerNumero = parseInt(numeroSeparado[0]); // 1
        const segundoNumero = parseInt(numeroSeparado[1]); // 4
        const resultadoSuma = primerNumero + segundoNumero;
        almacenaNumeros.push(resultadoSuma);
      } else {
        almacenaNumeros.push(numeroMultiplicado);
      }
    } else {
      almacenaNumeros.push(parseInt(darloVuelta[i]));
    }
  }

  const sumaTotal = almacenaNumeros.reduce((anterior, actual) => {
    return anterior + actual;
  });

  if (sumaTotal % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
function maskify(ocultarNumeros) {
  const n = ocultarNumeros.slice(-4);

  let mascara = "";

  for (let i = 0; i < ocultarNumeros.length - 4; i++) {
    mascara = mascara + "#";
  }
  const totalGatitos = mascara + n;

  return totalGatitos;
}

export default validator;
