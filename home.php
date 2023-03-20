<?php
session_start();
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>SE VIRA</title>
        <!-- java-->
        <script src="js/home.js"></script>
        
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
        <link rel="icon" type="imagem/png" href="assets/img/favicon.png" />
        <style>
.perfil {
  vertical-align:top; 
  width: 20px;
  position: relative;
  display: inline-block;
}
.perfil .perfil-img-top {
  vertical-align:top; 
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
.perfil:hover .perfil-img-top {
  display: inline;
}
        </style>
    </head>
    <body id="page-top" style="background-color: #fbfbf8">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg  text-uppercase fixed-top" id="mainNav" style="background-color:#000">
            <div class="container">
                <img src="assets/img/favicon.png"/>
                <p style="width:0.7rem;"></p>
                <a class="navbar-brand" href="#page-top"><span id="se">Se</span><span id="vira"> Vira</span></a>
                
                <button class="navbar-toggler text-uppercase font-weight-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" id="menususpenso">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#simulados">Simulados</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Como Estudar</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Quem Somos</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contato</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="perfil.php"><div class="perfil"><img src="img/perfil.png" width="20"  class="perfil"/><img src="img/perfil_back.png" width="20" class="perfil-img-top" alt="Card Front"></div></a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"><div class="perfil"><input type="image" src="img/sair.png" width="20" class="perfil" onclick="funcao1()"/><input type="image" src="img/sair_back.png" width="20" class="perfil-img-top" alt="Card Front" onclick="funcao1()"/></div></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Masthead-->
        <header class="masthead text-white text-center" id="logo">
            <div class="container d-flex align-items-center flex-column">
                <!-- Masthead Avatar Image-->
                <img class="masthead-avatar mb-5" src="assets/img/pic.png" alt="..." />
                <!-- Masthead Heading-->
                <h1 class="masthead-heading text-uppercase mb-0"><span id="se">Se</span><span id="vira"> Vira</span></h1>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Masthead Subheading-->
                <p class="masthead-subheading font-weight-light mb-0">Site de Simulados e Estudos</p>
            </div>
        </header>

        <section class="page-section portfolio" id="simulados">

            <div class="container">
                <!-- Portfolio Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Exercícios Vestibular</h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Portfolio Grid Items-->
                <div class="row justify-content-center">
                    <!-- Portfolio Item 1-->
                    <div class="col-md-6 col-lg-4 mb-5">
                         <a onclick="var rdm = Math.floor(Math.random() * 5);
    switch(rdm){
     case 1:
         location.href = 'exevar02.php';
     break; 
     case 2:
         location.href = 'exevar03.php';
     break; 
     case 3:
         location.href = 'exevar04.php';
     break; 
     case 4:
         location.href = 'exevar04-2.php';
     break; 
     case 5:
         location.href = 'exevar03-2.php';
     break; 
    }"><div class="portfolio-item mx-auto" data-bs-toggle="modal" >
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                               <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/exe01.png" alt="..." />
                        </div></a>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <a onclick="var rdm = Math.floor(Math.random() * 5);
    switch(rdm){
     case 1:
         location.href = 'exeexa02.php';
     break; 
     case 2:
         location.href = 'exeexa03.php';
     break; 
     case 3:
         location.href = 'exeexa04.php';
     break; 
     case 4:
         location.href = 'exeexa04-2.php';
     break; 
     case 5:
         location.href = 'exeexa03-2.php';
     break; 
    }">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" >
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/exe02.png" alt="..." />
                        </div></a>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5"><a onclick="var rdm = Math.floor(Math.random() * 5);
    switch(rdm){
        case 1:
    location.href = 'exeexa04.php';
     break;
     case 2:
         location.href = 'exehum02.php';
     break; 
     case 3:
         location.href = 'exehum03.php';
     break; 
     case 4:
         location.href = 'exehum04.php';
     break; 
     case 5:
         location.href = 'exehum03-2.php';
     break; 
    }">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" >
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/exe03.png" alt="..." />
                        </div></a>
                    </div>
                    
                </div>
            </div>
        </section>
        <!-- Portfolio Section-->
        <section class="page-section portfolio" id="enem">

            <div class="container">
                <!-- Portfolio Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase mb-0" style="color:#ffef4b">Simulados ENEM</h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div class="divider-custom-line" style="background-color:#ffef4b"></div>
                    <div class="divider-custom-icon" style="color:#ffef4b"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line" style="background-color:#ffef4b"></div>
                </div>
                <!-- Portfolio Grid Items-->
                <div class="row justify-content-center">
                    <!-- Portfolio Item 1-->
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal11">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/enem2021.png" alt="..." />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal21">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/enem2020.png" alt="..." />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal31">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/enem2019.png" alt="..." />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section class="page-section portfolio" id="portfolio">

            <div class="container">
                <!-- Portfolio Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Como Estudar</h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Portfolio Grid Items-->
                <div class="row justify-content-center">
                    <!-- Portfolio Item 1-->
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/port01.png" alt="..." />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/port02.png" alt="..." />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/port03.png" alt="..." />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/port04.png" alt="..." />
                        </div>
                    </div>
                    
                    <!-- Portfolio Item 2-->
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" >
                            <div >
                                <div class="portfolio-item-caption-content text-center text-white"></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/port05.png" alt="..." />
                        </div>
                    </div>
                    <!-- Portfolio Item 3-->
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/port06.png" alt="..." />
                        </div>
                    </div>
                    <!-- Portfolio Item 4-->
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal7">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/port07.png" alt="..." />
                        </div>
                    </div>
                    <!-- Portfolio Item 5-->
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal8">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/port08.png" alt="..." />
                        </div>
                    </div>
                    <!-- Portfolio Item 6-->
                    <div class="col-md-6 col-lg-4">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal9">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/port09.png" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
    <section class="page-section  text-white mb-0" id="about">
        <div class="container">
            <!-- About Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase" style="color:#ffef4b">Sobre Nós</h2>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line" style="background-color:#ffef4b"></div>
                <div class="divider-custom-icon" style="color:#ffef4b"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line" style="background-color:#ffef4b"></div>
            </div>
            <!-- About Section Content-->
            <div class="row">
                <div class="col-lg-4 ms-auto">
                    <p class="lead">Olá Estudante! Aqui você poderá estudar de maneira ativa e desafiadora. Ao deslizar para cima no site haverá dicas, exercícios e provas antigas pelas respectivas faculdades. Treine e se prepare até chegar o grandioso dia de sua prova.
                        </br>
                        </br>
                        Porque do nome SE VIRA? Somos um grupo de 5 pessoas que preparam esse projeto diante do nosso TCC (Trabalho de Conclusão do Curso) pensando em ajudar os estudantes para entrarem nos ensinos superiores, mas como não podemos lecionar nenhuma matéria, decidimos criar o SE VIRA tendo o propósito de ter um estudo ativo por meio dos exercícios e provas antigas.</p>
                </div>
                <div class="col-lg-4 me-auto">
                    <p class="lead">O nome SE VIRA se interliga com a situação dos vestibulandos. A época do vestibular não é fácil, principalmente porque é a mesma que os estudantes estão se tornando adultos, logo terão eu começar a se vivarem sozinhos. Da mesma maneira que nosso professor mandou nos virarmos para construir o TCC, agora vocês, estudantes, se viram para passar na faculdade.
                        </br>
                        </br>
                        Desejamos um longa jornada de sucesso nos estudos, lembre-se que é errando que se aprende, erre quantas vezes for necessários nos simulados para que acertem o máximo no dia da prova!</p>
                </div>
            </div>

        </div>
    </section>
        <!-- Contact Section-->
        <section class="page-section" id="contact">
            <div class="container">
                <!-- Contact Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Nos Contate</h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Contact Section Form-->
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!-->
                        <form action="https://formsubmit.co/3dstccgrp3@gmail.com" class="formu" method="POST">
                            <input type="text" name="name" placeholder="Seu Nome" id="name" style="background-color: #d3d3d3;" required>
                            <input type="email" name="email" placeholder="Seu Email" id="email" style="background-color: #d3d3d3" required>
                            <textarea name="message" placeholder="Mande para nós alguma susestão ou erro" id="mensagem" style="background-color: #d3d3d3" required></textarea>
                            <input type="hidden" name="_next" value="sevira.epizy.com/home.php">
                            <button type="submit">Enviar</button>
                       </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="footer text-center"style="background-color: #012352;">
            <div class="container" >
                <div class="row">
                    <!-- Footer Location-->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4" style="color:#ffef4b">Turma</h4>
                        <p class="lead mb-0">
                            3ºDS 2022
                            <br/>
                            Turma A Grupo 3 de TCC
                        </p>
                    </div>
                    <!-- Footer Social Icons-->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4" style="color:#ffef4b">Integrantes</h4>
                        <p class="lead mb-0" >
                            Ana Beatriz Nascimento <br/>
                            Gabriel Morais de Oliveira <br/>
                            Guilherme de Carvalho Ferreira <br/>
                            Inácio Santana Silva <br/>
                            Júlia Cristina Lopes Coimbra
                        </p>
                    </div>
                    <!-- Footer About Text-->
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4" style="color:#ffef4b">Instituição</h4>
                        <p class="lead mb-0">
                            ETEC Dr. Júlio Cardoso
                            <br/>
                            Professor: Gustavo Miranda
                            
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Copyright Section-->
        <div class="copyright py-4 text-center text-white"  style="background-color:#000">
            <div class="container"><small>Copyright &copy; Your Website 2022</small></div>
        </div>
        <!-- Portfolio Modals-->
        <!-- Portfolio Modal 1-->
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Matemática</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/est01.png" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"></p>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal11" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content" style="background-color: #133563;">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title  text-uppercase mb-0" style="color: #ffef4b;">ENEM 2021</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line" style="background-color: #ffef4b;"></div>
                                        <div class="divider-custom-icon" style="color: #ffef4b;"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line" style="background-color: #ffef4b;"></div>
                                    </div>
                                        <a href="hum2021.html">
                                             <img style="width: 50%; display: inline-block; border-radius: 0.3rem;" src="assets/img/portfolio/enem/hum21.png" alt="..." />
                                        </a>

                                        <div style="height: 1.5rem;"></div>
                                    
                                        <div>
                                        <a href="exatas21.html">
                                             <img style="width: 50%; display: inline-block; border-radius: 0.3rem;" src="assets/img/portfolio/enem/exa21.png" alt="..." />
                                        </a>
                                     
                                        <div style="height: 2.5rem;"></div>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 2-->
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Português</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/est02.png" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"></p>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal21" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content" style="background-color: #133563;">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title  text-uppercase mb-0" style="color: #ffef4b;">ENEM 2020</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line" style="background-color: #ffef4b;"></div>
                                        <div class="divider-custom-icon" style="color: #ffef4b;"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line" style="background-color: #ffef4b;"></div>
                                    </div>
                                        <a href="huma20.html">
                                             <img style="width: 50%; display: inline-block; border-radius: 0.3rem;" src="assets/img/portfolio/enem/hum20.png" alt="..." />
                                        </a>

                                        <div style="height: 1.5rem;"></div>
                                    
                                        <div>
                                        <a href="exa20.html">
                                             <img style="width: 50%; display: inline-block; border-radius: 0.3rem;" src="assets/img/portfolio/enem/exa20.png" alt="..." />
                                        </a>
                                     
                                        <div style="height: 2.5rem;"></div>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 3-->
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Biologia</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                 <!-- Muda a imagem de dentro-->
                                    <img  class="img-fluid rounded mb-5" src="assets/img/portfolio/est03.png" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"></p>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal31" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content" style="background-color: #133563;">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title  text-uppercase mb-0" style="color: #ffef4b;">ENEM 2019</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line" style="background-color: #ffef4b;"></div>
                                        <div class="divider-custom-icon" style="color: #ffef4b;"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line" style="background-color: #ffef4b;"></div>
                                    </div>
                                        <a href="huma19.html">
                                             <img style="width: 50%; display: inline-block; border-radius: 0.3rem;" src="assets/img/portfolio/enem/hum19.png" alt="..." />
                                        </a>

                                        <div style="height: 1.5rem;"></div>
                                    
                                        <div>
                                        <a href="exa19.html">
                                             <img style="width: 50%; display: inline-block; border-radius: 0.3rem;" src="assets/img/portfolio/enem/exa19.png" alt="..." />
                                        </a>
                                     
                                        <div style="height: 2.5rem;"></div>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 4-->
        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Química</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/est04.png" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"></p>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 5-->
        
        <!-- Portfolio Modal 6-->
        <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">História</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/est06.png" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"></p>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal7" tabindex="-1" aria-labelledby="portfolioModal7" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Geografia</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/est07.png" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"></p>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal8" tabindex="-1" aria-labelledby="portfolioModal8" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Línguas Estrangeiras</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/est08.png" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"></p>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="portfolio-modal modal fade" id="portfolioModalenem21" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content" style="background-color: #133563;">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title  text-uppercase mb-0" style="color: #ffef4b;">ENEM</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line" style="background-color: #ffef4b;"></div>
                                        <div class="divider-custom-icon" style="color: #ffef4b;"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line" style="background-color: #ffef4b;"></div>
                                    </div>
                                        <a href="hum2021.html">
                                             <img style="width: 50%; display: inline-block; border-radius: 0.3rem;" src="assets/img/portfolio/enem/hum21.png" alt="..." />
                                        </a>

                                        <div style="height: 1.5rem;"></div>
                                    
                                        <div>
                                        <a href="exa21.html">
                                             <img style="width: 50%; display: inline-block; border-radius: 0.3rem;" src="assets/img/portfolio/enem/exa21.png" alt="..." />
                                        </a>
                                     
                                        <div style="height: 2.5rem;"></div>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="portfolio-modal modal fade" id="portfolioModal9" tabindex="-1" aria-labelledby="portfolioModal9" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Física</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/est09.png" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"></p>
                                    <button class="btn-dentro" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Fechar janela
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
</html>
