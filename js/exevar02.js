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
    pergunta     : "Sobre os tipos de solos e suas características, assinale a alternativa incorreta.",
    alternativaA : "Os solos aluviais formam-se por acúmulo de sedimentos e partículas, transportados a grandes distâncias pela força das águas e dos ventos.  ",
    alternativaB : "O solo muito arenoso apresenta alto teor de matéria orgânica e grande capacidade de retenção de água, sendo, assim, muito fértil.",
    alternativaC : "Os solos mais escuros são os de mais alto valor para a agricultura, pois apresentam grande quantidade de matéria orgânica.   ",
    alternativaD : "O processo de formação do solo, a partir de uma rocha matriz, é um processo lento e depende da ação de elementos naturais como o clima.   ",
    alternativaE : "",
    correta      : "O solo muito arenoso apresenta alto teor de matéria orgânica e grande capacidade de retenção de água, sendo, assim, muito fértil.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "As cidades de Puebla, no México, e Legazpi, nas Filipinas, não têm quase nada em comum. Estão muito longe uma da outra e são habitadas por povos muito diferentes. O que as une é um trágico detalhe de sua geografia. Elas foram erguidas na vizinhança de alguns dos vulcões mais perigosos do mundo: o mexicano Popocatepétl e o filipino Mayon. Seus habitantes precisam estar prontos para correr a qualquer hora. Eles fazem parte dos 550 milhões de indivíduos que moram em zonas de risco vulcânico no mundo. Ao contrário do que seria sensato, continuam ali, indiferentes ao perigo que os espreita. A característica física que justifica a fixação do homem nos locais apresentados no texto é a ocorrência de ",
    alternativaA : "solo fértil.",
    alternativaB : "encosta íngreme.",
    alternativaC : "vegetação diversificada. ",
    alternativaD : "drenagem eficiente. ",
    alternativaE : "clima ameno.",
    correta      : "solo fértil.",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "A colisão entre uma placa continental e uma oceânica provocará a subducção desta última sob a placa continental, que, a exemplo dos arcos e ilhas, produzirá um arco magmático na borda do continente, composto por rochas vulcânicas acompanhado de deformações e metamorfismo tanto de rochas preexistentes como de parte das rochas formadas no processo.Qual feição fisiográfica é gerada pelo processo tectônico apresentado? ",
    alternativaA : "Planícies abissais.",
    alternativaB : "Planaltos cristalinos. ",
    alternativaC : "Depressões absolutas.",
    alternativaD : "Bacias sedimentares. ",
    alternativaE : "Dobramentos modernos.",
    correta      : "Dobramentos modernos.",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "A construção de uma cosmologia que desse uma explicação racional e sistemática das características do universo, em substituição à cosmogonia, que tentava explicar a origem do universo baseada nos mitos, foi uma preocupação da Filosofia",
    alternativaA : "medieval.   ",
    alternativaB : "antiga. ",
    alternativaC : "iluminista.",
    alternativaD : "contemporânea. ",
    alternativaE : "",
    correta      : "antiga. ",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Leia a fábula de La Fontaine, uma possível explicação para a expressão ― ”o amor é cego”. No amor tudo é mistério: suas flechas e sua aljava, sua chama e sua infância eterna. Mas por que o amor é cego? Aconteceu que num certo dia o Amor e a Loucura brincavam juntos. Aquele ainda não era cego. Surgiu entre eles um desentendimento qualquer. Pretendeu então o Amor que se reunisse para tratar do assunto o conselho dos deuses. Mas a Loucura, impaciente, deu-lhe uma pancada tão violenta que lhe privou da visão. Vênus, mãe e mulher, pôs-se a clamar por vingança, aos gritos. Diante de Júpiter, de Nêmesis – a deusa da vingança – e de todos os juízos do inferno, Vênus exigiu que aquele crime fosse reparado. Seu filho não podia ficar cego. Depois de estudar detalhadamente o caso, a sentença do supremo tribunal celeste consistiu em declarar a loucura a servir de guia ao Amor.A fábula traz uma explicação oriunda dos deuses para uma realidade humana. Esse tipo de explicação classifica-se como",
    alternativaA : "estética. ",
    alternativaB : "filosófica. ",
    alternativaC : "mitológica.",
    alternativaD : "científica. ",
    alternativaE : "crítica.",
    correta      : "mitológica.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "A cultura grega marca a origem da civilização ocidental e ainda hoje podemos observar sua influência nas ciências, nas artes, na política e na ética. Dentre os legados da cultura grega para o Ocidente, destaca-se a ideia de que",
    alternativaA : "a natureza opera obedecendo a leis e princípios necessários e universais que podem ser plenamente conhecidos pelo nosso pensamento.",
    alternativaB : "nosso pensamento também opera obedecendo a emoções e sentimentos alheios à razão, mas que nos ajudam a distinguir o verdadeiro do falso. ",
    alternativaC : "as práticas humanas, a ação moral, política, as técnicas e as artes dependem do destino, o que negaria a existência de uma vontade livre.",
    alternativaD : "as ações humanas escapam ao controle da razão, uma vez que agimos obedecendo aos instintos como mostra hoje a psicanálise.  ",
    alternativaE : "",
    correta      : "as práticas humanas, a ação moral, política, as técnicas e as artes dependem do destino, o que negaria a existência de uma vontade livre.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Atente ao seguinte estudo de caso: Em um hospital do interior do Ceará, um grupo de pesquisadores pretende investigar o efeito da adição da vitamina C à medicação rotineira para pacientes hipertensos, partindo da informação, existente em literatura, de que o ácido ascórbico combinado a medicamento para hipertensão potencializa este medicamento. Considerando as etapas do método científico para um experimento relacionado a essa problemática, assinale a opção que não corresponde a uma delas.",
    alternativaA : "Observação.",
    alternativaB : "Formulação de hipótese.",
    alternativaC : "Realização de dedução.",
    alternativaD : "Uso do senso comum para as discussões e conclusões.",
    alternativaE : "",
    correta      : "Uso do senso comum para as discussões e conclusões.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Desde o início, Lavoisier adotou uma abordagem moderna da química. Esta era sintetizada por sua fé na balança. Do ponto de vista do método científico, esta frase traduz a relevância que Lavoisier atribuía a:",
    alternativaA : "teorias",
    alternativaB : "modelos",
    alternativaC : "hipóteses",
    alternativaD : "experimentos",
    alternativaE : "",
    correta      : "teorias",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "A tabela de Mendeleiev, ao ser apresentada à Sociedade Russa de Química, possuía espaços em branco, reservados para elementos ainda não descobertos. A tabela foi assim organizada a partir da crença de Mendeleiev na existência de relações periódicas entre as propriedades físico-químicas dos elementos. Ao analisar a tabela de Mendeleiev, Berlikov, um jovem químico, criticou-a fazendo a seguinte pergunta: “Pode a natureza ter espaços em branco?” Do ponto de vista do método científico, a pergunta reflete a ausência de:",
    alternativaA : "lei física.",
    alternativaB : "hipótese plausível.",
    alternativaC : "modelo matemático.",
    alternativaD : "observação experimental.",
    alternativaE : "",
    correta      : "observação experimental.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "O tema “teoria da evolução” tem provocado debates em certos locais dos Estados Unidos da América, com algumas entidades contestando seu ensino nas escolas. Nos últimos tempos, a polêmica está centrada no termo teoria, que, no entanto, tem significado bem definido para os cientistas. Sob o ponto de vista da ciência, teoria é",
    alternativaA : "sinônimo de lei científica, que descreve regularidades de fenômenos naturais, mas não permite fazer previsões sobre eles.",
    alternativaB : "sinônimo de hipótese, ou seja, uma suposição, ainda sem comprovação experimental.",
    alternativaC : "uma ideia sem base em observação e experimentação, que usa o senso comum para explicar fatos do cotidiano.    ",
    alternativaD : "uma ideia, apoiada pelo conhecimento científico, que tenta explicar fenômenos naturais relacionados, permitindo fazer previsões sobre eles.",
    alternativaE : "uma ideia, apoiada pelo conhecimento científico, que, de tão comprovada pelos cientistas, já é considerada uma verdade incontestável.",
    correta      : "uma ideia, apoiada pelo conhecimento científico, que tenta explicar fenômenos naturais relacionados, permitindo fazer previsões sobre eles.",
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
