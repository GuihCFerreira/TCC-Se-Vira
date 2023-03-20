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
    pergunta     : "As plantas, em sua fase de crescimento, necessitam de grande quantidade de carbono, sequestrado pela fotossíntese, para a produção de biomassa.\n" +
        "\n" +
        "O sequestro de carbono pelas plantas é aumentado",
    alternativaA : "Reciclando papel.",
    alternativaB : "Mantendo intactas as florestas nativas.\n",
    alternativaC : "Fazendo o replantio das áreas degradadas.",
    alternativaD : "Evitando a queima de madeira e de áreas de floresta.",
    alternativaE : "Substituindo a madeira de bens duráveis por materiais alternativos.\n",
    correta      : "Fazendo o replantio das áreas degradadas.",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Sobre o Tratado de Tordesilhas, assinado em 7 de junho de 1494, pode-se afirmar que objetivava:",
    alternativaA : "Demarcar os direitos de exploração dos países ibéricos, tendo como elemento propulsor o desenvolvimento da expansão comercial marítima.\n",
    alternativaB : "Estimular a consolidação do reino português, por meio da exploração das especiarias africanas e da formação do exército nacional.\n",
    alternativaC : "Impor a reserva de mercado metropolitano, por meio da criação de um sistema de monopólios que atingia todas as riquezas coloniais.\n",
    alternativaD : "Reconhecer a transferência do eixo do comércio mundial do Mediterrâneo para o Atlântico, depois das expedições de Vasco da Gama às Índias.\n",
    alternativaE : "Reconhecer a hegemonia anglo-francesa sobre a exploração colonial, após a destruição da Invencível Armada de Felipe II, da Espanha.\n",
    correta      : "Demarcar os direitos de exploração dos países ibéricos, tendo como elemento propulsor o desenvolvimento da expansão comercial marítima.",
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
    pergunta     : " (Fuvest) “Antigamente a Lusitânia e a Andaluzia eram o fim do mundo, mas agora, com a descoberta das Índias, tornaram-se o centro dele”. Essa frase, de Tomás de Mercado, escritor espanhol do século 16, referia-se",
    alternativaA : "Ao poderio das monarquias francesa e inglesa, que se tornaram centrais desde então.",
    alternativaB : "À alteração do centro de gravidade econômica da Europa e à importância crescente dos novos mercados.\n",
    alternativaC : "Ao papel que os portos de Lisboa e Sevilha assumiram no comércio com os marajás indianos.\n",
    alternativaD : "Ao fato de a América ter passado a absorver, desde então, todo o comércio europeu.\n",
    alternativaE : "Ao desenvolvimento da navegação a vapor, que encurtava distâncias\n",
    correta      : "À alteração do centro de gravidade econômica da Europa e à importância crescente dos novos mercados.",
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
    pergunta     : "(UEA) Os gases N2, O2, Ar, CO2, H2O e Ne estão, entre outros, presentes no ar atmosférico. Desses seis gases, são classificados como substâncias químicas simples",
    alternativaA : "Dois, apenas.",
    alternativaB : "Três, apenas.\n",
    alternativaC : "Quatro, apenas.\n",
    alternativaD : "Cinco, apenas.\n",
    alternativaE : "Segunda",
    correta      : "Quatro, apenas.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "UESPI) No século XIX, a sociedade burguesa conseguiu avançar, incentivando o capitalismo e a industrialização. No campo das ideias, o positivismo do francês Auguste Comte:",
    alternativaA : "Criticava as filosofias materialistas, defendendo o idealismo iluminista.",
    alternativaB : "Argumentava a favor de uma história evolutiva e progressista.",
    alternativaC : "Considerava a ciência e a religião como dons supremos do homem.\n",
    alternativaD : "Desprezava a evolução, vendo a história como repetição e tradição.\n",
    alternativaE : "Teve repercussões apenas no pensamento europeu do século XIX.\n",
    correta      : "Argumentava a favor de uma história evolutiva e progressista.",
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
    pergunta     : "(Mackenzie) Assinale a alternativa incorreta a respeito do Trovadorismo em Portugal.",
    alternativaA : "Durante o Trovadorismo, ocorreu a separação entre poesia e a música.",
    alternativaB : "Muitas cantigas trovadorescas foram reunidas em livros ou coletâneas que receberam o nome de cancioneiros.",
    alternativaC : "Nas cantigas de amor, há o reflexo do relacionamento entre o senhor e vassalo na sociedade feudal: distância e extrema submissão.",
    alternativaD : "Nas cantigas de amigo, o trovador escreve o poema do ponto de vista feminino.\n",
    alternativaE : "A influência dos trovadores provençais é nítida nas cantigas de amor galego-portuguesas.\n",
    correta      : "Durante o Trovadorismo, ocorreu a separação entre poesia e a música.",
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
