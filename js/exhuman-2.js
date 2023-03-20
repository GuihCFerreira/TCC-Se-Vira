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
    pergunta     : "(ESPM) O contexto internacional em 2019 no segundo semestre, entre outros fatos, foi marcado pela crise envolvendo China e Hong Kong.\n" +
        "\n" +
        "Sobre o status político de Hong Kong é correto afirmar:",
    alternativaA : "É um Estado soberano, condição alcançada logo após a independência do Reino Unido em 1997.",
    alternativaB : "É uma região autônoma britânica encravada em território chinês.\n",
    alternativaC : "É uma região administrativa com status especial, porém sob soberania chinesa.\n",
    alternativaD : " É uma região administrativa autônoma e com status especial, porém atrelada à Taiwan.\n",
    alternativaE : "É considerada um Estado independente, porém a China não reconhece essa condição.\n",
    correta      : "É uma região administrativa com status especial, porém sob soberania chinesa.\n",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "(UNICENTRO) Sobre estética, é correto afirmar que ela é",
    alternativaA : "Uma teoria do belo.",
    alternativaB : "Uma ciência lógica.",
    alternativaC : "Uma atividade natural.",
    alternativaD : "Um elemento matemático.",
    alternativaE : "Uma parte da ciência política.",
    correta      : "Uma teoria do belo.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "(UDESC) “Os proletários nada têm a perder a não ser suas algemas. Têm um mundo a ganhar. Proletários de todo o mundo, uni-vos.”. Estas frases, escritas por Karl Marx e Frederich Engels, encerram o Manifesto Comunista, publicado em Londres, em 1848.\n" +
        "\n" +
        "A respeito das condições de trabalho na Europa, durante o século XIX, é correto afirmar:",
    alternativaA : "O manifesto escrito por Marx e Engels denunciava as condições de desigualdade social entre, especialmente, a burguesia e o proletariado.\n",
    alternativaB : "O texto escrito por Marx e Engels afirmava que uma verdadeira revolução deveria ser promovida, exclusivamente, pelos dirigentes do Estado.\n",
    alternativaC : "Marx e Engels consideravam que os proletários jamais teriam condições de mudar de situação social, devido à condição de opressão em que viviam.\n",
    alternativaD : "Marx e Engels escreveram o Manifesto Comunista após a observação atenta das iniciativas de organização do estado soviético sob o governo de Stalin.\n",
    alternativaE : "Marx descreveu, no Manifesto Comunista, o detalhamento de seus projetos políticos relativos aos anos em que governou a Rússia, tendo Engels no cargo de vicechanceler.\n",
    correta      : "O manifesto escrito por Marx e Engels denunciava as condições de desigualdade social entre, especialmente, a burguesia e o proletariado.",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "(UEL) Sobre o “El Niño” é correto afirmar que:",
    alternativaA : "É um grande causador de Tsunamis, juntamente com os ciclones no continente asiático.\n",
    alternativaB : "É causado pelo resfriamento das águas do Pacífico.\n",
    alternativaC : "É causado pelo aquecimento anormal das águas do oceano Atlântico norte e sul.\n",
    alternativaD : "É causado pelo aquecimento anormal das águas do oceano Pacífico central e oriental.\n",
    alternativaE : "É causador de Tsunamis e ciclones extratropicais.\n",
    correta      : "É causado pelo aquecimento anormal das águas do oceano Pacífico central e oriental.",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Poente é o mesmo que...",
    alternativaA : "Norte",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    alternativaD : "Domingo",
    alternativaE : "Segunda",
    correta      : "Oeste",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : " (Cesgranrio) Assinale a opção em que os vocábulos obedecem a mesma regra de acentuação gráfica",
    alternativaA : "Terás / límpida\n",
    alternativaB : "Necessário / verás\n",
    alternativaC : "Dá-lhes / necessário\n",
    alternativaD : "Incêndio / também\n",
    alternativaE : "Extraordinário / incêndio\n",
    correta      : "Extraordinário / incêndio\n",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "(ITA) Uma das afirmações abaixo é incorreta. Assinale-a:",
    alternativaA : "O escritor árcade reaproveita os seres criados pela mitologia greco-romana, deuses e entidades pagãs. Mas esses mesmos deuses convivem com outros seres do mundo cristão.\n",
    alternativaB : "A produção literária do Arcadismo brasileiro constitui-se sobretudo de poesia, que pode ser lírico-amorosa, épica e satírica.\n",
    alternativaC : "O árcade recusa o jogo de palavras e as complicadas construções da linguagem barroca, preferindo a clareza, a ordem lógica na escrita.\n",
    alternativaD : "O poema épico Caramuru, de Santa Rita Durão, tem como assunto o descobrimento da Bahia, levado a efeito por Diogo Álvares Correia, misto de missionários e colonos português.\n",
    alternativaE : "A morte de Moema, índia que se deixa picar por uma serpente, como prova de fidelidade e amor ao índio Cacambo, é trecho mais conhecido da obra O Uruguai, de Basílio da Gama.\n",
    correta      : "A morte de Moema, índia que se deixa picar por uma serpente, como prova de fidelidade e amor ao índio Cacambo, é trecho mais conhecido da obra O Uruguai, de Basílio da Gama.\n",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Natal (RN) e Rio de Janeiro (RJ) apresentam temperaturas médias anuais semelhantes:",
    alternativaA : "Porque possuem o mesmo tipo de clima,e em ambas os solos foram originalmente recobertos por matas;",
    alternativaB : "Porque estão na mesma longitude, predominando os morros recobertos por vegetação no Rio de Janeiro e as dunas em Natal;",
    alternativaC : "Porque estão ambas no litoral e as duas sofrem a inﬂuência amenizadora do oceano Atlântico;",
    alternativaD : "Mas têm climas diferentes, porque, estando em latitudes distintas, são submetidas a massas de ar de origens diferentes;",
    alternativaE : "Mas têm climas diferentes, porque a cidade do Rio de Janeiro tem temperaturas elevadas, durante o ano todo, enquanto em Natal as temperaturas máximas estão entre abril e setembro.",
    correta      : "Mas têm climas diferentes, porque, estando em latitudes distintas, são submetidas a massas de ar de origens diferentes;",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "(FAG) Sobre o Arcadismo, é correto o que se afirma em:",
    alternativaA : "Nesse período o homem é regido pelas leis físico-químicas, pela hereditariedade e pelo meio social.\n",
    alternativaB : "A poesia dessa época dá ênfase ao poder de vidência do artista.\n",
    alternativaC : "Destaca-se nessa fase certo gosto pelo equilíbrio, pela simplicidade e pela harmonia, a partir dos modelos clássicos antigos.\n",
    alternativaD : "Há nessa Escola Literária uma tendência à valorização do humor, com vistas a afugentar as circunstâncias desagradáveis da vida.\n",
    alternativaE : "Enfatiza-se na criação poética, desse momento, a utilização do valor sugestivo da música.\n",
    correta      : "Destaca-se nessa fase certo gosto pelo equilíbrio, pela simplicidade e pela harmonia, a partir dos modelos clássicos antigos.\n",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "(Cesgranrio) Assinale a opção que correlaciona corretamente tipo de clima / região do Brasil / características do clima, respectivamente:",
    alternativaA : "Equatorial / toda a Amazônia / sem estação seca e chuvas acima de 3 000mm, estações individualizadas.",
    alternativaB : "Tropical com estação seca / planalto Central / seca na primavera e verão, chuvas abaixo de 1 000mm.",
    alternativaC : "Semiárido / Alto vale do São Francisco / chuvas de outono-inverno, em torno de 600m.",
    alternativaD : "Tropical de altitude / áreas mais elevadas do planalto Central / sem estação seca, temperaturas médias acima de 25°C e verões muito quentes.",
    alternativaE : "Subtropical / maior parte da região Sul / chuvas bem distribuídas, médias térmicas abaixo de 25°C e estações mais acentuadas.",
    correta      : "Subtropical / maior parte da região Sul / chuvas bem distribuídas, médias térmicas abaixo de 25°C e estações mais acentuadas.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "(UFSM) Filósofos utilizam frutas (maçãs, abacaxis, tomates) para ilustrar suas teorias. Numa maçã, por exemplo, alguns filósofos afirmaram que é possível separar propriedades ou qualidades secundárias (cor, cheiro, doçura) de qualidades primárias (como a extensão). Essas últimas servem de suporte às qualidades secundárias. Na metafísica tradicional, esse elemento que sustenta as qualidades secundárias é o(a)" ,
    alternativaA : "Substância",
    alternativaB : "Acidente",
    alternativaC : "Causalidade",
    alternativaD : "Racionalidade",
    alternativaE : "Necessidade",
    correta      : "Substância",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6,q7,q8,q9,q10,q11,q12,q13,q14,q15]

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
