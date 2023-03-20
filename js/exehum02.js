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
    pergunta     : "Lenin tinha como única fonte de informação os jornais estrangeiros, mas, lendo as entrelinhas de suas matérias imprecisas e tendenciosas, pôde apreender os dados fundamentais. [...] O Soviete era o porta-voz do povo, que queria paz, pão, liberdade e terra. O Governo Provisório [...] representava uma burguesia cujas tendências liberais se limitavam à intenção de livrar-se dos Romanov. O excerto refere-se à análise feita por Lenin, líder do Partido Bolchevista, do movimento social que derrubou o czar Nicolau II, em março de 1917. No seu entender, havia ",
    alternativaA : "uma possiblidade de restauração da monarquia e o Governo Provisório deveria ser apoiado pela população.",
    alternativaB : "uma revolução camponesa em marcha no país e a classe operária estaria ausente das agitações sociais.",
    alternativaC : "uma iminente intervenção militar dos países imperialistas e os movimentos populares precisariam sustentar o exército russo. ",
    alternativaD : "uma revolução fortemente nacionalista e os partidos revolucionários encabeçariam esse movimento transformador. ",
    alternativaE : "uma dualidade de poder em disputa e o Governo Provisório manteria a Rússia na Guerra Mundial.",
    correta      : "uma dualidade de poder em disputa e o Governo Provisório manteria a Rússia na Guerra Mundial.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Na Era da Catástrofe (1914-1945), com a Grande Depressão desencadeada pela crise de 1929, tornava-se cada vez mais claro que a paz, a estabilidade social, a economia, as instituições políticas e os valores intelectuais da sociedade liberal burguesa entraram em decadência ou colapso. A partir do excerto acima e dos conhecimentos sobre o período histórico que vai de 1914 a 1945, é correto afirmar: ",
    alternativaA : "A crise de 1929 e as guerras mundiais levaram ao colapso do liberalismo político e econômico na Europa e, ao mesmo tempo, à expansão das democracias liberais em países africanos e do Oriente Médio.   ",
    alternativaB : "As soluções para a crise de 1929 centraram-se em um aprofundamento das políticas liberais do New Deal, que promoviam responsabilidade fiscal e diminuição do papel do Estado como motor de desenvolvimento. ",
    alternativaC : "São marcos da crise do liberalismo na Europa: o colapso das principais democracias, a ascensão de governos totalitários e autoritários e a descrença no livre-mercado após a crise de 1929. ",
    alternativaD : "Verificou-se nesse período o colapso das democracias liberais, com a ascensão do totalitarismo na Europa, e o aumento das liberdades econômicas, com a diminuição do papel do Estado como solução para a crise de 1929.  ",
    alternativaE : "",
    correta      : "São marcos da crise do liberalismo na Europa: o colapso das principais democracias, a ascensão de governos totalitários e autoritários e a descrença no livre-mercado após a crise de 1929. ",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "A década que se segue ao fim da guerra constitui praticamente uma continuação desta com a acomodação difícil de seus resultados. A ruptura do sistema internacional com a Revolução Soviética, a ascensão dos Estados Unidos, o recuo da Europa e o início da contestação anticolonial marcam uma década que para muitos foi de pessimismo e para alguns de ilusão, que bruscamente se encerra com a quebra da bolsa de Nova Iorque. Com a crise de 1929 terá início a preparação de uma nova guerra mundial. Os eventos mencionados no texto contribuíram fortemente para a ascensão de regimes propensos a um novo conflito armado, pois ",
    alternativaA : "perturbaram a dinâmica de equilíbrio demográfico.  ",
    alternativaB : "dificultaram a adesão a ideologias de viés socialista. ",
    alternativaC : "favoreceram a ascensão de grupos anarquistas ao poder. ",
    alternativaD : "corroeram a crença na legitimidade das democracias liberais.",
    alternativaE : "deterioraram a confiança no salvacionismo dos exércitos nacionais.",
    correta      : "perturbaram a dinâmica de equilíbrio demográfico.",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Oximoro, ou paradoxismo, é uma figura de retórica em que se combinam palavras de sentido oposto que parecem excluir-se mutuamente, mas que, no contexto, reforçam a expressão. Considerando a definição apresentada, o fragmento poético da obra Cantares, de Hilda Hilst, publicada em 2004, em que pode ser encontrada a referida figura de retórica é: ",
    alternativaA : "“Dos dois contemplo <br> rigor e fixidez <br> Passado e sentimento me contemplam” (p. 91).   ",
    alternativaB : "“De sol e lua <br> De fogo e vento <br> Te enlaço” (p. 101).   ",
    alternativaC : "“Areia, vou sorvendo <br> A água do teu rio” (p. 93). ",
    alternativaD : "Ritualiza a matança <br> de quem só te deu vida. <br> E me deixa viver <br> nessa que morre (p. 62).",
    alternativaE : "“O bisturi e o verso. <br> Dois instrumentos <br> entre as minhas mãos” (p. 95). ",
    correta      : "Ritualiza a matança <br> de quem só te deu vida. <br> E me deixa viver <br> nessa que morre (p. 62).",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Sobre a crise econômica de 1929, que iniciou com a quebra da bolsa de valores de Nova Iorque, considere as seguintes afirmações.I. A causa principal da crise foi o alto endividamento dos Estados Unidos, após o fim da Primeira Guerra Mundial.II. A economia mundial foi rapidamente afetada pela crise, devido à redução das importações dos Estados Unidos e ao repatriamento de capitais norte-americanos que estavam em outros países.III. A economia brasileira manteve-se estável, graças à valorização do café no mercado mundial.Quais estão corretas? ",
    alternativaA : "Apenas I. ",
    alternativaB : "Apenas II. ",
    alternativaC : "Apenas III.",
    alternativaD : "Apenas II e III.",
    alternativaE : "I, II e III. ",
    correta      : "Apenas II.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "O ano de 1930 foi difícil para os cafeicultores brasileiros. De acordo com o historiador Boris Fausto, o volume de vendas do café caiu mais de 35% naquele ano. O motivo fundamental para a queda nas exportações do produto foi a crise mundial do capitalismo. A principal causa dessa crise mundial foi ",
    alternativaA : "a desindustrialização da economia norte-americana, que acabou por desabastecer o mercado internacional.  ",
    alternativaB : "a superprodução da indústria dos Estados Unidos da América, que cresceu além das necessidades dos mercados interno e internacional. ",
    alternativaC : "a vigorosa industrialização da União Soviética, que supriu satisfatoriamente os mercados interno e internacional.",
    alternativaD : "o excesso do capital financeiro na Europa, que afetou diretamente o surgimento de governos democráticos na Península Ibérica. ",
    alternativaE : "a quebra da Bolsa de Moscou, que acabou por induzir falências de empresas e de bancos e milhões de desempregados nos Estados Unidos.",
    correta      : "a superprodução da indústria dos Estados Unidos da América, que cresceu além das necessidades dos mercados interno e internacional. ",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "[Os nazistas] acreditavam que o movimento das mulheres fazia parte de uma conspiração judaica internacional para subverter a família alemã e, assim, destruir a raça alemã. O movimento, alegavam, encorajava as mulheres a afirmar sua independência econômica e a negligenciar sua tarefa de produzir filhos. Difundia as doutrinas femininas de pacifismo, democracia e “materialismo”. Ao incentivar a contracepção e o aborto para diminuir o índice de natalidade, atacava a própria existência do povo alemão. Com base nesse texto, a condição feminina na doutrina nazista se caracterizava pela ",
    alternativaA : "propaganda de conscientização sobre os direitos civis e políticos das mulheres.",
    alternativaB : "valorização da maternidade como instrumento de crescimento da população ariana.",
    alternativaC : "ampliação de instituições femininas de educação profissional criadas pelo governo.",
    alternativaD : "organização administrativa restritiva à presença de mulheres em postos de trabalho. ",
    alternativaE : "",
    correta      : "valorização da maternidade como instrumento de crescimento da população ariana.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Nunca tinha ido ao teatro, e mais de uma vez, ouvindo dizer ao Meneses que ia ao teatro, pedi-lhe que me levasse consigo. Nessas ocasiões, a sogra fazia uma careta, e as escravas riam à socapa; ele não respondia, vestia-se, saía e só tornava na manhã seguinte. Mais tarde é que eu soube que o teatro era um eufemismo em ação. Meneses trazia amores com uma senhora, separada do marido, e dormia fora de casa uma vez por semana. Conceição padecera, a princípio, com a existência da comborça; mas, afinal, resignara-se, acostumara-se, e acabou achando que era muito direito. No fragmento desse conto de Machado de Assis, 'ir ao teatro' significa 'ir encontrar-se com o amante'. O uso do eufemismo como estratégia argumentativa significa ",
    alternativaA : "exagerar quanto ao desejo em “ir ao teatro”. ",
    alternativaB : "personificar a prontidão em 'ir ao teatro1.",
    alternativaC : "esclarecer o valor denotativo de “ir ao teatro”. ",
    alternativaD : "reforçar compromisso com o casamento. ",
    alternativaE : "suavizar uma transgressão matrimonial.",
    correta      : "esclarecer o valor denotativo de “ir ao teatro”. ",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Assinale a alternativa que apresenta a figura de linguagem anacoluto. ",
    alternativaA : "Eu não me importa a desonra do mundo. ",
    alternativaB : "Passarinho, desisti de ter. ",
    alternativaC : "O que não tenho e desejo é que melhor me enriquece.   ",
    alternativaD : "De todas, porém, a que me cativou logo foi uma... uma... não sei se digo.   ",
    alternativaE : "E espero tenha sido a última.",
    correta      : "E espero tenha sido a última.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "A Praça da Concórdia, antiga Praça Luís XV, é a maior praça pública de Paris. Inaugurada em 1763, tinha em seu centro uma estátua do rei. Situada ao longo do Sena, ela é a intersecção de dois eixos monumentais. Bem nesse cruzamento está o Obelisco de Luxor, decorado com hieróglifos que contam os reinados dos faraós Ramsés II e Ramsés III. Em 1829, foi oferecido pelo vice-rei do Egito ao povo francês e, em 1836, instalado na praça diante de mais de 200 mil espectadores e da família real. A constituição do espaço público da Praça da Concórdia ao longo dos anos manifesta o(a)     ",
    alternativaA : "lugar da memória na história nacional.   ",
    alternativaB : "caráter espontâneo das festas populares.",
    alternativaC : "lembrança da antiguidade da cultura local.",
    alternativaD : "triunfo da nação sobre os países africanos.  ",
    alternativaE : "declínio do regime de monarquia absolutista. ",
    correta      : "lugar da memória na história nacional.   ",
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
