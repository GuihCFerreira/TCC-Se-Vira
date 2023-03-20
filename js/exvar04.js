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
    pergunta     : " (PUC-RIO) Nos últimos anos, observa-se um aumento crescente do percentual de CO2 na atmosfera.\n" +
        "\n" +
        "Entre outros efeitos, o excesso de CO2 pode contribuir para:",
    alternativaA : "Resfriamento global.",
    alternativaB : "Diminuição da fotossíntese.",
    alternativaC : "Aumento da camada de ozônio.",
    alternativaD : "Aquecimento global.",
    alternativaE : "Diminuição da camada de ozônio.\n",
    correta      : "Aquecimento global",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "(ACAFE) Assinale a alternativa incorreta:",
    alternativaA : "Esôfago, órgão e afôito são acentuadas graficamente.",
    alternativaB : "Bêbado, bálsamo e binóculo são proparoxítonas.\n",
    alternativaC : "Exausto, arroio e ofício são trissilábicas.\n",
    alternativaD : "Lei e lua apresentam ditongo e hiato, respectivamente.\n",
    alternativaE : "Caminho apresenta sete letras e sei fonemas.\n",
    correta      : "Esôfago, órgão e afôito são acentuadas graficamente",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : " (Cesgranrio) Assinale a opção em que os vocábulos obedecem a mesma regra de acentuação gráfica.",
    alternativaA : "Terás / límpida\n",
    alternativaB : "Necessário / verás\n",
    alternativaC : "Dá-lhes / necessário\n",
    alternativaD : "Incêndio / também\n",
    alternativaE : "Extraordinário / incêndio\n",
    correta      : "Extraordinário / incêndio\n",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "(UFN) A diferença entre dois números positivos é 4.207,5 e a diferença entre os logaritmos decimais desses dois números é igual a 2. A razão entre o maior número e o menor vale",
    alternativaA : "42,07",
    alternativaB : "50",
    alternativaC : "63,5",
    alternativaD : "100",
    alternativaE : "8.415",
    correta      : "100",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "(Faap-SP) Em relação à circulação humana, é incorreto afirmar:\n" +
        "\n",
    alternativaA : "Todo vaso que sai do coração é artéria",
    alternativaB : "Todo vaso que chega ao coração é veia.",
    alternativaC : "Todo sangue que chega ao coração é sangue venoso.",
    alternativaD : "O sangue rico em oxigênio é o arterial.\n",
    alternativaE : "O sangue venoso passa do átrio direito para o ventrículo direito.\n",
    correta      : "Todo sangue que chega ao coração é sangue venoso.",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : " (Unifesp) Entre os donatários das capitanias hereditárias (1531-1534), não havia nenhum representante da grande nobreza. Esta ausência indica que:\n" +
        "\n",
    alternativaA : "A nobreza portuguesa, ao contrário da espanhola, não teve perspicácia com relação às riquezas da América.\n",
    alternativaB : "A Coroa portuguesa concedia à burguesia, e não à nobreza, os principais favores e privilégios.",
    alternativaC : "No sistema criado para dar início ao povoamento do Brasil, não havia nenhum resquício de feudalismo.\n",
    alternativaD : "Na América portuguesa, ao contrário do que ocorreu na África e na Ásia, a Coroa foi mais democrática.\n",
    alternativaE : "As possibilidades de bons negócios aqui eram menores do que em Portugal e em outros domínios da Coroa.\n",
    correta      : "As possibilidades de bons negócios aqui eram menores do que em Portugal e em outros domínios da Coroa.\n",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "(UFPI) A uma amostra de 100 ml de NaOH de concentração 20 g/L foi adicionada água suficiente para completar 500 ml. A concentração, em g/L, dessa nova solução é igual a:",
    alternativaA : "2",
    alternativaB : "3",
    alternativaC : "4",
    alternativaD : "5",
    alternativaE : "8",
    correta      : "4",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "(UFES) Uma solução de sulfato de sódio [Na2SO) 1 mol/L é diluída até o dobro do seu volume inicial. A concentração de íons sódio [em mol/L) na solução diluída é:\n" +
        "\n",
    alternativaA : "1,0 · 10-3\n",
    alternativaB : "2,0 · 10-3\n",
    alternativaC : "2,5 · 10-1\n",
    alternativaD : "5,0 · 10-1\n",
    alternativaE : "1,0",
    correta      : "1,0",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "(Cesgranrio) Entre as modificações que ocorreram nas condições ambientais de nosso planeta, algumas foram causadas pela própria atividade dos seres. Os organismos iniciais, ao realizarem a fermentação, determinaram uma grande alteração na atmosfera da Terra primitiva, porque nela introduziram o:",
    alternativaA : "Gás oxigênio.\n",
    alternativaB : "Gás metano.\n",
    alternativaC : "Gás carbônico.\n",
    alternativaD : "Gás nitrogênio.\n",
    alternativaE : "Vapor d'água.\n",
    correta      : "Gás metano.\n",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "(UFBA) O surgimento de organismos com capacidade de utilizar a energia luminosa foi uma inovação importante na história da evolução da vida. Em consequência, houve, na atmosfera, um aumento gradativo na concentração de:",
    alternativaA : "O2",
    alternativaB : "N2",
    alternativaC : "CO2",
    alternativaD : "NH2",
    alternativaE : "CH2",
    correta      : "O2",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "(Uncisal) Uma das preocupações de certa escola filosófica consistiu em provar que as ideias platônicas ou os gêneros e espécies aristotélicos são substâncias reais, criadas pelo intelecto e vontade de Deus, existindo na mente divina. Reflexões dessa natureza foram realizadas majoritariamente no período da história da filosofia:",
    alternativaA : "Pré-socrático.\n",
    alternativaB : "Antigo",
    alternativaC : "Medieval.",
    alternativaD : "Moderno",
    alternativaE : "Contemporâneo",
    correta      : "Medieval",
}
const questoes = [q0, q1, q2, q3, q4, q5, q6,q7,q8,q9,q10,]

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
    aviso.style.color="#00ff00"
    eeros.textContent = "Você errou " +erros
    eeros.style.color="#ff0000"

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