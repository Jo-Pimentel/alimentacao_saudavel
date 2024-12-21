function geraImc(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso/(altura**2)
    document.getElementById("seuImc").innerHTML = "Seu IMC: " + (imc);
}

function comparaImc(){
    let idade = parseInt(document.getElementById("idade").value);

    if(idade<60){
        if(imc<18.5){
            document.getElementById("suaSituacao").innerHTML = "Seu peso é baixo.";
        }else if(imc>=18.5 && imc<25){
            document.getElementById("suaSituacao").innerHTML = "Seu peso está normal.";
        }else if(imc>=25 && imc<30){
            document.getElementById("suaSituacao").innerHTML = "Você tem excesso de peso."
        }else if(imc>=30 && imc<35){
            document.getElementById("suaSituacao").innerHTML = "Você está no primeiro nível de obesidade."
        }else if(imc>=35 && imc<40){
            document.getElementById("suaSituacao").innerHTML = "Você está no segundo nível de obesidade."
        }else{
            document.getElementById("suaSituacao").innerHTML = "Você está no terceiro nível de obesidade(obesidade mórbida)."
        }
    }
    
    else{
        if(imc<22){
            document.getElementById("suaSitucacao").innerHTML = "Seu peso é baixo."
        }else if(imc>=22){
            document.getElementById("suaSituacao").innerHTML = "Seu peso está adequado."
        }else{
            document.getElementById("suaSituacao").innerHTML = "Você está sobrepeso."
        }
    }
}