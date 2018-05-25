function introducirNombre() {
    document.getElementById("name").innerHTML = " Bienvenid@ " + document.getElementById("user_name").value;
  }
  //funcion ingresada para personalizar registro.
  
  
  const abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    desplazamiento = 3,
    boton_de_cifrar = document.getElementById('cifrar'),
    boton_de_descifrar = document.getElementById('descifrar'),
    entrada = document.getElementById('input'),
    salida = document.getElementById('output');
  
  function cifrar(input, output, desplazamiento) {
    let resultado = '';
  }
  //Identificamos el bucle
  
  function desplazamiento(const index = 0; index < abc.length; index++) { }
  
  //const index: donde parte:A
  //index<abc.length: hasta donde deseo llegar
  //index: irá sumando de a uno.
  
  formula:(abc.toUpperCase().charCodeAt(index) - 65 + 33) % 26 + 65;
  //el -65 es la primera letra del abc: A 
  //33 numero fijo
  // 26 es el total de letras en el abc 
  // +65 es el ASCII que es la letra cifrada
  //charCodeAt() es ubicar la posicion de letra en numero 
  //toUpperCase dejar todo en mayuscula y evitar confusion
  
  
  const cifrada = String.fromCharCode(formula);
        // String.fromCharCode() es para convertir el numero es letra
        // Osea va convertir el charCodeAt         
        //de arriba que me va dar numeros , en letras 
  
       
      cifrada+= cifrado; // estoy guardando el contenido de mi variable cifrado en la variable cifradas y como esta dentro del for va guardaslas todas
        
  
      cajacifrada.innerHTML = cifradas; 
      //caja cifrada es un div  en el html , con innerHTML estoy diciendo que se muestre dentro de ese div
        console.log(cifrada);
      //console.log  muestra las letras cifradas en la consola
    