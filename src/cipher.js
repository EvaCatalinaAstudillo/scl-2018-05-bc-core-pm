window.cipher =({
  encode: (string,offset) => {

    string = document.getElementById("encriptarTexto").value;
    offset = document.getElementById("offset").value;

    let encodeResult = "";

    /* Aqui se guardara el texto ya codificado con el numero de desplazamientos*/
     for(let i = 0; i < string.length; i++) {
        //traducira al número de la letra en el Código ASCII
  	    if(65 <= string.charCodeAt(i) && string.charCodeAt(i) <= 90){
  	        //Condicion para las mayusculas en ASCII
          let msgEncode = (((string.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65);
          encodeResult += String.fromCharCode(msgEncode);
  	     //Agregando la nueva posicion y pasandolo a letra
  	    } else { 
  	       //En el caso de aparecer espacios 
        encodeResult += string.charAt(i)}; //por que es text
  	  }
         return encodeResult;

  },
  
    decode: (string,offset) => {
      string = document.getElementById("encriptarTexto").value;
      offset = document.getElementById("offset").value;
      
       /* Aqui se guardara el texto ya codificado con el numero de desplazamientos*/
         for(let i = 0; i < string.length; i++) {
            //traducira al número de la letra en el Código ASCII
            if(65 <= string.charCodeAt(i) && string.charCodeAt(i) <= 90){
                //Condicion para las mayusculas en ASCII
              let msgEncode = (((string.charCodeAt(i) + 65 - parseInt(offset)) % 26) + 65);
              decodeResult += String.fromCharCode (msgEncode);
             //Agregando la nueva posicion y pasandolo a letra
            } else { 
               //En el caso de aparecer espacios 
            decodeResult += string.charAt(i)}; //por que es texto
          }
             return decodeResult;
             

     }
});