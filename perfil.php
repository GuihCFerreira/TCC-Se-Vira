<?php

include('verifica_login.php');
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
    <script src="js/perfil.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
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
            vertical-align: top;
            width: 20px;
            position: relative;
            display: inline-block;
        }

        .perfil .perfil-img-top {
            vertical-align: top;
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 99;
        }

        .perfil:hover .perfil-img-top {
            display: inline;
        }

        .chartPie{

            width: 200 px;
        }
    </style>
</head>

<body id="page-top" style="background-color: #fbfbf8">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg  text-uppercase fixed-top" id="mainNav" style="background-color:#000">
        <div class="container">
            <img src="assets/img/favicon.png" />
            <p style="width:0.7rem;"></p>
            <a class="navbar-brand" href="home.php"><span id="se">Se</span><span id="vira"> Vira</span></a>

            <button class="navbar-toggler text-uppercase font-weight-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" id="menususpenso">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Meus Resultados</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="sevira.epizy.com/home.php">Home</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Quem Somos</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contato</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"><div class="perfil"><input type="image" src="img/sair.png" width="20" class="perfil" onclick="funcao1()"/><input type="image" src="img/sair_back.png" width="20" class="perfil-img-top" alt="Card Front" onclick="funcao1()"/></div></a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Masthead-->
    <header class="masthead text-white text-center" id="logo">
        <div class="container d-flex align-items-center flex-column">
            <!-- Masthead Avatar Image-->
            <img class="masthead-avatar mb-5" src="img/perfil.png" alt="..." />
            <!-- Masthead Heading-->
            <h1><?php echo $_SESSION['nome']; ?></h1>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Masthead Subheading-->
            <p class="masthead-subheading font-weight-light mb-0">Area do Usuário</p>
        </div>
    </header>
    <!-- Portfolio Section-->
    <section class="page-section portfolio" id="portfolio">
        <div class="container">
            <!-- Portfolio Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Resultados</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
           
            <div class="chartPie">
            <canvas id="myChart"></canvas>
            </div>
<script>
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Acertos','Erros'],
        datasets: [{
            label: 'Acertos:',
            data: [30, 60],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',               
            ],
            borderColor: [               
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        maintainAspectRatio: false,
        aspectRatio: 1,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Enem Exatas 2021',
                position: 'bottom'
            }
        }
    }
    
});
</script> 

            
       
    </section>

    <!-- About Section-->


    

    <section class="page-section  text-white mb-0" id="about">
        <div class="container">
            <!-- About Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-white">Sobre Nós</h2>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
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
                                <img class="img-fluid rounded mb-5" src="assets/img/portfolio/est03.png" alt="..." />
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