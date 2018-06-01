//window.onload = 
//function introducirNombre() {
 // document.getElementById("user_name").innerHTML = " Bienvenid@ " + document.getElementById("user_name").value;

    
 window.onload = function introducirNombre() {
  document.getElementById("user_name").innerHTML = " Bienvenid@ " + document.getElementById("user_name").value;
  }

document.getElementById("btnOne").addEventListener("click",()=>{
  string = document.getElementById("encriptarTexto").value;
  offset = document.getElementById("offset").value;
 document.getElementById("caja1").innerHTML = cipher.encode(string,offset);

});

document.getElementById("btnTwo").addEventListener("click",()=>{
  string = document.getElementById("encriptarTexto").value;
  offset = document.getElementById("offset").value;
 document.getElementById("caja1").innerHTML = cipher.encode(string,offset);

});
