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
    pergunta     : "(Enem 2019) O bônus demográfico é caracterizado pelo período em que,\n" +
        "          por causa da redução do número de filhos por mulher, a estrutura populacional fica favorável\n" +
        "          ao crescimento econômico. Isso acontece porque há proporcionalmente menos crianças na população,\n" +
        "          e o percentual de idosos ainda não é alto.A ação estatal que contribui para o aproveitamento do bonus demográfico é o estimulo à",
    alternativaA : "Atração de imigrantes",
    alternativaB : "Elevação da carga tributária.",
    alternativaC : "Qualificação da mão de obra.",
    alternativaD : "Admissão de exilados políticos.",
    alternativaE : "Concessão de aposentadorias.",
    correta      : "Qualificação da mão de obra.",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "(PUC) A Amazônia tem características particulares, sendo INCORRETO afirmar a existência de:",
    alternativaA : "Um subsolo rico em minérios, como bauxita, ouro, ferro e manganês.",
    alternativaB : "Uma floresta densa, que estimula a exploração madeireira.",
    alternativaC : "Uma flora fonte de elementos naturais, com amplas perspectivas medicinais.",
    alternativaD : "Um imenso potencial hidráulico para navegação e energia.",
    alternativaE : "Um solo de vocação agrícola, para cultivos temporários comerciais.",
    correta      : "Um solo de vocação agrícola, para cultivos temporários comerciais.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "(Fatec-SP) Uma das características a ser reconhecida no feudalismo europeu é:",
    alternativaA : "A sociedade feudal era semelhante ao sistema de castas.",
    alternativaB : "Os ideais de honra e fidelidade vieram das instituições dos hunos.",
    alternativaC : "Vilões e servos estavam presos a várias obrigações, entre elas, o pagamento anual de capitação, talha e banalidades.",
    alternativaD : "A economia do feudo era dinâmica, estando voltada para o comércio dos feudos vizinhos.",
    alternativaE : "As relações de produção eram escravocratas.",
    correta      : "Vilões e servos estavam presos a várias obrigações, entre elas, o pagamento anual de capitação, talha e banalidades.",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "(FUVEST) A ascensão de Hitler ao poder, no início dos anos trinta, ocorreu:",
    alternativaA : "Pelas mãos do exército alemão que quis desforrar-se das humilhações impostas pelo Tratado de Versalhes.",
    alternativaB : "Através de uma ação golpista cuja ponta de lança foram as forças paramilitares do partido nazista.",
    alternativaC : "Em consequência de uma aliança entre os nazistas e os comunistas.",
    alternativaD : "A partir de sua convocação pelo presidente Hindenburg, para chefiar uma coalizão governamental.",
    alternativaE : "Através de uma mobilização semelhante à que ocorreu na Itália, com a marcha de Mussolini sobre Roma.",
    correta      : "A partir de sua convocação pelo presidente Hindenburg, para chefiar uma coalizão governamental.",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "(FMU-SP) O Pacto de Varsóvia, criado em 1955 e extinto em 1991, teve como principal objetivo:",
    alternativaA : "Reunir os países socialistas como a Alemanha Oriental e a Alemanha Ocidental contra a OTAN.",
    alternativaB : "Consolidar a influência soviética sobre os países da Europa Oriental.",
    alternativaC : "Conter a influência soviética sobre os países da Europa Oriental.",
    alternativaD : "Conter a influência soviética sobre os países da Europa Oriental.",
    alternativaE : "Consolidar a influência capitalista na Europa Oriental.",
    correta      : "Consolidar a influência soviética sobre os países da Europa Oriental.",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "(FATEC SP) Sócrates, grande filósofo grego, formou numerosos discípulos, que seguiram diferentes caminhos para buscar o conhecimento real.\n" +
        "\nA grande preocupação socrática era:",
    alternativaA : "Interpretar o mundo como sendo espiritual e organizado segundo uma moral baseada em verdadeiros conceitos imutáveis.",
    alternativaB : "Compreender as causas primeiras e os fins últimos de todas as coisas, pois só se pode dizer que se conhece alguma coisa quando se conhece sua causa primeira.",
    alternativaC : "O autoconhecimento que poderia ser obtido por meio da ironia e da maiêutica, métodos que consistiam em fazer indagação, fingindo ignorância, para despertar no interlocutor o conhecimento latente.",
    alternativaD : "Fazer um estudo crítico da História, comparando a História Grega com a dos povos orientais, a fim de mostrar que o mundo era mais amplo do que se imaginava.",
    alternativaE : "Mostrar que todo o conhecimento era obtido por intermédio dos sentidos humanos e que, por esses serem falhos, era relativo e limitado.",
    correta      : "O autoconhecimento que poderia ser obtido por meio da ironia e da maiêutica, métodos que consistiam em fazer indagação, fingindo ignorância, para despertar no interlocutor o conhecimento latente.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "(UEG-GO) A Grécia foi o berço da filosofia, destacando-se pela presença dos filósofos que pensaram o mundo em que viveram utilizando a ferramenta da razão. O período da história grega e o filósofo que afirmou que “só sei que nada sei” foram respectivamente o",
    alternativaA : "Período pós-clássico e Sócrates.",
    alternativaB : "Período helenístico e Platão.",
    alternativaC : "Período clássico e Sócrates.",
    alternativaD : "Período clássico e Platão.",

    correta      : "Período clássico e Sócrates.",
}
const q7 = {
    numQuestao   : 7,
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
const q8 = {
    numQuestao   : 8,
    pergunta     : "Assinale a alternativa que possui um substantivo comum, simples, concreto e primitivo:",
    alternativaA : "casebre",
    alternativaB : "girassol",
    alternativaC : "Helena",
    alternativaD : "honestidade",
    alternativaE : "menina",
    correta      : "menina",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "(Fuvest – SP) Entre as mensagens abaixo, a única que está de acordo com a norma escrita culta é:\n" +
        "\n",
    alternativaA : " Confira as receitas incríveis preparadas para você. Clica aqui!",
    alternativaB : "Mostra que você tem bom coração. Contribua para a campanha do agasalho!",
    alternativaC : "Cura-te a ti mesmo e seja feliz!",
    alternativaD : "Não subestime o consumidor. Venda produtos de boa procedência.",
    alternativaE : " Em caso de acidente, não siga viagem. Pede o apoio de um policial.",
    correta      : "Não subestime o consumidor. Venda produtos de boa procedência.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "(Enem PPL 2015) Sabe-se o que era a mata do Nordeste, antes da monocultura da cana: um arvoredo tanto e tamanho e tão basto e de tantas prumagens que não podia homem dar conta. O canavial desvirginou todo esse mato grosso do modo mais cru: pela queimada. A fogo é que foram se abrindo no mato virgem os claros por onde se estendeu o canavial civilizador, mas ao mesmo tempo devastador.",
    alternativaA : "Demanda de trabalho, que favorecia a escravidão.",
    alternativaB : "Modelo civilizatório, que acarretou danos ambientais.",
    alternativaC : "Rudimento das técnicas produtivas, que eram ineficientes.",
    alternativaD : "Natureza da atividade econômica, que concentrou riqueza.",
    alternativaE : "Predomínio da monocultura, que era voltada para exportação.",
    correta      : "Modelo civilizatório, que acarretou danos ambientais.",
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
