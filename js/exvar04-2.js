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
    pergunta     : "(Fuvest – SP) Entre as mensagens abaixo, a única que está de acordo com a norma escrita culta é:\n" +
        "\n",
    alternativaA : " Confira as receitas incríveis preparadas para você. Clica aqui!",
    alternativaB : "Mostra que você tem bom coração. Contribua para a campanha do agasalho!",
    alternativaC : "Cura-te a ti mesmo e seja feliz!",
    alternativaD : "Não subestime o consumidor. Venda produtos de boa procedência.",
    alternativaE : " Em caso de acidente, não siga viagem. Pede o apoio de um policial.",
    correta      : "Não subestime o consumidor. Venda produtos de boa procedência.",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "(Enem PPL 2015) Sabe-se o que era a mata do Nordeste, antes da monocultura da cana: um arvoredo tanto e tamanho e tão basto e de tantas prumagens que não podia homem dar conta. O canavial desvirginou todo esse mato grosso do modo mais cru: pela queimada. A fogo é que foram se abrindo no mato virgem os claros por onde se estendeu o canavial civilizador, mas ao mesmo tempo devastador.",
    alternativaA : "Demanda de trabalho, que favorecia a escravidão.",
    alternativaB : "Modelo civilizatório, que acarretou danos ambientais.",
    alternativaC : "Rudimento das técnicas produtivas, que eram ineficientes.",
    alternativaD : "Natureza da atividade econômica, que concentrou riqueza.",
    alternativaE : "Predomínio da monocultura, que era voltada para exportação.",
    correta      : "Modelo civilizatório, que acarretou danos ambientais.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "(Fuvest) Os portugueses chegaram ao território, depois denominado Brasil, em 1500, mas a administração da terra só foi organizada em 1549. Isso ocorreu porque, até então,",
    alternativaA : "Os índios ferozes trucidavam os portugueses que se aventurassem a desembarcar no litoral, impedindo assim a criação de núcleos de povoamento.",
    alternativaB : "A Espanha, com base no Tratado de Tordesilhas, impedia a presença portuguesa nas Américas, policiando a costa com expedições bélicas.\n",
    alternativaC : "As forças e atenções dos portugueses convergiam para o Oriente, onde vitórias militares garantiam relações comerciais lucrativas.\n",
    alternativaD : "Os franceses, aliados dos espanhóis, controlavam as tribos indígenas ao longo do litoral bem como as feitorias da costa sul-atlântica.\n",
    alternativaE : "A população de Portugal era pouco numerosa, impossibilitando o recrutamento de funcionários administrativos.\n",
    correta      : "As forças e atenções dos portugueses convergiam para o Oriente, onde vitórias militares garantiam relações comerciais lucrativas.",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "(UEG-GO) A Grécia foi o berço da filosofia, destacando-se pela presença dos filósofos que pensaram o mundo em que viveram utilizando a ferramenta da razão. O período da história grega e o filósofo que afirmou que “só sei que nada sei” foram respectivamente o",
    alternativaA : "Período pós-clássico e Sócrates.",
    alternativaB : "Período helenístico e Platão.",
    alternativaC : "Período clássico e Sócrates.",
    alternativaD : "Período clássico e Platão.",

    correta      : "Período clássico e Sócrates.",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "(UNESP) Alguns historiadores da Ciência atribuem ao filósofo pré-socrático Empédocles a Teoria dos Quatro Elementos. Segundo essa teoria, a constituição de tudo o que existe no mundo e sua transformação se dariam a partir de quatro elementos básicos: fogo, ar, água e terra. Hoje, a química tem outra definição para elemento: o conjunto de átomos que possuem o mesmo número atômico. Portanto, definir a água como elemento está quimicamente incorreto, porque trata-se de",
    alternativaA : "Uma mistura de três elementos.",
    alternativaB : "Uma substância simples com dois elementos.\n",
    alternativaC : "Uma substância composta com três elementos.\n",
    alternativaD : "Uma mistura de dois elementos.\n",
    alternativaE : "Uma substância composta com dois elementos.\n",
    correta      : "Uma substância composta com dois elementos.\n",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "(FMU-SP) O Pacto de Varsóvia, criado em 1955 e extinto em 1991, teve como principal objetivo:",
    alternativaA : "Reunir os países socialistas como a Alemanha Oriental e a Alemanha Ocidental contra a OTAN.",
    alternativaB : "Consolidar a influência soviética sobre os países da Europa Oriental.",
    alternativaC : "Conter a influência soviética sobre os países da Europa Oriental.",
    alternativaD : "Conter a influência soviética sobre os países da Europa Oriental.",
    alternativaE : "Consolidar a influência capitalista na Europa Oriental.",
    correta      : "Consolidar a influência soviética sobre os países da Europa Oriental.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "(UEA) Os gases N2, O2, Ar, CO2, H2O e Ne estão, entre outros, presentes no ar atmosférico. Desses seis gases, são classificados como substâncias químicas simples",
    alternativaA : "Dois, apenas.",
    alternativaB : "Três, apenas.\n",
    alternativaC : "Quatro, apenas.\n",
    alternativaD : "Cinco, apenas.\n",
    alternativaE : "Segunda",
    correta      : "Quatro, apenas.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "(UNCISAL) A história da sociologia começa com Augusto Comte, mas ele se beneficiou dos conhecimentos acumulados, previamente, por outros pensadores. Quais foram os pensadores que colaboraram com Comte na formulação da sociologia?",
    alternativaA : "Bourdieu, Weber, Marx.\n",
    alternativaB : "Durkheim, Mannheim, Montesquieu.\n",
    alternativaC : "Condorcet, Descartes, Bourdieu.\n",
    alternativaD : "Montesquieu, Condorcet, Saint-Simon.\n",
    alternativaE : "Montesquieu, Bourdieu, Jean-Paul Sartre.\n",
    correta      : "Montesquieu, Condorcet, Saint-Simon.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "(Enem PPL 2019) A cidade\n" +
        "\n" +
        "E a situação sempre mais ou menos,\n" +
        "\n" +
        "Sempre uns com mais e outros com menos.\n" +
        "\n" +
        "A cidade não para, a cidade só cresce" +
        "A letra da canção do início dos anos 1990 destaca uma questão presente nos centros urbanos brasileiros que se refere ao(à)",
    alternativaA : "Déficit de transporte público.",
    alternativaB : "Estagnação do setor terciário.\n",
    alternativaC : "Controle das taxas de natalidade.",
    alternativaD : "Elevação dos índices de criminalidade.",
    alternativaE : "Desigualdade da distribuição de renda.",
    correta      : "Desigualdade da distribuição de renda.",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "(UFMG)Nas mais importantes novelas de cavalaria que circularam na Europa medieval, principalmente como propaganda das Cruzadas, sobressaem-se:",
    alternativaA : "As namoradas sofredoras, que fazem bailar para atrair o namorado ausente.",
    alternativaB : "Os cavaleiros medievais, concebidos segundo os padrões da Igreja Católica (por quem lutam).\n",
    alternativaC : "As namorada castas, fiéis, dedicadas, dispostas a qualquer sacrifício para ir ao encontro do amado.\n",
    alternativaD : "Os namorados castos, fiéis, dedicados que, entretanto, são traídos pelas namoradas sedutoras.\n",
    alternativaE : "Os cavaleiros sarracenos, eslavos e infiéis, inimigos da fé cristã.\n",
    correta      : "Os cavaleiros medievais, concebidos segundo os padrões da Igreja Católica (por quem lutam).",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "(Fuvest) Após chover na cidade de São Paulo, as águas da chuva descerão o rio Tietê até o rio Paraná, percorrendo cerca de 1.000km. Sendo de 4km/h a velocidade média das águas, o percurso mencionado será cumprido pelas águas da chuva em aproximadamente:",
    alternativaA : "30 dias\n",
    alternativaB : "10 dias\n",
    alternativaC : "25 dias\n",
    alternativaD : "2 dias\n",
    alternativaE : "4 dias\n",
    correta      : "10 dias",
}
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
