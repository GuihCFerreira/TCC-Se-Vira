/* Aula 20 MaiaQuiz  */

globalThis.acertos = 0;
globalThis.erros = 0;

const progressbarfull = document.querySelector('#barrafull');

document.getElementById('nova').disabled = true;
var btn =  document.getElementById('nova');
btn.style.opacity = "0";
let eeros = document.querySelector('#erros');
eeros.style.opacity="0";

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')

let pergunta   = document.querySelector('#pergunta')
let enunciado  = document.querySelector('#enunciado')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
let e = document.querySelector('#e')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    alternativaE : "Alternativa E",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Na pista de testes de uma montadora de automóveis, foram feitas medições do comprimento da pista e do tempo gasto por um certo veículo para percorrê-la. Os valores obtidos foram, respectivamente, 1030,0 m e 25,0 s. Levando-se em conta a precisão das medidas efetuadas, é correto afirmar que a velocidade média desenvolvida pelo citado veículo foi, em m/s, de",
    alternativaA : "400",
    alternativaB : "41",
    alternativaC : "41,2",
    alternativaD : "4120",
    alternativaE : "41200",
    correta      : "41,2",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "O transporte fluvial de cargas é pouco explorado no Brasil, considerando-se nosso vasto conjunto de rios navegáveis. Uma embarcação navega a uma velocidade de 26 nós, medida em relação à água do rio (use 1 nó = 0,5 m/s). A correnteza do rio, por sua vez, tem velocidade aproximadamente constante de 5,0 m/s em relação às margens. Qual é o tempo aproximado de viagem entre duas cidades separadas por uma extensão de 40 km de rio, se o barco navega rio acima, ou seja, contra a correnteza?",
    alternativaA : "2 horas e 13 minutos.",
    alternativaB : "1 hora e 23 minutos.",
    alternativaC : "51 minutos.",
    alternativaD : "37 minutos.",
    alternativaE : "",
    correta      : "1 hora e 23 minutos.",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Um ciclista participará de uma competição e treinará alguns dias da seguinte maneira: no primeiro dia, pedalará 60 km; no segundo dia, a mesma distância do primeiro mais r km; no terceiro dia, a mesma distância do segundo mais r km; e, assim, sucessivamente, sempre pedalando a mesma distância do dia anterior mais r km. No último dia, ele deverá percorrer 180 km, completando o treinamento com um total de 1560 km.A distância r que o ciclista deverá pedalar a mais a cada dia, em km, é",
    alternativaA : "3",
    alternativaB : "7",
    alternativaC : "10",
    alternativaD : "13",
    alternativaE : "20",
    correta      : "10",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Para um principiante em corrida, foi estipulado o seguinte plano de treinamento diário: correr 300 metros no primeiro dia e aumentar 200 metros por dia, a partir do segundo. Para contabilizar seu rendimento, ele utilizará um chip, preso ao seu tênis, para medir a distância percorrida nos treinos. Considere que esse chip armazene, em sua memória, no máximo 9,5 km de corrida/caminhada, devendo ser colocado no momento do início do treino e descartado após esgotar o espaço para reserva de dados.Se esse atleta utilizar o chip desde o primeiro dia de treinamento, por quantos dias consecutivos esse chip poderá armazenar a quilometragem desse plano de treino diário?",
    alternativaA : "7",
    alternativaB : "8",
    alternativaC : "9",
    alternativaD : "12",
    alternativaE : "13",
    correta      : "8",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Uma fábrica de sorvetes utiliza embalagens plásticas no formato de paralelepípedo retangular reto. Internamente, a embalagem tem 10 cm de altura e base de 20 cm por 10 cm. No processo de confecção do sorvete, uma mistura é colocada na embalagem no estado líquido e, quando levada ao congelador, tem seu volume aumentado em 25%, ficando com consistência cremosa. Inicialmente é colocada na embalagem uma mistura sabor chocolate com volume de 1000 cm3 e, após essa mistura ficar cremosa, será adicionada uma mistura sabor morango, de modo que, ao final do processo de congelamento, a embalagem fique completamente preenchida com sorvete, sem transbordar.O volume máximo, em cm3 da mistura sabor morango que deverá ser colocado na embalagem é",
    alternativaA : "450",
    alternativaB : "500",
    alternativaC : "600",
    alternativaD : "750",
    alternativaE : "1000",
    correta      : "600",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Uma fábrica que trabalha com matéria-prima de fibra de vidro possui diversos modelos e tamanhos de caixa-d’água. Um desses modelos é um prisma reto com base quadrada. Com o objetivo de modificar a capacidade de armazenamento de água, está sendo construído um novo modelo, com as medidas das arestas da base duplicadas, sem a alteração da altura, mantendo a mesma forma.Em relação ao antigo modelo, o volume do novo modelo é",
    alternativaA : "oito vezes maior",
    alternativaB : "quatro vezes maior",
    alternativaC : "duas vezes maior",
    alternativaD : "a metade",
    alternativaE : "a quarta parte",
    correta      : "quatro vezes maior",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Uma pessoa comprou um aquário em forma de um paralelepípedo retângulo reto, com 40 cm de comprimento, 15 cm de largura e 20 cm de altura. Chegando em casa, colocou no aquário uma quantidade de água igual à metade de sua capacidade. A seguir, para enfeitá-lo, irá colocar pedrinhas coloridas, de volume igual a 50 cm3 cada, que ficarão totalmente submersas no aquário. Após a colocação das pedrinhas, o nível da água deverá ficar a 6 cm do topo do aquário. O número de pedrinhas a serem colocadas deve ser igual a",
    alternativaA : "48",
    alternativaB : "72",
    alternativaC : "84",
    alternativaD : "120",
    alternativaE : "168",
    correta      : "48",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "A caixa-d'água de uma casa tem a forma de um paralelepípedo reto-retângulo e possui dimensões externas (comprimento, largura e altura) de, respectivamente, 4,0 m, 3,0 m e 2,5 m. É necessária a impermeabilização de todas as faces externas dessa caixa, incluindo a tampa. O fornecedor do impermeabilizante informou ao dono da casa que seu produto é fornecido em galões, de capacidade igual a 4,0 litros. Informou, ainda, que cada litro impermeabiliza uma área de 17.700 cm2 e são necessárias 3 demãos de produto para garantir um bom resultado.Com essas informações, para obter um bom resultado no trabalho de impermeabilização, o dono da casa precisará comprar um número mínimo de galões para a execução desse serviço igual a",
    alternativaA : "9",
    alternativaB : "13",
    alternativaC : "19",
    alternativaD : "25",
    alternativaE : "45",
    correta      : "25",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "A hemoglobina é uma proteína de elevada massa molar, responsável pelo transporte de oxigênio na corrente sanguínea. Esse transporte pode ser representado pela equação química abaixo, em que HB corresponde à hemoglobina. <br>   HB + 4 O2 → HB(O2).   Em um experimento, constatou-se que 1 g de hemoglobina é capaz de transportar 2,24 x 10–4 L de oxigênio molecular com comportamento ideal, nas CNTP. A massa molar, em g/mol, da hemoglobina utilizada no experimento é igual a:",
    alternativaA : "1 x 10*5",
    alternativaB : "2 x 10*5",
    alternativaC : "3 x 10*5 ",
    alternativaD : "4 x 10*5",
    alternativaE : "5 x 10*5",
    correta      : "4 x 10*5",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "As indústrias de cerâmica utilizam argila para produzir artefatos como tijolos e telhas. Uma amostra de argila contém 45% em massa de sílica (SiO2) e 10% em massa de água (H2O). Durante a secagem por aquecimento em uma estufa, somente a umidade é removida. Após o processo de secagem, o teor de sílica na argila seca será de ",
    alternativaA : "45%",
    alternativaB : "50%",
    alternativaC : "55%",
    alternativaD : "90%",
    alternativaE : "100%",
    correta      : "50%",
}


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6,q7,q8,q9,q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD
e.textContent = q1.alternativaE

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')
e.setAttribute('value', '1E')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    e.textContent = questoes[nQuestao].alternativaE
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    e.setAttribute('value', nQuestao+'E')
    progressbarfull.style.width = `${(nQuestao/totalDeQuestoes) * 100}%`
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
    e.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
    e.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        acertos += 1
    } else {
       erros += 1
    }


    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Resultados:')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    window.clearInterval(intervalo);
    eeros.style.opacity="100";
    
    instrucoes.textContent = "Resultados:"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você acertou: " + acertos 
    enunciado.textContent   = "Você conseguiu " + acertos + " " + erros

    aviso.textContent = "Você acertou: " + acertos 
    aviso.style.color="#08b1ff"
    eeros.textContent = "Você errou " +erros
    eeros.style.color="#ff5608"
    
   document.getElementById('nova').disabled = false;
   var btn =  document.getElementById('nova');
btn.style.opacity = "100";


    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""
    e.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')
    e.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
       window.location.href = index.html;
    }, 6000)
}

var intervalo;

function tempo(op) {
	if (op == 1) {
		document.getElementById('parar').style.display = "block";
		document.getElementById('comeca').style.display = "none";
	}
	var s = 1;
	var m = 0;
	var h = 0;
	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById("hora").innerHTML = "0" + h + ":"; else document.getElementById("hora").innerHTML = h + ":";
		if (s < 10) document.getElementById("segundo").innerHTML = "0" + s ; else document.getElementById("segundo").innerHTML = s ;
		if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + ":"; else document.getElementById("minuto").innerHTML = m + ":";
		if (h >= 1 && s > 1 && m >30) document.getElementById("hora").style.color = "#FF0000" ;
		if (s > 1 && m >30) document.getElementById("segundo").style.color = "#FF0000" ; 
		if (m > 30) document.getElementById("minuto").style.color = "#FF0000"; 	
		s++;
	},1000);

	if(s > 10){
		
	}
}


window.onload=tempo;
