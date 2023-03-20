globalThis.acertos = 0;
globalThis.erros = 0;
globalThis.total = 90;
globalThis.porcent = 0;

function validar(){
	
    questao1();
    questao2();
    questao3();
    questao4();
    questao5();
    questao6();
    questao7();
    questao8();
    questao9();
    questao10();
    questao11();
    questao12();
    questao13();
    questao14();
    questao15();
    questao16();
    questao17();
    questao18();
    questao19();
    questao20();
    questao21();
    questao22();
    questao23();
    questao24();
    questao25();
    questao26();
    questao27();
    questao28();
    questao29();
    questao30();
    questao31();
    questao32();
    questao33();
    questao34();
    questao35();
    questao36();
    questao37();
    questao38();
    questao39();
    questao40();
    questao41();
    questao42();
    questao43();
    questao44();
    questao45();
    questao46();
    questao47();
    questao48();
    questao49();
    questao50();
    questao51();
    questao52();
    questao53();
    questao54();
    questao57();
    questao58();
    questao59();
    questao60();
    resultados();
	}

function questao1(){
    var s="no";
    var quest1 = "q1c";
for(var i=0;i<document.f1.q1.length;i++)
{
    if(document.f1.q1[i].checked){
        s="si";
        if (quest1 == document.f1.q1[i].value){
            var certo = document.getElementById("Q1C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q1C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 1!");
}
}

function questao2(){
    var s="no";
    var quest2 = "q2a";
for(var i=0;i<document.f2.q2.length;i++)
{
    if(document.f2.q2[i].checked){
        s="si";
        if (quest2 == document.f2.q2[i].value){
            var certo = document.getElementById("Q2A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q2A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 2!");
}
}
function questao3(){
    var s="no";
    var quest3 = "q3c";
for(var i=0;i<document.f3.q3.length;i++)
{
    if(document.f3.q3[i].checked){
        s="si";
        if (quest3 == document.f3.q3[i].value){
            var certo = document.getElementById("Q3C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q3C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 3!");
}
}

function questao4(){
    var s="no";
    var quest4 = "q4c";
for(var i=0;i<document.f4.q4.length;i++)
{
    if(document.f4.q4[i].checked){
        s="si";
        if (quest4 == document.f4.q4[i].value){
            var certo = document.getElementById("Q4B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q4B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 4!");
}
}


function questao5(){
    var s="no";
    var quest5 = "q5b";
for(var i=0;i<document.f5.q5.length;i++)
{
    if(document.f5.q5[i].checked){
        s="si";
        if (quest5 == document.f5.q5[i].value){
            var certo = document.getElementById("Q5B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q5B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 5!");
}
}


function questao6(){
    var s="no";
    var quest6 = "q6b";
for(var i=0;i<document.f6.q6.length;i++)
{
    if(document.f6.q6[i].checked){
        s="si";
        if (quest6 == document.f6.q6[i].value){
            var certo = document.getElementById("Q6B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q6B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 6!");
}
}


function questao7(){
    var s="no";
    var quest7 = "q7d";
for(var i=0;i<document.f7.q7.length;i++)
{
    if(document.f7.q7[i].checked){
        s="si";
        if (quest7 == document.f7.q7[i].value){
            var certo = document.getElementById("Q7D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q7D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 7!");
}
}


function questao8(){
    var s="no";
    var quest8 = "q8c";
for(var i=0;i<document.f8.q8.length;i++)
{
    if(document.f8.q8[i].checked){
        s="si";
        if (quest8 == document.f8.q8[i].value){
            var certo = document.getElementById("Q8C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q8C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 8!");
}
}


function questao9(){
    var s="no";
    var quest9 = "q9c";
for(var i=0;i<document.f9.q9.length;i++)
{
    if(document.f9.q9[i].checked){
        s="si";
        if (quest9 == document.f9.q9[i].value){
            var certo = document.getElementById("Q9D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q9D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 9!");
}
}

function questao10(){
    var s="no";
    var quest10 = "q10e";
for(var i=0;i<document.f10.q10.length;i++)
{
    if(document.f10.q10[i].checked){
        s="si";
        if (quest10 == document.f10.q10[i].value){
            var certo = document.getElementById("Q10E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q10E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 10!");
}
}

function questao11(){
    var s="no";
    var quest11 = "q11e";
for(var i=0;i<document.f11.q11.length;i++)
{
    if(document.f11.q11[i].checked){
        s="si";
        if (quest11 == document.f11.q11[i].value){
            var certo = document.getElementById("Q11A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q11A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 11!");
}
}


function questao12(){
    var s="no";
    var quest12 = "q12d";
for(var i=0;i<document.f12.q12.length;i++)
{
    if(document.f12.q12[i].checked){
        s="si";
        if (quest12 == document.f12.q12[i].value){
            var certo = document.getElementById("Q12D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q12D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 12!");
}
}


function questao13(){
    var s="no";
    var quest13 = "q13c";
for(var i=0;i<document.f13.q13.length;i++)
{
    if(document.f13.q13[i].checked){
        s="si";
        if (quest13 == document.f13.q13[i].value){
            var certo = document.getElementById("Q13C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q13C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 13!");
}
}


function questao14(){
    var s="no";
    var quest14 = "q14e";
for(var i=0;i<document.f14.q14.length;i++)
{
    if(document.f14.q14[i].checked){
        s="si";
        if (quest14 == document.f14.q14[i].value){
            var certo = document.getElementById("Q14E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q14E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 14!");
}
}


function questao15(){
    var s="no";
    var quest15 = "q15d";
for(var i=0;i<document.f15.q15.length;i++)
{
    if(document.f15.q15[i].checked){
        s="si";
        if (quest15 == document.f15.q15[i].value){
            var certo = document.getElementById("Q15D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q15D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 15!");
}
}

function questao16(){
    var s="no";
    var quest16 = "q16b";
for(var i=0;i<document.f16.q16.length;i++)
{
    if(document.f16.q16[i].checked){
        s="si";
        if (quest16 == document.f16.q16[i].value){
            var certo = document.getElementById("Q16B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q16B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 16!");
}
}


function questao17(){
    var s="no";
    var quest17 = "q17e";
for(var i=0;i<document.f17.q17.length;i++)
{
    if(document.f17.q17[i].checked){
        s="si";
        if (quest17 == document.f17.q17[i].value){
            var certo = document.getElementById("Q17E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q17E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 17!");
}
}

function questao18(){
    var s="no";
    var quest18 = "q18d";
for(var i=0;i<document.f18.q18.length;i++)
{
    if(document.f18.q18[i].checked){
        s="si";
        if (quest18 == document.f18.q18[i].value){
            var certo = document.getElementById("Q18D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q18D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 18!");
}
}

function questao19(){
    var s="no";
    var quest19 = "q19d";
for(var i=0;i<document.f19.q19.length;i++)
{
    if(document.f19.q19[i].checked){
        s="si";
        if (quest19 == document.f19.q19[i].value){
            var certo = document.getElementById("Q19D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q19D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 19!");
}
}

function questao20(){
    var s="no";
    var quest20 = "q20d";
for(var i=0;i<document.f20.q20.length;i++)
{
    if(document.f20.q20[i].checked){
        s="si";
        if (quest20 == document.f20.q20[i].value){
            var certo = document.getElementById("Q20D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q20D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 20!");
}
}



function questao21(){
    var s="no";
    var quest21 = "q21a";
for(var i=0;i<document.f21.q21.length;i++)
{
    if(document.f21.q21[i].checked){
        s="si";
        if (quest21 == document.f21.q21[i].value){
            var certo = document.getElementById("Q21A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q21A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 21!");
}
}

function questao22(){
    var s="no";
    var quest22 = "q22b";
for(var i=0;i<document.f22.q22.length;i++)
{
    if(document.f22.q22[i].checked){
        s="si";
        if (quest22 == document.f22.q22[i].value){
            var certo = document.getElementById("Q22B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q22B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 22!");
}
}

function questao23(){
    var s="no";
    var quest23 = "q23b";
for(var i=0;i<document.f23.q23.length;i++)
{
    if(document.f23.q23[i].checked){
        s="si";
        if (quest23 == document.f23.q23[i].value){
            var certo = document.getElementById("Q23B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q23B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 23!");
}
}

function questao24(){
    var s="no";
    var quest24 = "q24b";
for(var i=0;i<document.f24.q24.length;i++)
{
    if(document.f24.q24[i].checked){
        s="si";
        if (quest24 == document.f24.q24[i].value){
            var certo = document.getElementById("Q24B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q24B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 24!");
}
}

function questao25(){
    var s="no";
    var quest25 = "q25b";
for(var i=0;i<document.f25.q25.length;i++)
{
    if(document.f25.q25[i].checked){
        s="si";
        if (quest25 == document.f25.q25[i].value){
            var certo = document.getElementById("Q25B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q25B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 25!");
}
}



function questao26(){
    var s="no";
    var quest26 = "q26d";
for(var i=0;i<document.f26.q26.length;i++)
{
    if(document.f26.q26[i].checked){
        s="si";
        if (quest26 == document.f26.q26[i].value){
            var certo = document.getElementById("Q26D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q26D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 26!");
}
}

function questao27(){
    var s="no";
    var quest27 = "q27e";
for(var i=0;i<document.f27.q27.length;i++)
{
    if(document.f27.q27[i].checked){
        s="si";
        if (quest27 == document.f27.q27[i].value){
            var certo = document.getElementById("Q27E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q27E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 27!");
}
}

function questao28(){
    var s="no";
    var quest28 = "q28b";
for(var i=0;i<document.f28.q28.length;i++)
{
    if(document.f28.q28[i].checked){
        s="si";
        if (quest28 == document.f28.q28[i].value){
            var certo = document.getElementById("Q28B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q28B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 28!");
}
}

function questao29(){
    var s="no";
    var quest29 = "q29c";
for(var i=0;i<document.f29.q29.length;i++)
{
    if(document.f29.q29[i].checked){
        s="si";
        if (quest29 == document.f29.q29[i].value){
            var certo = document.getElementById("Q29C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q29C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 29!");
}
}

function questao30() {
    var s = "no";
    var quest30 = "q30e";
    for (var i = 0; i < document.f30.q30.length; i++) {
        if (document.f30.q30[i].checked) {
            s = "si";
            if (quest30 == document.f30.q30[i].value) {
                var certo = document.getElementById("Q30E");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q30E");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 30!");
    }
}

function questao31(){
    var s="no";
    var quest31 = "q31a";
for(var i=0;i<document.f31.q31.length;i++)
{
    if(document.f31.q31[i].checked){
        s="si";
        if (quest31 == document.f31.q31[i].value){
            var certo = document.getElementById("Q31A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q31A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 31!");
}
}

function questao32() {
    var s = "no";
    var quest32 = "q32d";
    for (var i = 0; i < document.f32.q32.length; i++) {
        if (document.f32.q32[i].checked) {
            s = "si";
            if (quest32 == document.f32.q32[i].value) {
                var certo = document.getElementById("Q32D");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q32D");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 32!");
    }
}

function questao33() {
    var s = "no";
    var quest33 = "q33a";
    for (var i = 0; i < document.f33.q33.length; i++) {
        if (document.f33.q33[i].checked) {
            s = "si";
            if (quest33 == document.f33.q33[i].value) {
                var certo = document.getElementById("Q33A");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q33A");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 33!");
    }
}

function questao34() {
    var s = "no";
    var quest34 = "q34b";
    for (var i = 0; i < document.f34.q34.length; i++) {
        if (document.f34.q34[i].checked) {
            s = "si";
            if (quest34 == document.f34.q34[i].value) {
                var certo = document.getElementById("Q34B");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q34B");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 34!");
    }
}

function questao35() {
    var s = "no";
    var quest35 = "q35d";
    for (var i = 0; i < document.f35.q35.length; i++) {
        if (document.f35.q35[i].checked) {
            s = "si";
            if (quest35 == document.f35.q35[i].value) {
                var certo = document.getElementById("Q35D");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q35D");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 35!");
    }
}

function questao36() {
    var s = "no";
    var quest36 = "q36b";
    for (var i = 0; i < document.f36.q36.length; i++) {
        if (document.f36.q36[i].checked) {
            s = "si";
            if (quest36 == document.f36.q36[i].value) {
                var certo = document.getElementById("Q36B");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q36B");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 36!");
    }
}


function questao37() {
    var s = "no";
    var quest37 = "q37a";
    for (var i = 0; i < document.f37.q37.length; i++) {
        if (document.f37.q37[i].checked) {
            s = "si";
            if (quest37 == document.f37.q37[i].value) {
                var certo = document.getElementById("Q37A");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q37A");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 37!");
    }
}

function questao38() {
    var s = "no";
    var quest38 = "q38c";
    for (var i = 0; i < document.f38.q38.length; i++) {
        if (document.f38.q38[i].checked) {
            s = "si";
            if (quest38 == document.f38.q38[i].value) {
                var certo = document.getElementById("Q38C");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q38C");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 38!");
    }
}

function questao39() {
    var s = "no";
    var quest39 = "q39a";
    for (var i = 0; i < document.f39.q39.length; i++) {
        if (document.f39.q39[i].checked) {
            s = "si";
            if (quest39 == document.f39.q39[i].value) {
                var certo = document.getElementById("Q39A");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q39A");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 39!");
    }
}

function questao40() {
    var s = "no";
    var quest40 = "q40c";
    for (var i = 0; i < document.f40.q40.length; i++) {
        if (document.f40.q40[i].checked) {
            s = "si";
            if (quest40 == document.f40.q40[i].value) {
                var certo = document.getElementById("Q40C");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q40C");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 40!");
    }
}

function questao41() {
    var s = "no";
    var quest41 = "q41d";
    for (var i = 0; i < document.f41.q41.length; i++) {
        if (document.f41.q41[i].checked) {
            s = "si";
            if (quest41 == document.f41.q41[i].value) {
                var certo = document.getElementById("Q41D");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q41D");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 41!");
    }
}

function questao42() {
    var s = "no";
    var quest42 = "q42c";
    for (var i = 0; i < document.f42.q42.length; i++) {
        if (document.f42.q42[i].checked) {
            s = "si";
            if (quest42 == document.f42.q42[i].value) {
                var certo = document.getElementById("Q42C");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q42C");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 42!");
    }
}

function questao43() {
    var s = "no";
    var quest43 = "q44d";
    for (var i = 0; i < document.f44.q44.length; i++) {
        if (document.f44.q44[i].checked) {
            s = "si";
            if (quest43 == document.f44.q44[i].value) {
                var certo = document.getElementById("Q43D");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q43D");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 43!");
    }
}

function questao44() {
    var s = "no";
    var quest44 = "q44d";
    for (var i = 0; i < document.f44.q44.length; i++) {
        if (document.f44.q44[i].checked) {
            s = "si";
            if (quest44 == document.f44.q44[i].value) {
                var certo = document.getElementById("Q44D");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q44D");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 44!");
    }
}

function questao45() {
    var s = "no";
    var quest45 = "q45c";
    for (var i = 0; i < document.f45.q45.length; i++) {
        if (document.f45.q45[i].checked) {
            s = "si";
            if (quest45 == document.f45.q45[i].value) {
                var certo = document.getElementById("Q45C");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q45C");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 45!");
    }
}

function questao46() {
    var s = "no";
    var quest46 = "q46b";
    for (var i = 0; i < document.f46.q46.length; i++) {
        if (document.f46.q46[i].checked) {
            s = "si";
            if (quest46 == document.f46.q46[i].value) {
                var certo = document.getElementById("Q46B");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q46B");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 46!");
    }
}


function questao47() {
    var s = "no";
    var quest47 = "q47a";
    for (var i = 0; i < document.f47.q47.length; i++) {
        if (document.f47.q47[i].checked) {
            s = "si";
            if (quest47 == document.f47.q47[i].value) {
                var certo = document.getElementById("Q47A");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q47A");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 47!");
    }
}

function questao48() {
    var s = "no";
    var quest48 = "q48d";
    for (var i = 0; i < document.f48.q48.length; i++) {
        if (document.f48.q48[i].checked) {
            s = "si";
            if (quest48 == document.f48.q48[i].value) {
                var certo = document.getElementById("Q48D");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q48D");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 48!");
    }
}

function questao49() {
    var s = "no";
    var quest49 = "q49c";
    for (var i = 0; i < document.f49.q49.length; i++) {
        if (document.f49.q49[i].checked) {
            s = "si";
            if (quest49 == document.f49.q49[i].value) {
                var certo = document.getElementById("Q49C");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q49C");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 49!");
    }
}

function questao50() {
    var s = "no";
    var quest50 = "q50b";
    for (var i = 0; i < document.f50.q50.length; i++) {
        if (document.f50.q50[i].checked) {
            s = "si";
            if (quest50 == document.f50.q50[i].value) {
                var certo = document.getElementById("Q50B");
                certo.style.backgroundColor = '#008b00';
                acertos = acertos + 1;
            } else {
                erros = erros + 1;
                var certo = document.getElementById("Q50B");
                certo.style.backgroundColor = '#8b0000';
            }
        }
    }
    if (s == "no") {
        alert("Selecione uma alternativa para a questão 50!");
    }
}

function questao51(){
    var s="no";
    var quest51 = "q51a";
for(var i=0;i<document.f51.q51.length;i++)
{
    if(document.f51.q51[i].checked){
        s="si";
        if (quest51 == document.f51.q51[i].value){
            var certo = document.getElementById("Q51A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q51A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 51!");
}
}
 
function questao52(){
    var s="no";
    var quest52 = "q52d";
for(var i=0;i<document.f52.q52.length;i++)
{
    if(document.f52.q52[i].checked){
        s="si";
        if (quest52 == document.f52.q52[i].value){
            var certo = document.getElementById("Q52D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q52D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 52!");
}
}
 
function questao53(){
    var s="no";
    var quest53 = "q53b";
for(var i=0;i<document.f53.q53.length;i++)
{
    if(document.f53.q53[i].checked){
        s="si";
        if (quest53 == document.f53.q53[i].value){
            var certo = document.getElementById("Q53B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q53B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 53!");
}
}
 
function questao54(){
    var s="no";
    var quest54 = "q54c";
for(var i=0;i<document.f54.q54.length;i++)
{
    if(document.f54.q54[i].checked){
        s="si";
        if (quest54 == document.f54.q54[i].value){
            var certo = document.getElementById("Q54C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q54C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 54!");
}
}
 
 
 
function questao57(){
    var s="no";
    var quest57 = "q57d";
for(var i=0;i<document.f57.q57.length;i++)
{
    if(document.f57.q57[i].checked){
        s="si";
        if (quest57 == document.f57.q57[i].value){
            var certo = document.getElementById("Q57D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q57D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 57!");
}
}
 
function questao58(){
    var s="no";
    var quest58 = "q58e";
for(var i=0;i<document.f58.q58.length;i++)
{
    if(document.f58.q58[i].checked){
        s="si";
        if (quest58 == document.f58.q58[i].value){
            var certo = document.getElementById("Q58E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q58E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 58!");
}
}
 
function questao59(){
    var s="no";
    var quest59 = "q59b";
for(var i=0;i<document.f59.q59.length;i++)
{
    if(document.f59.q59[i].checked){
        s="si";
        if (quest59 == document.f59.q59[i].value){
            var certo = document.getElementById("Q59B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q59B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 59!");
}
}
 
function questao60(){
    var s="no";
    var quest60 = "q60b";
for(var i=0;i<document.f60.q60.length;i++)
{
    if(document.f60.q60[i].checked){
        s="si";
        if (quest60 == document.f60.q60[i].value){
            var certo = document.getElementById("Q60B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q60B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 60!");
}
}


function resultados(){
    alert("Questões enviadas!" );
    porcent = (acertos * 100)/60;
    document.getElementById("porc").innerHTML ="% de Acertos: "+ porcent + "%";
    document.getElementById("erro").innerHTML ="Erros: " + erros;
    document.getElementById("cert").innerHTML ="Acertos: " + acertos;
}