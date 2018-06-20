function Info1(){
  var offset = parseInt(document.getElementById("ingresanumero").value);
  var string = document.getElementById("escribirmensaje").value;
  document.getElementById("mensajeCifrado").innerText= window.cipher.encode(string, offset);
  }
  function Info2(){
  var offset = parseInt(document.getElementById("ingresanumero").value);
  var string = document.getElementById("escribirmensaje").value;
  document.getElementById("mensajedescifrado").innerText= window.cipher.decode(string, offset);
  }


  var Limpiar = document.getElementById("Info1","Info2").value; 