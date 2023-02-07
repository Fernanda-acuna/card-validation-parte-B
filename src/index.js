import validator from './validator.js';
//intentando hacer un eventlistener
const botonValidar= document.getElementById("botonValidar")
botonValidar.addEventListener("click", function (){
  const textoIngresado = document.getElementById("cardnumber").value;
   
  if (textoIngresado.length === 0) {
    alert("Debe ingresar el número de su tarjeta");
    return ;

  }
  //cómo conectar esta función con el otro archivo js
  // validator.isValid(textoIngresado);
  const resultado = validator.isValid(textoIngresado);
  const resultado2= validator.maskify(textoIngresado);
  //utilizamos esta variable para guardar el maskify y agregarlo a la tarjeta valida-invalida 
  if (resultado === true) {

    document.getElementById('result').innerHTML = "tarjeta " + resultado2 + " válida";
    //recuerda agregar el espacio en las comillas para que no quede pegado el texto
  }
  else {
    document.getElementById('result').innerHTML = "tarjeta " + resultado2 + " inválida";
      
    //console.log(result)
  }
})




