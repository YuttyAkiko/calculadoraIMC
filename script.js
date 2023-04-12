function calcIMC() {
    let weight = document.getElementById('input-weight').value;
    let height = document.getElementById('input-height').value;
    let imc = weight / (height * height);

    imc = imc.toFixed(2);

    if(imc <= 18.5) {    
        document.getElementById('value-imc').innerHTML=("Seu IMC é: " + imc);
        document.getElementById('warning').innerHTML=("Você está abaixo do peso!");
    } else if(imc > 18.5 && imc <= 24.9) {
        document.getElementById('value-imc').innerHTML=("Seu IMC é: " + imc);
        document.getElementById('warning').innerHTML=("Parabéns! O seu peso está normal.");
    } else if(imc >= 25 && imc <= 29.9) {
        document.getElementById('value-imc').innerHTML=("Seu IMC é: " + imc);
        document.getElementById('warning').innerHTML=("Você está acima do peso!");
    } else if(imc >= 30 && imc <= 34.9) {
        document.getElementById('value-imc').innerHTML=("Seu IMC é: " + imc);
        document.getElementById('warning').innerHTML=("Cuidado! Obesidade grau I");
    } else if(imc >= 35 && imc <= 39.9) {
        document.getElementById('value-imc').innerHTML=("Seu IMC é: " + imc);
        document.getElementById('warning').innerHTML=("Cuidado! Obesidade grau II (severa)");
    } else if(imc > 40) {
        document.getElementById('value-imc').innerHTML=("Seu IMC é: " + imc);
        document.getElementById('warning').innerHTML=("Cuidado! Obesidade grau III (mórbida)");
    }
}