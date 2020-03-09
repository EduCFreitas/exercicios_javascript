// Função diárias hotel
document.getElementById('calculaDias').addEventListener('click', function(){
    var dias = parseInt(document.getElementById('dias').value);
    var valorDiaria = 0;
    if(dias>15){
        valorDiaria = 5.5;
    }else if(dias==15){
        valorDiaria = 6;
    }else{
        valorDiaria = 8;
    }
    document.getElementById('respostaHospedagem').value = (`R$${(dias*valorDiaria).toFixed(2)}`);
})

document.getElementById('limpaHotel').addEventListener('click', function(){
    document.getElementById('dias').value = "";
    document.getElementById('respostaHospedagem').value = "";
})

// Função cálculo IMC
document.getElementById('calculaIMC').addEventListener('click', function(){
    var peso = Number(document.getElementById('peso').value);
    var altura = Number(document.getElementById('altura').value);
    var condicao = '';
    var imc = (peso/(altura*altura)).toFixed(2);
    console.log(peso)
    console.log(altura)
    console.log(imc)
    if(imc<17){
        condicao = 'muito abaixo do peso';
    }else if(imc>=17&&imc<18.5){
        condicao = 'abaixo do peso';
    }else if(imc>=18.5&&imc<24.5){
        condicao = 'peso normal';
    }else if(imc>=24.5&&imc<30){
        condicao = 'acima do peso';
    }else if(imc>=30&&imc<35){
        condicao = 'obesidade I';
    }else if(imc>=35&&imc<40){
        condicao = 'obesidade II (severa)';
    }else{
        condicao = 'obesidade III (mórbida)';
    }
    document.getElementById('respostaIMC').value = (`IMC = ${imc}. Condição: ${condicao}`);
})

document.getElementById('limpaIMC').addEventListener('click', function(){
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('respostaIMC').value = "";
})

// Função imposto de renda
document.getElementById('calculaDescontos').addEventListener('click', function(){
    var salario = Number(document.getElementById('salario').value);
    var salarioAnual = salario*12;
    var inss = 0;
    var descontoMensal = 0;
    var impostoRenda = 0;
    var descontoAnual = 0;
    if(salario<=1659.38){
        inss = 8/100;
    }else if(salario<=2765.66){
        inss = 9/100;
    }else{
        inss = 11/100;
    }
    descontoMensal = (salario*inss).toFixed(2);
    if(salarioAnual<=22847.76){
        impostoRenda = 0;
    }else if(salarioAnual<=33919.80){
        impostoRenda = 7.5/100;
    }else if(salarioAnual<=45012.61){
        impostoRenda = 15/100;
    }else if(salarioAnual<=55976.16){
        impostoRenda = 22.5/100;
    }else{
        impostoRenda = 27.5/100;
    }
    descontoAnual = (salarioAnual*impostoRenda).toFixed(2);
    document.getElementById('respostaINSS').value = (`R$${descontoMensal}`);
    document.getElementById('respostaImposto').value = (`R$${descontoAnual}`);
})

document.getElementById('limpaImposto').addEventListener('click', function(){
    document.getElementById('salario').value = "";
    document.getElementById('respostaINSS').value = "";
    document.getElementById('respostaImposto').value = "";
})

// Função pesquisa cinema
document.getElementById('iniciaPesquisa').addEventListener('click', function(){
    var continua = 's';
    var ID = [];
    var voto = '';
    var OP = [];
    var contador = 0;
    var somaIdades = 0;
    var mediaIdades = 0;
    var qtdA = 0;
    var qtdB = 0;
    var qtdC = 0;
    var qtdD = 0;
    var qtdE = 0;
    var porcA = 0;
    var porcB = 0;
    var porcC = 0;
    var porcD = 0;
    var porcE = 0;
    while(continua=='s'){
        ID.push(parseInt(prompt('Informe sua idade:\nIdade 0 termina levantamento de dados.')));
        if(ID[contador]==0){
            continua = 'n';
            continue
        }
        voto = prompt('Informe sua nota para o filme:\nA = Ótimo\nB = Bom\nC = Regular\nD = Ruim\nE = Péssimo');
        voto.toLowerCase();
        OP.push(voto);
        console.log(continua)
        contador++
    }
    for(var i=0; i<ID.length; i++){
        somaIdades+=ID[i];
    }
    mediaIdades=somaIdades/ID.length;
    for(var i=0; i<OP.length; i++){
        if(OP[i]=='a'){
            qtdA++;
        }else if(OP[i]=='b'){
            qtdB++;
        }else if(OP[i]=='c'){
            qtdC++;
        }else if(OP[i]=='d'){
            qtdD++;
        }else if(OP[i]=='e'){
            qtdE++;
        }
    }
    porcA = ((qtdA/OP.length)*100).toFixed(2);
    porcB = ((qtdB/OP.length)*100).toFixed(2);
    porcC = ((qtdC/OP.length)*100).toFixed(2);
    porcD = ((qtdD/OP.length)*100).toFixed(2);
    porcE = ((qtdE/OP.length)*100).toFixed(2);
    alert(`${contador} votos computados`);
    alert(`Média da idade dos votantes: ${mediaIdades}.`);
    alert(`Porcentagem das respostas:\nÓtimo: ${porcA}%\nBom: ${porcB}%\nRegular: ${porcC}%\nRuim: ${porcD}%\nPéssimo: ${porcE}%`);
})

// Função eleições
var votos = [];
document.getElementById('confirmar').addEventListener('click', function(){
    votos.push(parseInt(document.querySelector("input[name='candidatos']:checked").value));
})

document.getElementById('finalizar').addEventListener('click', function(){
    // *************Realizar programação de contagem de votos******************
})