function comparaImc(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = (peso/(altura**2)).toFixed(1);
    let idade = parseInt(document.getElementById("idade").value);
    
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
        else{
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e você tem obesidade mórbida.`;
        }
    }

    else{
        if(imc<22){
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e seu peso é baixo.`;
        }
        else if(imc>=22 && imc<27){
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e seu peso é adequado.`;
        }
        else{
            document.getElementById("suaSituacao").innerHTML = `Seu IMC é ${imc} e você está sobrepeso.`;
        }
    }

    try{
        if(isNaN(altura) || isNaN(peso) || isNaN(idade)) throw "Um dos valores inseridos não corresponde a um número.";
        else if(altura == " " || peso == " " || idade == " ") throw "Um dos campos está vazio, preencha-o.";
    }
    catch(erro){
        document.getElementById("suaSituacao").innerHTML = (erro);
    }
}