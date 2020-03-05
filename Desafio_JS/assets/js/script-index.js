// Texto inserido por JS no segundo parágrafo do loren
var textoJS = document.getElementById('textoJS');
textoJS.textContent="Texto inserido através do JavaScript"



// Função para trocar nome no botão
var botao1 = document.querySelector('#nome'); // Botão onde o nome será trocado
function atualizaNome(){
    var nome = prompt("Informe o nome:");
    botao1.textContent=`Olá, ${nome}, tudo jóia?`
}

// Função para criar parágrafos
function criaParagrafo(){
    // Guarda a criação do parágrafo
    var cria = document.createElement('textarea');
    cria.textContent = 'Section com parágrafo criado ao apertar o botão.';
    // Seleciona ponto de inserção da section e a insere
    var caixa = document.querySelector('#caixa').appendChild(cria);
}

// Funções para abrir e fechar popup
function abrir(){
    document.getElementById('popup').style.display = 'block';
    data();
}
function fechar(){
    document.getElementById('popup').style.display = 'none';
}
// Função para adquirir data para a popup
function data(){
    var hoje = new Date();
    var hora = hoje.getHours();
    var minuto = hoje.getMinutes();
    var saudacao = "";
    if(hora>6&&hora<12){
        saudacao = `Bom dia! São ${hora} horas e ${minuto} minutos.`
    }else if(hora>=12&&hora<18){
        saudacao = `Boa tarde! São ${hora} horas e ${minuto} minutos.`
    }else{
        saudacao = `Boa noite! São ${hora} horas e ${minuto} minutos.`
    }
    document.getElementById('exibe-data').textContent = saudacao;
}

// Função para seleção do humor
function mensagemHumor(){
    var opcaoHumor = document.getElementById('humor').value;
    var mensagemFinal = document.getElementById('mensagemFinal');
    if(opcaoHumor == 1){
        mensagemFinal.textContent="Que bom! Continue assim!";
    }else if(opcaoHumor == 2){
        mensagemFinal.textContent="Ok, espero que continue assim ou melhore";
    }else if(opcaoHumor == 3){
        mensagemFinal.textContent="Poxa, que pena. Espero que melhore";
    }else{
        mensagemFinal.textContent="Bom dia! A opção selecionada não é válida.";
    }
}

// Funções de manipulação do array
var cores = ['azul', 'verde', 'amarelo', 'vermelho'];
function todasCores(){
    console.log(cores);
}

function primeiraCor(){
    console.log(cores[0]);
}

function tamanhoArray(){
    console.log(cores.length);
}

function adicionaCor(){
    cores.push(prompt("Adicione uma cor ao array:"));
    console.log(cores);
}

function encontraCor(){
    var corEncontrada = cores.indexOf(prompt("Qual a cor a ser procurada?"))
    console.log(`O índice da cor procurada é ${corEncontrada}`);
}

function removeCor(){
    cores.splice(cores.indexOf(prompt("Informe cor a ser removida:")), 1);
    console.log(cores);
}

function mostraIndices(){
    for(var i=0; i<cores.length; i++){
        console.log(`A cor ${cores[i]} está no índice ${i}`)
    }
}

// Funções de tabuada
var cont = 0;
var resultado = "";
function tabuadaWhile(){
    var num = prompt("Informe número para cálculo de tabuada:");
    while(cont<=10){
        resultado += `${num} x ${cont} = ${num*cont}<br>`;
        cont++
    }
    document.getElementById("tabuada1").innerHTML = resultado;
}
function tabuadaDoWhile(){
    var num = prompt("Informe número para cálculo de tabuada:");
    do{
        resultado += `${num} x ${cont} = ${num*cont}<br>`;
        cont++
    }while(cont<=10)
    document.getElementById("tabuada2").innerHTML = resultado;
}

// Função soma
document.getElementById('numero2').addEventListener('blur', function(){
    n1 = parseInt(document.getElementById("numero1").value);
    n2 = parseInt(document.getElementById("numero2").value);
    document.getElementById("resultado-soma").innerHTML = n1+n2;
})

// Funções operações matemáticas
document.getElementById('adiciona').addEventListener('click', function(){
    var primeiro=parseInt(document.getElementById("num").value);
    var segundo=[0,1,2,3,4,5,6,7,8,9,10];
    document.getElementById('resultado').innerHTML='';
    for(var i=0; i<segundo.length; i++){
        document.getElementById('resultado').innerHTML+=`${primeiro} + ${segundo[i]} = ${primeiro+segundo[i]}<br>`;
    }
})
document.getElementById('subtrai').addEventListener('click', function(){
    var primeiro=parseInt(document.getElementById("num").value);
    var segundo=[0,1,2,3,4,5,6,7,8,9,10];
    document.getElementById('resultado').innerHTML='';
    for(var i=0; i<segundo.length; i++){
        document.getElementById('resultado').innerHTML+=`${primeiro} - ${segundo[i]} = ${primeiro-segundo[i]}<br>`;
    }
})
document.getElementById('multiplica').addEventListener('click', function(){
    var primeiro=parseInt(document.getElementById("num").value);
    var segundo=[0,1,2,3,4,5,6,7,8,9,10];
    document.getElementById('resultado').innerHTML='';
    for(var i=0; i<segundo.length; i++){
        document.getElementById('resultado').innerHTML+=`${primeiro} x ${segundo[i]} = ${primeiro*segundo[i]}<br>`;
    }
})
document.getElementById('divide').addEventListener('click', function(){
    var primeiro=parseInt(document.getElementById("num").value);
    var segundo=[0,1,2,3,4,5,6,7,8,9,10];
    document.getElementById('resultado').innerHTML='';
    for(var i=0; i<segundo.length; i++){
        if(segundo[i]==0){
            document.getElementById('resultado').innerHTML+=`${primeiro} / ${segundo[i]} = Impossível dividir por 0<br>`;
        }else{
            document.getElementById('resultado').innerHTML+=`${primeiro} / ${segundo[i]} = ${primeiro/segundo[i]}<br>`;
        }
    }
})

// Funções de seleção
function pegaSelecao(){
    var selecionado;
    var entrada = document.getElementsByName('opcao');
    for(var i =0; i<entrada.length; i++){
        if(entrada[i].checked){
            selecionado = entrada[i].value;
        }
    }
    console.log(`Opção selecionada: ${selecionado}`);
}