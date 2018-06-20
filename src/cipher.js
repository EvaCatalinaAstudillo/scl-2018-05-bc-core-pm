window.cipher = {
  encode:  (string, offset)=> {
    var mensajeCifrado = " ";
    for (index = 0; index < string.length; index++) {
      string = string.toUpperCase();
      var getIndexACSII = string.charCodeAt(index);
      var formulaACSII = (getIndexACSII - 65 + offset) % 26 + 65;
      var cipherText = String.fromCharCode(formulaACSII);
      mensajeCifrado += cipherText;
    }
    return mensajeCifrado;
  },

  decode: (string, offset) => {
    var mensajeCifrado = " ";
    for (index = 0; index < string.length; index++) {
      string = string.toUpperCase();
      var getIndexACSII = string.charCodeAt(index);
      var formulaACSII = (getIndexACSII + 65 - offset) % 26 + 65;
      var cipherText = String.fromCharCode(formulaACSII);
      mensajeCifrado += cipherText;
    }
    return mensajeCifrado;
  }
}