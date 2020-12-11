function calculoAños(ahorro, maxInteres){
    let costoVida = 1 - ahorro/100
    let fondo = (costoVida * 12)/(maxInteres/100)
    let total = 0
    let años = 0
    if(ahorro !=0){while(total<fondo){
      total = (total + ahorro*12/100)*(1+maxInteres/100)
      años+=1
    }
}
    return años
}

document.getElementById("inputAhorro").addEventListener("submit", res);

function res(e){
  e.preventDefault()
  let ahorro = document.getElementById("ahorro").value;
  let maxInteres = document.getElementById("interes").value;
  
    let años = calculoAños(ahorro, maxInteres)
  let textoResultado = document.getElementById("resultado")
  textoResultado.innerHTML = "Te jubilarás en <strong>"+años+" años</strong>";
}
