function geraImc(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso/(altura**2)
    document.getElementById("seuImc").innerHTML = "Seu IMC: " + (imc);
}