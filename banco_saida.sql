-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: login
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alternativas_enem`
--

DROP TABLE IF EXISTS `alternativas_enem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alternativas_enem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `resposta` varchar(220) NOT NULL,
  `pergunta_id` int(11) NOT NULL,
  `val_resposta` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alternativas_enem`
--

LOCK TABLES `alternativas_enem` WRITE;
/*!40000 ALTER TABLE `alternativas_enem` DISABLE KEYS */;
INSERT INTO `alternativas_enem` VALUES (1,' multiplicação lenta',1,2),(2,'comunicação entre células.',1,2),(3,'adesão a diferentes tecidos.',1,2),(4,'diferenciação em células especializadas.',1,1),(5,'reconhecimento de células semelhantes.',1,2),(6,'A) destacar o seu processo de construção, dando enfoque, principalmente, a recursos expressivos.',2,2),(7,'B)manter um canal de comunicação entre leitor e autor por meio de mensagens subjetivas.',2,2),(8,'C)transmitir informações, fazendo referência a acontecimentos observados no mundo exterior.',2,1),(9,'D)persuadir o leitor, levando-o a tomar medidas para evitar os problemas ambientais.',2,2),(10,'E)transmitir os receios e reflexões do autor no que se refere ao fim do mundo.',2,2),(11,'A)contrapõe características da escrita e da fala.',3,2),(12,'B)ironiza a comunicação fora da norma-padrão.',3,2),(13,'C)substitui regionalismos por registros formais.',3,2),(14,'D)valoriza o uso de variedades populares.',3,1),(15,'E)defende novas regras gramaticais.',3,2),(16,'A)originalidade da iniciativa de homenagem à vida e à obra de Luiz Gonzaga.',4,2),(17,'B)falta de concorrentes ao prêmio de uma das associações mais antigas do mundo.',4,2),(18,'C)proeza da premiação de uma história ambientada no interior do Nordeste brasileiro.',4,1),(19,'D)escassez de investimentos para a produção cinematográfica independente no país.',4,2),(20,'E)importância da parceria entre brasileiros e britânicos para a realização das filmagens.',4,2),(21,'A)à menção a enfermidades que indicam falta de cuidado pessoal.',5,2),(22,'B)à referência a profissões já extintas que caracterizam a vida no campo.',5,2),(23,'C)aos nomes de personagens que acentuam aspectos de sua personalidade.',5,2),(24,'D)ao emprego de ditados populares que resgatam memórias e saberes coletivos',5,1),(25,'E)às descrições de costumes regionais que desmistificam crenças e superstições',5,2),(26,'A)\"[...] do estreante em longa-metragens László Nemes, vencedor do Grande Prêmio do Júri no último festival de Cannes\".',6,2),(27,'B)\"Ele é Saul (Géza Rohrig), um dos encarregados de conduzir as execuções de judeus [...]\".',6,2),(28,'C)[...] a câmera está o tempo todo com o personagem, seja por sobre seus ombros, seja por um close [...]\".',6,2),(29,'D)\"Saul percorre diferentes divisões de Auschwitz à procura de um rabino que possa conduzir o enterro da criança [...]\".',6,2),(30,'E)\"[...] premiar uma abordagem tão ousada e radical como Son of Saul não deixaria de ser um passo à frente dos votantes\".',6,1);
/*!40000 ALTER TABLE `alternativas_enem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perguntas_enem`
--

DROP TABLE IF EXISTS `perguntas_enem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perguntas_enem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `questao` varchar(2500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perguntas_enem`
--

LOCK TABLES `perguntas_enem` WRITE;
/*!40000 ALTER TABLE `perguntas_enem` DISABLE KEYS */;
INSERT INTO `perguntas_enem` VALUES (1,'2014 / Ciências da natureza e suas tecnologias.\r\nNa década de 1990, células do cordão umbilical de recém-nascidos humanos começaram a ser guardadas por criopreservação, uma vez que apresentam alto potencial terapêutico em consequência de suas características peculiares.\r\n\r\nO poder terapêutico dessas células baseia-se em sua capacidade de'),(2,'ENEM 2021\r\nUm asteroide de cerca de um mil metros de diâmetro, viajando a 288 mil quilômetros por hora, passou a uma distância insignificante ― em termos cósmicos ― da Terra, pouco mais do dobro da distância que nos separa da Lua. Segundo os cálculos matemáticos, o asteroide cruzou a órbita da Terra e somente não colidiu porque ela não estava naquele ponto de interseção. Se ele tivesse sido capturado pelo campo gravitacional do nosso planeta e colidido, o impacto equivaleria a 40 bilhões de toneladas de TNT ou o equivalente à explosão de 40 mil bombas de hidrogênio, conforme calcularam os computadores operados pelos astrônomos do programa de Exploração do Sistema Solar da Nasa; se caísse no continente, abriria uma cratera de cinco quilômetros, no mínimo, e destruiria tudo o que houvesse num raio de milhares de outros; se desabasse no oceano, provocaria maremotos que devastariam imensas regiões costeiras. Enfim, uma visão do Apocalipse.\r\n\r\nDisponível em: http://bdjur.stj.jus.br. Acesso em: 23 abr. 2010 (fragmento).\r\nCom base na leitura do fragmento, percebe-se que o texto foi construído com o objetivo de'),(3,'A draga\r\n\r\nA gente não sabia se aquela draga tinha nascido ali, no porto, como um pé de árvore ou uma duna.\r\n– E que fosse uma casa de peixes?\r\nMeia dúzia de loucos e bêbados moravam dentro dela, enraizados em suas ferragens.\r\nDos viventes da draga era um o meu amigo Mário-pega-sapo.\r\n[…]\r\nQuando Mário morreu, um literato oficial, em necrológico caprichado, chamou-o de Mário-Captura-Sapo! Ai que dor!\r\nAo literato cujo fazia-lhe nojo a forma coloquial.\r\nQueria captura em vez de pega para não macular (sic) a língua nacional lá dele…\r\n[…]\r\nDa velha draga\r\nAbrigo de vagabundos e de bêbados, restaram as expressões: estar na draga, viver na draga por estar sem dinheiro, viver na miséria\r\nQue ora ofereço ao filólogo Aurélio Buarque de Hollanda\r\nPara que as registre em seus léxicos\r\nPois o povo já as registrou.\r\nAo criticar o preciosismo linguístico do literato e ao sugerir a dicionarização de expressões locais, o poeta expressa uma concepção de língua que'),(4,'(ENEM - 2021)\r\n\r\nO documentário O menino que fez um museu, direção de Sérgio Utsch, produção independente de brasileiros e britânicos, gravado no Nordeste em 2016, mais precisamente no distrito Dom Quintino, zona rural do Crato foi premiado em Londres, pela Foreign Press Association (FPA), a associação de correspondentes estrangeiros mais antiga do mundo, fundada em 1888.\r\n\r\nDe acordo com o diretor, O menino que fez um museu foi o único trabalho produzido por equipes fora do eixo Estados Unidos-Europa entre os finalistas. O documentário conta a história de um Brasil profundo, desconhecido até mesmo por muitos brasileiros. É apresentado com o carisma de Pedro Lucas Feitosa, 11 anos.\r\n\r\nQuando tinha 10 anos, Pedro Lucas criou o Museu de Luiz Gonzaga, que fica no distrito de Dom Quintino. A ideia surgiu após uma visita que o garoto fez, em 2013, quando tinha 8 anos, ao Museu do Gonzagão, em Exu, Pernambuco. Pedro decidiu criar o próprio lugar de exposição para homenagear o rei e o local escolhido foi a casa da sua bisavó já falecida, que fica ao lado da casa dele, na rua Alto de Antena.\r\n\r\nDisponível em www.opovo.com.br. Acesso em 18 abr. 2016\r\n\r\nNo segundo parágrafo, uma citação afirma que o documentário \"foi o único trabalho produzido por equipes fora do eixo Estados Unidos-Europa entre os finalistas\". No texto, esse recurso expressa uma estratégia argumentativa que reforça a'),(5,'A volta do marido pródigo\r\n\r\n— Bom dia, seu Marrinha! Como passou de ontem?\r\n\r\n— Bem. Já sabe, não é? Só ganha meio dia. {...]\r\n\r\nLá além, Generoso cotuca Tercino:\r\n\r\n— [...] Vai em festa, dorme que-horas, e, quando chega, ainda é todo enfeitado e salamistrão!...\r\n\r\n— Que é que hei de fazer, seu Marrinha... Amanheci com uma nevralgia... Fiquei com cisma de apanhar friagem...\r\n\r\n— Hum...\r\n— Mas o senhor vai ver como eu toco o meu serviço e ainda faço este povo trabalhar...\r\n\r\n[...]\r\n\r\nPintão suou para desprender um pedrouço, e teve de pular para trás, para que a laje lhe não esmagasse um pé. Pragueja:\r\n\r\n— Quem não tem brio engorda!\r\n— É... Esse sujeito só é isso, e mais isso... — opina Sidu.\r\n\r\n— Também, tudo p\'ra ele sai bom, e no fim dá certo... — diz Correira, suspirando e retomando o enxadão — \"P\'ra uns, as vacas morrem ... p\'ra outros até boi pega a parir...\"\r\n\r\nSeu Marra já concordou:\r\n\r\n— Está bem, seu Laio, por hoje, como foi por doença, eu aponto o dia todo. Que é a última vez!... E agora, deixa de conversa fiada e vai pegando a ferramenta!\r\n\r\nROSA, J.G. Sagarana. Rio de Janeiro, José Oympia, 1987.\r\n\r\nEsse texto tem importância singular como patrimônio linguístico para a preservação da cultura nacional devido'),(6,'Intenso e original, Son of Saul retrata horror do holocausto\r\n\r\nCentenas de filmes sobre o holocausto já foram produzidos em diversos países do mundo, mas nenhum é tão intenso como o húngaro Son of Saul, do estreante em longa-metragens László Nemes, vencedor do Grande Prêmio do Júri no último Festival de Cannes.\r\nAo contrário da grande maioria das produções do gênero, que costuma oferecer uma variedade de informações didáticas e não raro cruza diferentes pontos de vista sobre o horror do campo de concentração, o filme acompanha apenas um personagem.\r\nEle é Saul (Géza Rohrig), um dos encarregados de conduzir as execuções de judeus como ele que, por um dia e mio, luta obsessivamente para que um menino já morto — que pode ou não ser seu filho —  tenha um enterro digno e não seja simplesmente incinerado.\r\nO acompanhamento da jornada desse prisioneiro é no sentido mais literal que o cinema pode proporcionar: a câmera está o tempo todo com o personagem, seja por sobre seus ombros, seja como um close em primeiro plano ou em sua visão subjetiva. O que se passa ao seu redor é secundário, muitas vezes desfocado.\r\nSaul percorre diferentes divisões de Auschwitz à procura de um rabino que possa conduzir o enterro da criança, e por isso pouco se envolve nos planos de fuga que os companheiros tramam e, quando o faz, geralmente atrapalha. \"Você abandonou os vivos para cuidar de um morto\", acusa um deles.\r\nVer toda essa via crucis é por vezes duro e exige certa entrega do espectador, mas certamente é daquelas experiências cinematográficas que permanecem na cabeça por muito tempo.\r\nO longa já está sendo apontado como o grande favorito do Oscar de filme estrangeiro. Se levar a estatueta, certamente não faltará quem diga que a Academia tem uma preferência por quem aborda a 2ª Guerra. Por mais que exista uma dose de verdade na afirmação, premiar uma abordagem tão ousada e radical com Son of Saul não deixaria de ser um passo à frente dos votantes.\r\n\r\nCarta Capital. n 873, 22 out 2015.\r\n\r\nA resenha é, normalmente, um texto de base argumentativa. Na resenha do filme Son of Saul, o trecho da sequência argumentativa que se constitui como opinião implícita é'),(7,'Pergunta 7'),(8,'Pergunta 8'),(9,'Pergunta 9'),(10,'Pergunta 10');
/*!40000 ALTER TABLE `perguntas_enem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(200) NOT NULL,
  `senha` varchar(32) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `data_cadastro` datetime NOT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'canalti','10f722b5984a49bce67d434464fae37e','Canal TI','2019-01-11 19:42:12'),(2,'bielmorais','d89c6c20f733f3d577d5e25b908ac572','gabriel','2022-03-29 17:19:06'),(3,'biel','d89c6c20f733f3d577d5e25b908ac572','biel','2022-03-29 17:47:49'),(4,'biel30','d89c6c20f733f3d577d5e25b908ac572','biel','2022-03-29 17:48:14'),(5,'','d41d8cd98f00b204e9800998ecf8427e','','2022-03-29 18:00:56'),(6,'afa','7b064dad507c266a161ffc73c53dcdc5','','2022-04-18 19:53:37'),(7,'testedois','043506d2fd73b1d07799d2d825abaa44','testedois','2022-05-25 21:49:29');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-07 21:28:52
