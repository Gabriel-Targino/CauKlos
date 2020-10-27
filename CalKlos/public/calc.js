document.getElementById("salvar").onclick = function(){
    let resultado
     var select = document.getElementById('sinal');
       var text = select.options[select.selectedIndex].text;
          resultado = (text);
        let val1 = document.getElementById("val1").value;
        val1 = Number(val1)
        let val2 = document.getElementById("val2").value;
        val2 = Number(val2)
        if (text === "*"){
          resultado = (val1*val2)
      }
      else if (text === "+"){
          resultado = (val1+val2)
      }
      else if (text === "/"){
          resultado = (val1 / val2)
      }
      else if (text === "-"){
          resultado = (val1-val2)
      }
      else{
          resultado = ("textração Inexistente")
      }
      document.getElementById("resultado").value= resultado
     }
       // Português
  
  
  
  /*
  function calculadora (val1,val2,val2){
      if (text === "*"){
          resultado = (val1*val2)
      }
      else if (text === "+"){
          resultado = (val1+val2)
      }
      else if (text === "/"){
          resultado = (val1/val2)
      }
      else if (text === "-"){
          resultado = (val1-val2)
      }
      else{
          resultado = ("textração Inexistente")
      }
  }
  
  
  module.exports = calculadora;
  */