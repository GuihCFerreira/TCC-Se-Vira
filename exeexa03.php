<?php
include('verifica_login.php');
include('conexao.php'); ?><!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="icon" href="images/favicon.png" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Exercicios</title>
    <!-- CSS externo -->
    <link rel="stylesheet" href="css/aula20.css" />
</head>
<body>

    <main class="tela-principal">

        <section class='conteudos'>

            <h1 id="lista">Lista Exercícios</h1>
            <div id="codigo">
                <span id="hora">00:</span><span id="minuto">00:</span><span id="segundo">00</span><br>
            </div>

            <article class='centro' id='instrucoes'>
                Leia a questão e clique na resposta correta
            </article>
            

            <article class='questoes'>
                
                <header class='questao'>
                    <span id='numQuestao'></span>
                    <h2 id='pergunta'></h2>
                    <h2 id='enunciado'></h2>
                </header>

                <div class='corpo'>
                    <ol type='A' id='alternativas'>
                        <li id='a' value='1A' class='respostas' onClick='verificarSeAcertou(this, this)'></li>
                        <li id='b' value='1B' class='respostas' onClick='verificarSeAcertou(this, this)'></li>
                        <li id='c' value='1C' class='respostas' onClick='verificarSeAcertou(this, this)'></li>
                        <li id='d' value='1D' class='respostas' onClick='verificarSeAcertou(this, this)'></li>
                        <li id='e' value='1E' class='respostas' onClick='verificarSeAcertou(this, this)'></li>
                        
                    </ol>
                </div>
            </article>
             <div id="barra">
                <div id="barrafull"></div>
            </div>
            <article id='aviso'>Questão <span id='numero'></span> de <span id='total'></span></article>
            <article id='erros'>Questão <span id='numero'></span> de <span id='total'></span></article>
           
          
            <button id="nova" onclick="location.href='home.php'">Home</button>
</section>

      
    </main>

<!-- JS externo -->
<script src="js/exeexa03.js"></script>

</body>
</html>