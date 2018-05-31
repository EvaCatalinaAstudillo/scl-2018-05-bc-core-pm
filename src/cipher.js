window.cipher =({
  encode: (offset,str) => {

    str=document.getElementById("encriptarTexto").value;
    offset=document.getElementById("offset").value;

    /* Aqui se guardara el texto ya codificado con el numero de desplazamientos*/
     for(let i = 0; i < str.length; i++) {
        //traducira al número de la letra en el Código ASCII
  	    if(65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90){
  	        //Condicion para las mayusculas en ASCII
          let msgEncode = (((str.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65);
          encodeResult += String.fromCharCode (msgEncode);
  	     //Agregando la nueva posicion y pasandolo a letra
  	    } else { 
  	       //En el caso de aparecer espacios 
        encodeResult += str.charAt(i)}; //por que es text
  	  }
  	     return encodeResult;
  },
  
    decode: (offset,srt) => {
      srt=document.getElementById("desencriptarTexto").value;
      offset=document.getElementById("offset").value;
      
       /* Aqui se guardara el texto ya codificado con el numero de desplazamientos*/
         for(let i = 0; i < str.length; i++) {
            //traducira al número de la letra en el Código ASCII
            if(65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90){
                //Condicion para las mayusculas en ASCII
              let msgEncode = (((str.charCodeAt(i) + 65 - parseInt(offset)) % 26) + 65);
              decodeResult += String.fromCharCode (msgEncode);
             //Agregando la nueva posicion y pasandolo a letra
            } else { 
               //En el caso de aparecer espacios 
            decodeResult += str.charAt(i)}; //por que es texto
          }
             return decodeResult;

     }
});