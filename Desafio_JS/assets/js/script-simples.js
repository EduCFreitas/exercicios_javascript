// Funções cálculo das áreas
// Retângulo
document.getElementById('retangulo').addEventListener('click', function(){
    var base = Number(prompt("Informe o valor da base do retângulo:"));
    var altura = Number(prompt("Informe o valor da base do retângulo:"));
    alert(`A área do retângulo de base ${base} e altura ${altura} é: ${base*altura}`)
})
// Círculo
document.getElementById('circulo').addEventListener('click', function(){
    var raio = Number(prompt("Informe o valor do raio do círculo:"));
    alert(`A área do círculo de reio ${raio} é: ${(3.14*raio*2).toFixed(3)}`);
})

// Função calculadora de idade
document.getElementById('idades').addEventListener('click', function(){
    var data = new Date;
    var anoAtual = data.getFullYear();
    var nome = document.getElementById('nome').value;
    var anoNasc = parseInt(document.getElementById('anoNasc').value);
    var idadeAtual = anoAtual - anoNasc;
    var idade2050 = 2050 - anoNasc;
    console.log(data)
    console.log(anoAtual)
    console.log(nome)
    console.log(anoNasc)
    console.log(idadeAtual)
    console.log(idade2050)
    document.getElementById('respostaIdade').innerHTML = `${nome}, sua idade atual é ${idadeAtual}.`;
    document.getElementById('idade2050').value = `${nome}, em 2050 você terá ${idade2050} anos.`
})

// Função calcular média
document.getElementById('calculaMedia').addEventListener('click', function(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var n3 = parseFloat(document.getElementById('n3').value);
    var n4 = parseFloat(document.getElementById('n4').value);
    if(isNaN(n1)){
        n1=0;
    }
    if(isNaN(n2)){
        n2=0;
    }
    if(isNaN(n3)){
        n3=0;
    }
    if(isNaN(n4)){
        n4=0;
    }
    document.getElementById('media').value = ((n1+n2+n3+n4)/4).toFixed(1);
})

// Função aumento de salário
document.getElementById('calculaSalario').addEventListener('click', function(){
    var salarioAtual = parseInt(document.getElementById('salario').value);
    var reajuste = Number(document.getElementById('reajuste').value);
    var novoSalario = salarioAtual+(salarioAtual*(reajuste/100));
    alert(`O salário de R$${salarioAtual},00 foi reajustado em ${reajuste}% para o valor de R$${novoSalario},00`);
    document.getElementById('novoSalario').value = (`Salário reajustado para R$${novoSalario},00`);
})

// Função venda de ingresso
document.getElementById('calculaIngressos').addEventListener('click', function(){
    var custo = Number(document.getElementById('custo').value);
    var qtdIngresso =parseInt(document.getElementById('qtdIngresso').value);
    document.getElementById('resultadoIngresso').innerHTML = `Você precisa vender ${(custo/qtdIngresso).toFixed(0)} para cobrir seu custo.`
})

// Função consumo combustível
document.getElementById('calculaConsumo').addEventListener('click', function(){
    var distancia = Number(document.getElementById('distancia').value);
    var combustivelGasto = Number(document.getElementById('comb').value);
    document.getElementById('respostaConsumo').value = (`O consumo foi de ${distancia/combustivelGasto}km/l.`);
})

// Função correção monetária
document.getElementById('calculaRendimento').addEventListener('click', function(){
    
})