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
    pergunta     : "(FATEC) Belo Horizonte e Florianópolis apresentam praticamente a mesma temperatura média anual (BH = 20,8ºC e F = 20,6ºC). com base na localização dessas cidades brasileiras, pode-se afirmar que:",
    alternativaA : "Se encontram no mesmo tipo climático;",
    alternativaB : "Se acham na mesma latitude, portanto recebem a mesma quantidade de radiação solar;",
    alternativaC : "Estão submetidas à ação das mesmas massas de ar",
    alternativaD : "Se encontram em latitudes diferentes, mas a maior altitude de Belo Horizonte torna a temperatura média próxima à de Florianópolis;",
    alternativaE : "Não há explicação para o fato, pois Florianópolis, estando em latitude maior, deveria apresentar temperatura mais baixa.",
    correta      : "Se encontram em latitudes diferentes, mas a maior altitude de Belo Horizonte torna a temperatura média próxima à de Florianópolis",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Belo horizonte e Florianópolis apresentam praticamente a mesma temperatura média anual (BH-20.8°C, F-20.6°C) com base nessas localização dessas cidades brasileiras. Pode-se afirmar que",
    alternativaA : "Porque possuem o mesmo tipo de clima,e em ambas os solos foram originalmente recobertos por matas;",
    alternativaB : "Porque estão na mesma longitude, predominando os morros recobertos por vegetação no Rio de Janeiro e as dunas em Natal;",
    alternativaC : "Porque estão ambas no litoral e as duas sofrem a inﬂuência amenizadora do oceano Atlântico;",
    alternativaD : "Mas têm climas diferentes, porque, estando em latitudes distintas, são submetidas a massas de ar de origens diferentes;",
    alternativaE : "Mas têm climas diferentes, porque a cidade do Rio de Janeiro tem temperaturas elevadas, durante o ano todo, enquanto em Natal as temperaturas máximas estão entre abril e setembro.",
    correta      : "Mas têm climas diferentes, porque, estando em latitudes distintas, são submetidas a massas de ar de origens diferentes;",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Natal (RN) e Rio de Janeiro (RJ) apresentam temperaturas médias anuais semelhantes:\n",
    alternativaA : "O clima equatorial apresenta elevados índices pluviométricos e temperaturas médias acima de 22 °C.",
    alternativaB : "O clima da costa oriental do Nordeste apresenta chuvas mais abundantes nos meses de inverno.",
    alternativaC : "O clima tropical com chuvas de verão e invernos secos ocorre em grande parte do território brasileiro.",
    alternativaD : "O clima subtropical apresenta pequenas amplitudes térmicas e chuvas concentradas no verão.",
    alternativaE : "O clima semiárido apresenta baixos índices pluviométricos e grande irregularidade na distribuição das chuvas.",
    correta      : "O clima subtropical apresenta pequenas amplitudes térmicas e chuvas concentradas no verão.",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "(Cesgranrio) Assinale a opção que correlaciona corretamente tipo de clima / região do Brasil / características do clima, respectivamente:",
    alternativaA : "Equatorial / toda a Amazônia / sem estação seca e chuvas acima de 3 000mm, estações individualizadas.",
    alternativaB : "Tropical com estação seca / planalto Central / seca na primavera e verão, chuvas abaixo de 1 000mm.",
    alternativaC : "Semiárido / Alto vale do São Francisco / chuvas de outono-inverno, em torno de 600m.",
    alternativaD : "Tropical de altitude / áreas mais elevadas do planalto Central / sem estação seca, temperaturas médias acima de 25°C e verões muito quentes.",
    alternativaE : "Subtropical / maior parte da região Sul / chuvas bem distribuídas, médias térmicas abaixo de 25°C e estações mais acentuadas.",
    correta      : "Subtropical / maior parte da região Sul / chuvas bem distribuídas, médias térmicas abaixo de 25°C e estações mais acentuadas.",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : " (UNICENTRO) Sobre estética, é correto afirmar que ela é",
    alternativaA : "Uma teoria do belo.",
    alternativaB : "Uma ciência lógica.",
    alternativaC : "Uma atividade natural.",
    alternativaD : "Um elemento matemático.",
    alternativaE : "Uma parte da ciência política.",
    correta      : "Uma teoria do belo.",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Kant definiu a Estética como sendo ciência. E completando, Alexander Brumgarten a definiu como sendo a teoria do belo e das suas manifestações através da arte. Como ciência e teoria do belo, a Estética pretende alcançar um tipo específico de conhecimento que é aquele captado",
    alternativaA : "Pela lógica.",
    alternativaB : "Pela razão.",
    alternativaC : "Pela alma.",
    alternativaD : "Pelos sentidos.",
    alternativaE : "Pela emoção.",
    correta      : "Pelos sentidos.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "(UFSM) Filósofos utilizam frutas (maçãs, abacaxis, tomates) para ilustrar suas teorias. Numa maçã, por exemplo, alguns filósofos afirmaram que é possível separar propriedades ou qualidades secundárias (cor, cheiro, doçura) de qualidades primárias (como a extensão). Essas últimas servem de suporte às qualidades secundárias. Na metafísica tradicional, esse elemento que sustenta as qualidades secundárias é o(a)",
    alternativaA : "Substância.",
    alternativaB : "Acidente.",
    alternativaC : "Causalidade.",
    alternativaD : "Racionalidade.",
    alternativaE : "Necessidade.",
    correta      : "Substância.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "O objetivo de tomar Paris marchando em direção ao Oeste era, para Hitler, uma forma de consolidar sua liderança no continente. Com esse intuito, entre abril ejunho de 1940, ele invadiu a Dinamarca, a Noruega, a Bélgica e a Holanda. As tropas francesas se posicionaram na Linha Maginot, uma linha de defesa com trincheiras, na tentativa de conter a invasão alemã. Para a Alemanha, o resultado dessa invasão foi",
    alternativaA : "Ocupação de todo o território francês, usando-o como base para a conquista da Suíça e da Espanha durante a segunda fase da guerra.",
    alternativaB : "A tomada do território francês, que foi então usado como base para a ocupação nazista da África do Norte, durante a guerra de trincheiras.",
    alternativaC : "A posse de apenas parte do território, devido à resistência armada do exército francês na Linha Maginot.",
    alternativaD : "A vitória parcial, já que, após o avanço inicial, teve de recuar, devido à resistência dos blindados do general De Gaulle, em 1940.",
    alternativaE : "A vitória militar, com ocupação de parte da França, enquanto outra parte ficou sob controle do governo colaboracionista francês.",
    correta      : "A vitória militar, com ocupação de parte da França, enquanto outra parte ficou sob controle do governo colaboracionista francês.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "A fome não é um problema técnico, pois ela não se deve à falta de alimentos, isso porque a fome convive hoje com as condições materiais para resolvê-la.",
    alternativaA : "Escala de produtividade regional.",
    alternativaB : "Padrão de distribuição de renda.",
    alternativaC : "Dificuldade de armazenamento de grãos",
    alternativaD : "Crescimento da população mundial.",
    alternativaE : "Crescimento da população mundial.",
    correta      : "Padrão de distribuição de renda.",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "As ruı́nas do povoado de Canudos, no sertão norte da Bahia, além de significativas para a identidade cultural, dessa região, são úteis às investigações sobre a Guerra de Canudos e o modo de vida dos antigos revoltosos. Essas ruı́nas foram reconhecidas como patrimônio cultural material pelo Iphan (Instituto do Patrimônio Histórico e Artı́stico Nacional) porque reúnem um conjunto de",
    alternativaA : "Objetos arqueológicos e paisagı́sticos.",
    alternativaB : "Acervos museológicos e bibliográficos.",
    alternativaC : "Expressões e técnicas de uma sociedade extinta.",
    alternativaD : "Práticas e representações de uma sociedade.",
    alternativaE : "Expressões e técnicas de uma sociedade extinta.",
    correta      : "Objetos arqueológicos e paisagı́sticos.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "(FGV) A instalação da Corte portuguesa no Rio de Janeiro, em 1808, representou uma alternativa para um contexto de crise política na Metrópole e a possibilidade de implementar as bases para a formação de um império luso-brasileiro na América. Das alternativas abaixo, assinale aquela que NÃO diz respeito ao período joanino.\n" +
        "\n",
    alternativaA : "Ocupação da Guiana Francesa e da Província Cisplatina e sua incorporação ao Império Português, como resultado da política externa agressiva adotada por D. João.",
    alternativaB : "Abertura dos portos da Colônia às nações aliadas de Portugal, como a Inglaterra, dando início a uma fase de livre-comércio.",
    alternativaC : "Ocorreu uma inversão da relação entre metrópole e colônia, já que a sede política do império passava do centro para a periferia.",
    alternativaD : "Ocorreu uma inversão da relação entre metrópole e colônia, já que a sede política do império passava do centro para a periferia.",
    alternativaE : "Ocorreu a Revolução Pernambucana de1817, que defendia o separatismo com o governo republicano e a manutenção da escravidão.",
    correta      : "Ocorreu uma inversão da relação entre metrópole e colônia, já que a sede política do império passava do centro para a periferia.",
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
    aviso.style.color="#008b00"
    eeros.textContent = "Você errou " +erros
    eeros.style.color="#8b0000"

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
