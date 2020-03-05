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
    var nome = document.getElementById('nome').value;
    var anoNasc = parseInt(document.getElementById('anoNasc').value);
})