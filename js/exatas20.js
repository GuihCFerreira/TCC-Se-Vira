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
    questao55();  
    questao56();  
    questao57();
    questao58();     
    questao59();  
    questao60();
    questao61();
    questao62();     
    questao63();  
    questao64();
    questao65();  
    questao66();  
    questao67();
    questao68();     
    questao69();  
    questao70();
    questao72();
    questao73();
    questao74();
    questao75();
    questao76();
    questao77();
    questao78();
    questao79();
    questao80();
    questao81();
    questao82();
    questao83();
    questao84();
    questao85();
    questao86();
    questao87();
    resultados();
	}

function questao1(){
    var s="no";
    var quest1 = "q1b";
for(var i=0;i<document.f1.q1.length;i++)
{
    if(document.f1.q1[i].checked){
        s="si";
        if (quest1 == document.f1.q1[i].value){
            var certo = document.getElementById("Q1B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q1B");
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
    var quest2 = "q2d";
for(var i=0;i<document.f2.q2.length;i++)
{
    if(document.f2.q2[i].checked){
        s="si";
        if (quest2 == document.f2.q2[i].value){
            var certo = document.getElementById("Q2D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q2D");
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
    var quest3 = "q3a";
for(var i=0;i<document.f3.q3.length;i++)
{
    if(document.f3.q3[i].checked){
        s="si";
        if (quest3 == document.f3.q3[i].value){
            var certo = document.getElementById("Q3A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q3A");
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
    var quest4 = "q4b";
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
    var quest5 = "q5e";
for(var i=0;i<document.f5.q5.length;i++)
{
    if(document.f5.q5[i].checked){
        s="si";
        if (quest5 == document.f5.q5[i].value){
            var certo = document.getElementById("Q5E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q5E");
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
    alert("Selecione uma alternativa para a questão 3!");
}
}
function questao7(){
    var s="no";
    var quest7 = "q7c";
for(var i=0;i<document.f7.q7.length;i++)
{
    if(document.f7.q7[i].checked){
        s="si";
        if (quest7 == document.f7.q7[i].value){
            var certo = document.getElementById("Q7C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q7C");
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
    var quest8 = "q8b";
for(var i=0;i<document.f8.q8.length;i++)
{
    if(document.f8.q8[i].checked){
        s="si";
        if (quest8 == document.f8.q8[i].value){
            var certo = document.getElementById("Q8B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q8B");
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
    var quest9 = "q9a";
for(var i=0;i<document.f9.q9.length;i++)
{
    if(document.f9.q9[i].checked){
        s="si";
        if (quest9 == document.f9.q9[i].value){
            var certo = document.getElementById("Q9A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q9A");
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
    var quest10 = "q10a";
for(var i=0;i<document.f10.q10.length;i++)
{
    if(document.f10.q10[i].checked){
        s="si";
        if (quest10 == document.f10.q10[i].value){
            var certo = document.getElementById("Q10A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q10A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 10!");
}
}function questao11(){
    var s="no";
    var quest11 = "q11d";
for(var i=0;i<document.f11.q11.length;i++)
{
    if(document.f11.q11[i].checked){
        s="si";
        if (quest11 == document.f11.q11[i].value){
            var certo = document.getElementById("Q11D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q11D");
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
    var quest13 = "q13b";
for(var i=0;i<document.f13.q13.length;i++)
{
    if(document.f13.q13[i].checked){
        s="si";
        if (quest13 == document.f13.q13[i].value){
            var certo = document.getElementById("Q13B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q13B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 13!");
}
}function questao14(){
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
    var quest15 = "q15c";
for(var i=0;i<document.f15.q15.length;i++)
{
    if(document.f15.q15[i].checked){
        s="si";
        if (quest15 == document.f15.q15[i].value){
            var certo = document.getElementById("Q15C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q15C");
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
    var quest16 = "q16d";
for(var i=0;i<document.f16.q16.length;i++)
{
    if(document.f16.q16[i].checked){
        s="si";
        if (quest16 == document.f16.q16[i].value){
            var certo = document.getElementById("Q16D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q16D");
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
    var quest17 = "q17a";
for(var i=0;i<document.f17.q17.length;i++)
{
    if(document.f17.q17[i].checked){
        s="si";
        if (quest17 == document.f17.q17[i].value){
            var certo = document.getElementById("Q17A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q17A");
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
    var quest18 = "q18a";
for(var i=0;i<document.f18.q18.length;i++)
{
    if(document.f18.q18[i].checked){
        s="si";
        if (quest18 == document.f18.q18[i].value){
            var certo = document.getElementById("Q18A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q18A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 18!");
}
}function questao19(){
    var s="no";
    var quest19 = "q19e";
for(var i=0;i<document.f19.q19.length;i++)
{
    if(document.f19.q19[i].checked){
        s="si";
        if (quest19 == document.f19.q19[i].value){
            var certo = document.getElementById("Q19E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q19E");
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
    var quest20 = "q20c";
for(var i=0;i<document.f15.q15.length;i++)
{
    if(document.f20.q20[i].checked){
        s="si";
        if (quest20 == document.f20.q20[i].value){
            var certo = document.getElementById("Q20C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q20C");
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
    var quest21 = "q21d";
for(var i=0;i<document.f21.q21.length;i++)
{
    if(document.f21.q21[i].checked){
        s="si";
        if (quest21 == document.f21.q21[i].value){
            var certo = document.getElementById("Q21D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q21D");
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
    var quest22 = "q22a";
for(var i=0;i<document.f22.q22.length;i++)
{
    if(document.f22.q22[i].checked){
        s="si";
        if (quest22 == document.f22.q22[i].value){
            var certo = document.getElementById("Q22A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q22A");
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
    var quest23 = "q23e";
for(var i=0;i<document.f23.q23.length;i++)
{
    if(document.f23.q23[i].checked){
        s="si";
        if (quest23 == document.f23.q23[i].value){
            var certo = document.getElementById("Q23E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q23E");
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
    var quest24 = "q24c";
for(var i=0;i<document.f24.q24.length;i++)
{
    if(document.f24.q24[i].checked){
        s="si";
        if (quest24 == document.f24.q24[i].value){
            var certo = document.getElementById("Q24C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q24C");
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
    var quest26 = "q26e";
for(var i=0;i<document.f26.q26.length;i++)
{
    if(document.f26.q26[i].checked){
        s="si";
        if (quest26 == document.f26.q26[i].value){
            var certo = document.getElementById("Q26E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q26E");
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
    var quest27 = "q27c";
for(var i=0;i<document.f27.q27.length;i++)
{
    if(document.f27.q27[i].checked){
        s="si";
        if (quest27 == document.f27.q27[i].value){
            var certo = document.getElementById("Q27C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q27C");
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

function questao30(){
    var s="no";
    var quest30 = "q30c";
for(var i=0;i<document.f30.q30.length;i++)
{
    if(document.f30.q30[i].checked){
        s="si";
        if (quest30 == document.f30.q30[i].value){
            var certo = document.getElementById("Q30C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q30C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 30!");
}
}
function questao31(){
    var s="no";
    var quest31 = "q31d";
for(var i=0;i<document.f31.q31.length;i++)
{
    if(document.f31.q31[i].checked){
        s="si";
        if (quest31 == document.f31.q31[i].value){
            var certo = document.getElementById("Q31D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q31D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 31!");
}
}

function questao32(){
    var s="no";
    var quest32 = "q32e";
for(var i=0;i<document.f32.q32.length;i++)
{
    if(document.f32.q32[i].checked){
        s="si";
        if (quest32 == document.f32.q32[i].value){
            var certo = document.getElementById("Q32E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q32E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 32!");
}
}

function questao33(){
    var s="no";
    var quest33 = "q33e";
for(var i=0;i<document.f33.q33.length;i++)
{
    if(document.f33.q33[i].checked){
        s="si";
        if (quest33 == document.f33.q33[i].value){
            var certo = document.getElementById("Q33E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q33E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 33!");
}
}

function questao34(){
    var s="no";
    var quest34 = "q34a";
for(var i=0;i<document.f34.q34.length;i++)
{
    if(document.f34.q34[i].checked){
        s="si";
        if (quest34 == document.f34.q34[i].value){
            var certo = document.getElementById("Q34A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q34A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 34!");
}
}

function questao35(){
    var s="no";
    var quest35 = "q35a";
for(var i=0;i<document.f35.q35.length;i++)
{
    if(document.f35.q35[i].checked){
        s="si";
        if (quest35 == document.f35.q35[i].value){
            var certo = document.getElementById("Q35A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q35A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 35!");
}
}



function questao36(){
    var s="no";
    var quest36 = "q36a";
for(var i=0;i<document.f36.q36.length;i++)
{
    if(document.f36.q36[i].checked){
        s="si";
        if (quest36 == document.f36.q36[i].value){
            var certo = document.getElementById("Q36A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q36A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 36!");
}
}

function questao37(){
    var s="no";
    var quest37 = "q37d";
for(var i=0;i<document.f37.q37.length;i++)
{
    if(document.f37.q37[i].checked){
        s="si";
        if (quest37 == document.f37.q37[i].value){
            var certo = document.getElementById("Q37D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q37D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 37!");
}
}

function questao38(){
    var s="no";
    var quest38 = "q38d";
for(var i=0;i<document.f38.q38.length;i++)
{
    if(document.f38.q38[i].checked){
        s="si";
        if (quest38 == document.f38.q38[i].value){
            var certo = document.getElementById("Q38D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q38D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 38!");
}
}

function questao39(){
    var s="no";
    var quest39 = "q39b";
for(var i=0;i<document.f39.q39.length;i++)
{
    if(document.f39.q39[i].checked){
        s="si";
        if (quest39 == document.f39.q39[i].value){
            var certo = document.getElementById("Q39B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q39B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 39!");
}
}

function questao40(){
    var s="no";
    var quest40 = "q40b";
for(var i=0;i<document.f40.q40.length;i++)
{
    if(document.f40.q40[i].checked){
        s="si";
        if (quest40 == document.f40.q40[i].value){
            var certo = document.getElementById("Q40B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q40B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 40!");
}
}
function questao41(){
    var s="no";
    var quest41 = "q41c";
for(var i=0;i<document.f41.q41.length;i++)
{
    if(document.f41.q41[i].checked){
        s="si";
        if (quest41 == document.f41.q41[i].value){
            var certo = document.getElementById("Q41C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q41C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 41!");
}
}

function questao42(){
    var s="no";
    var quest42 = "q42d";
for(var i=0;i<document.f42.q42.length;i++)
{
    if(document.f42.q42[i].checked){
        s="si";
        if (quest42 == document.f42.q42[i].value){
            var certo = document.getElementById("Q42D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q42D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 42!");
}
}

function questao43(){
    var s="no";
    var quest43 = "q43c";
for(var i=0;i<document.f43.q43.length;i++)
{
    if(document.f43.q43[i].checked){
        s="si";
        if (quest43 == document.f43.q43[i].value){
            var certo = document.getElementById("Q43C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q43C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 43!");
}
}

function questao44(){
    var s="no";
    var quest44 = "q44e";
for(var i=0;i<document.f44.q44.length;i++)
{
    if(document.f44.q44[i].checked){
        s="si";
        if (quest44 == document.f44.q44[i].value){
            var certo = document.getElementById("Q44E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q44E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 44!");
}
}

function questao45(){
    var s="no";
    var quest45 = "q45b";
for(var i=0;i<document.f45.q45.length;i++)
{
    if(document.f45.q45[i].checked){
        s="si";
        if (quest45 == document.f45.q45[i].value){
            var certo = document.getElementById("Q45B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q45B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 45!");
}
}



function questao46(){
    var s="no";
    var quest46 = "q46b";
for(var i=0;i<document.f46.q46.length;i++)
{
    if(document.f46.q46[i].checked){
        s="si";
        if (quest46 == document.f46.q46[i].value){
            var certo = document.getElementById("Q46B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q46B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 46!");
}
}

function questao47(){
    var s="no";
    var quest47 = "q47a";
for(var i=0;i<document.f47.q47.length;i++)
{
    if(document.f47.q47[i].checked){
        s="si";
        if (quest47 == document.f47.q47[i].value){
            var certo = document.getElementById("Q47A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q47A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 47!");
}
}

function questao48(){
    var s="no";
    var quest48 = "q48c";
for(var i=0;i<document.f48.q48.length;i++)
{
    if(document.f48.q48[i].checked){
        s="si";
        if (quest48 == document.f48.q48[i].value){
            var certo = document.getElementById("Q48C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q48C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 48!");
}
}

function questao49(){
    var s="no";
    var quest49 = "q49c";
for(var i=0;i<document.f49.q49.length;i++)
{
    if(document.f49.q49[i].checked){
        s="si";
        if (quest49 == document.f49.q49[i].value){
            var certo = document.getElementById("Q49C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q49C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 49!");
}
}

function questao50(){
    var s="no";
    var quest50 = "q50c";
for(var i=0;i<document.f50.q50.length;i++)
{
    if(document.f50.q50[i].checked){
        s="si";
        if (quest50 == document.f50.q50[i].value){
            var certo = document.getElementById("Q50C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q50C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 50!");
}
}

function questao51(){
    var s="no";
    var quest51 = "q51b";
for(var i=0;i<document.f51.q51.length;i++)
{
    if(document.f51.q51[i].checked){
        s="si";
        if (quest51 == document.f51.q51[i].value){
            var certo = document.getElementById("Q51B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q51B");
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
    var quest52 = "q52a";
for(var i=0;i<document.f52.q52.length;i++)
{
    if(document.f52.q52[i].checked){
        s="si";
        if (quest52 == document.f52.q52[i].value){
            var certo = document.getElementById("Q52A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q52A");
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
    var quest54 = "q54b";
for(var i=0;i<document.f54.q54.length;i++)
{
    if(document.f54.q54[i].checked){
        s="si";     
        if (quest54 == document.f54.q54[i].value){
            var certo = document.getElementById("Q54B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q54B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 54!");
}
}

function questao55(){
    var s="no";
    var quest55 = "q55a";
for(var i=0;i<document.f55.q55.length;i++)
{
    if(document.f55.q55[i].checked){
        s="si";
        if (quest55 == document.f55.q55[i].value){
            var certo = document.getElementById("Q55A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q55A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 55!");
}
}

function questao56(){
    var s="no";
    var quest56 = "q56d";
for(var i=0;i<document.f56.q56.length;i++)
{
    if(document.f56.q56[i].checked){
        s="si";
        if (quest56 == document.f56.q56[i].value){
            var certo = document.getElementById("Q56D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q56D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 56!");
}
}

function questao57(){
    var s="no";
    var quest57 = "q57c";
for(var i=0;i<document.f57.q57.length;i++)
{
    if(document.f57.q57[i].checked){
        s="si";
        if (quest57 == document.f57.q57[i].value){
            var certo = document.getElementById("Q57C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q57C");
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
    var quest58 = "q58b";
for(var i=0;i<document.f58.q58.length;i++)
{
    if(document.f58.q58[i].checked){
        s="si";
        if (quest58 == document.f58.q58[i].value){
            var certo = document.getElementById("Q58B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q58B");
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
    var quest59 = "q59c";
for(var i=0;i<document.f59.q59.length;i++)
{
    if(document.f59.q59[i].checked){
        s="si";
        if (quest59 == document.f59.q59[i].value){
            var certo = document.getElementById("Q59C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q59C");
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
    var quest60 = "q60e";
for(var i=0;i<document.f60.q60.length;i++)
{
    if(document.f60.q60[i].checked){
        s="si";
        if (quest60 == document.f60.q60[i].value){
            var certo = document.getElementById("Q60E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q60E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 60!");
}
}
function questao61(){
    var s="no";
    var quest61 = "q61e";
for(var i=0;i<document.f61.q61.length;i++)
{
    if(document.f61.q61[i].checked){
        s="si";
        if (quest61 == document.f61.q61[i].value){
            var certo = document.getElementById("Q61E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q61E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 61!");
}
}

function questao62(){
    var s="no";
    var quest62 = "q62e";
for(var i=0;i<document.f62.q62.length;i++)
{
    if(document.f62.q62[i].checked){
        s="si";
        if (quest62 == document.f62.q62[i].value){
            var certo = document.getElementById("Q62E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q62E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 62!");
}
}

function questao63(){
    var s="no";
    var quest63 = "q63b";
for(var i=0;i<document.f63.q63.length;i++)
{
    if(document.f63.q63[i].checked){
        s="si";
        if (quest63 == document.f63.q63[i].value){
            var certo = document.getElementById("Q63B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q63B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 63!");
}
}

function questao64(){
    var s="no";
    var quest64 = "q64c";
for(var i=0;i<document.f64.q64.length;i++)
{
    if(document.f64.q64[i].checked){
        s="si";
        if (quest64 == document.f64.q64[i].value){
            var certo = document.getElementById("Q64C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q64C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 64!");
}
}

function questao65(){
    var s="no";
    var quest65 = "q65a";
for(var i=0;i<document.f65.q65.length;i++)
{
    if(document.f65.q65[i].checked){
        s="si";
        if (quest65 == document.f65.q65[i].value){
            var certo = document.getElementById("Q65A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q65A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 65!");
}
}



function questao66(){
    var s="no";
    var quest66 = "q66c";
for(var i=0;i<document.f66.q66.length;i++)
{
    if(document.f66.q66[i].checked){
        s="si";
        if (quest66 == document.f66.q66[i].value){
            var certo = document.getElementById("Q66C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q66C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 66!");
}
}

function questao67(){
    var s="no";
    var quest67 = "q67a";
for(var i=0;i<document.f67.q67.length;i++)
{
    if(document.f67.q67[i].checked){
        s="si";
        if (quest67 == document.f67.q67[i].value){
            var certo = document.getElementById("Q67A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q67A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 67!");
}
}

function questao68(){
    var s="no";
    var quest68 = "q68c";
for(var i=0;i<document.f68.q68.length;i++)
{
    if(document.f68.q68[i].checked){
        s="si";
        if (quest68 == document.f68.q68[i].value){
            var certo = document.getElementById("Q68C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q68C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 68!");
}
}

function questao69(){
    var s="no";
    var quest69 = "q69e";
for(var i=0;i<document.f69.q69.length;i++)
{
    if(document.f69.q69[i].checked){
        s="si";
        if (quest69 == document.f69.q69[i].value){
            var certo = document.getElementById("Q69E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q69E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 69!");
}
}

function questao70(){
    var s="no";
    var quest70 = "q70e";
for(var i=0;i<document.f70.q70.length;i++)
{
    if(document.f70.q70[i].checked){
        s="si";
        if (quest70 == document.f70.q70[i].value){
            var certo = document.getElementById("Q70E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q70E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 70!");
}
}
function questao72(){
    var s="no";
    var quest72 = "q72b";
for(var i=0;i<document.f72.q72.length;i++)
{
    if(document.f72.q72[i].checked){
        s="si";
        if (quest72 == document.f72.q72[i].value){
            var certo = document.getElementById("Q72B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q72B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 72!");
}
}

function questao73(){
    var s="no";
    var quest73 = "q73c";
for(var i=0;i<document.f73.q73.length;i++)
{
    if(document.f73.q73[i].checked){
        s="si";
        if (quest73 == document.f73.q73[i].value){
            var certo = document.getElementById("Q73C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q73C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 73!");
}
}
function questao74(){
    var s="no";
    var quest74 = "q74c";
for(var i=0;i<document.f74.q74.length;i++)
{
    if(document.f74.q74[i].checked){
        s="si";     
        if (quest74 == document.f74.q74[i].value){
            var certo = document.getElementById("Q74C");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q74C");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 74!");
}
}

function questao75(){
    var s="no";
    var quest75 = "q75a";
for(var i=0;i<document.f55.q55.length;i++)
{
    if(document.f75.q75[i].checked){
        s="si";
        if (quest75 == document.f75.q75[i].value){
            var certo = document.getElementById("Q75A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q75A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 75!");
}
}
function questao76(){
    var s="no";
    var quest76 = "q76d";
for(var i=0;i<document.f76.q76.length;i++)
{
    if(document.f76.q76[i].checked){
        s="si";
        if (quest76 == document.f76.q76[i].value){
            var certo = document.getElementById("Q76D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q76D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 76!");
}
}function questao77(){
    var s="no";
    var quest77 = "q77b";
for(var i=0;i<document.f77.q77.length;i++)
{
    if(document.f77.q77[i].checked){
        s="si";
        if (quest77 == document.f77.q77[i].value){
            var certo = document.getElementById("Q77B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q77B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 77!");
}
}
function questao78(){
    var s="no";
    var quest78 = "q78e";
for(var i=0;i<document.f78.q78.length;i++)
{
    if(document.f78.q78[i].checked){
        s="si";
        if (quest78 == document.f78.q78[i].value){
            var certo = document.getElementById("Q78E");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q78E");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 78!");
}
}
function questao79(){
    var s="no";
    var quest79 = "q79a";
for(var i=0;i<document.f59.q59.length;i++)
{
    if(document.f79.q79[i].checked){
        s="si";
        if (quest79 == document.f79.q79[i].value){
            var certo = document.getElementById("Q79A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q79A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 79!");
}
}

function questao80(){
    var s="no";
    var quest80 = "q80d";
for(var i=0;i<document.f80.q80.length;i++)
{
    if(document.f80.q80[i].checked){
        s="si";
        if (quest80 == document.f80.q80[i].value){
            var certo = document.getElementById("Q80D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q80D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 80!");
}
}

function questao81(){
    var s="no";
    var quest81 = "q81b";
for(var i=0;i<document.f81.q81.length;i++)
{
    if(document.f81.q81[i].checked){
        s="si";
        if (quest81 == document.f81.q81[i].value){
            var certo = document.getElementById("Q81B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q81B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 81!");
}
}

function questao82(){
    var s="no";
    var quest82 = "q82a";
for(var i=0;i<document.f82.q82.length;i++)
{
    if(document.f82.q82[i].checked){
        s="si";
        if (quest82 == document.f82.q82[i].value){
            var certo = document.getElementById("Q82A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q82A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 82!");
}
}
function questao83(){
    var s="no";
    var quest83 = "q83d";
for(var i=0;i<document.f83.q83.length;i++)
{
    if(document.f83.q83[i].checked){
        s="si";
        if (quest83 == document.f83.q83[i].value){
            var certo = document.getElementById("Q83D");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q83D");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 83!");
}
}

function questao84(){
    var s="no";
    var quest84 = "q84b";
for(var i=0;i<document.f84.q84.length;i++)
{
    if(document.f84.q84[i].checked){
        s="si";
        if (quest84 == document.f84.q84[i].value){
            var certo = document.getElementById("Q84B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q84B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 84!");
}
}

function questao85(){
    var s="no";
    var quest85 = "q85b";
for(var i=0;i<document.f85.q85.length;i++)
{
    if(document.f85.q85[i].checked){
        s="si";
        if (quest85 == document.f85.q85[i].value){
            var certo = document.getElementById("Q85B");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q85B");
            certo.style.backgroundColor='#8b0000';
        }
    }
}
if(s=="no"){
    alert("Selecione uma alternativa para a questão 85!");
}
}

function questao86(){
    var s = "no";
    var quest86 = "q86b";
    for(var i=0;i<document.f86.q86.length;i++){
        if(document.f86.q86[i].checked){
            s = "si";
            if (quest86 == document.f86.q86[i].value){
                var certo = document.getElementById("Q86B");
                certo.style.backgroundColor='#008b00';
                acertos = acertos + 1;
            }else{
                var certo = document.getElementById("Q86B");
                erros = erros + 1;
                certo.style.backgroundColor='#8b0000';
            }
        }
    }
    if(s=="no"){
        
        alert("Selecione uma alternativa para a questão 86!");
    }
}


function questao87(){
    var s="no";
    var quest87 = "q87a";
for(var i=0;i<document.f87.q87.length;i++)
{
    if(document.f87.q87[i].checked){
        s="si";
        if (quest87 == document.f87.q87[i].value){
            var certo = document.getElementById("Q87A");
            certo.style.backgroundColor='#008b00';
            acertos = acertos + 1;
        }else{
            erros = erros + 1;
            var certo = document.getElementById("Q87A");
            certo.style.backgroundColor='#8b0000';
        }
    }
}


if(s=="no"){
    alert("Selecione uma alternativa para a questão 87!");
}
}



function resultados(){
    alert("Questões enviadas!" );
    porcent = (acertos * 100)/total;
    porcent = porcent.toFixed(2);   
    document.getElementById("porc").innerHTML ="% de Acertos: "+ porcent + "%";
    document.getElementById("erro").innerHTML ="Erros: " + erros;
    document.getElementById("cert").innerHTML ="Acertos: " + acertos;
}
     