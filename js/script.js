function comparaImc(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = (peso/(altura**2)).toFixed(1);
    let idade = parseInt(document.getElementById("idade").value);
    
    try{
        if(isNaN(altura) || isNaN(peso)) throw "Um dos valores inseridos não corresponde a um número.";
    }
    catch(erro){
        document.getElementById("suaSituacao").innerHTML = (erro);
    }

    if(idade<60){
        if(imc<18.5){
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e seu peso é baixo.`;
        }
        else if(imc>=18.5 && imc<25){
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e seu peso é adequado.`;
        }
        else if(imc>=25 && imc<35){
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e você está no primeiro nível de obesidade.`;
        }
        else if(imc>=35 && imc<40){
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e você está no segundo nível de obesidade.`;
        }
        else if(imc>=40){
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e você tem obesidade mórbida.`;
        }
        else{
            document.getElementById("suaSituacao").innerHTML = "Um dos valores inseridos não corresponde a um número.";
        }
    }

    else{
        if(imc<22){
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e seu peso é baixo.`;
        }
        else if(imc>=22 && imc<27){
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e seu peso é adequado.`;
        }
        else if(imc>=27){
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e você está sobrepeso.`;
        }
        else{
            document.getElementById("suaSituacao").innerHTML = "Um dos valores inseridos não corresponde a um número.";
        }
    }
}