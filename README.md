# Pokédex Go!

Interface interativa, onde através de comandos intuitivos, o usuário consegue navegar através dos dados dos 151 primeiros Pokémon e assim usufruir melhor do jogo Pokémon GO.

  

[Clique aqui para acessá-la](https://carolpinheiro.github.io/SAP004-data-lovers/src/)

  

## 1. O que é Pokémon?

Pokémon, desde suas primeiras versões em 1995 com um lançamento de um par de jogos, até os primeiros desenhos criados em meados dos anos 2000 sempre foi uma franquia que independentemente da época que analisássemos atingia os mais diferentes tipos de públicos.
Desde os pais que eram acometidos pela nostalgia de sua infância, até as crianças que se encantavam pelos pequenos seres e seus personagens marcantes.

### 1.1 O que é Pokémon Go?
Com o advento da internet, a franquia precisou se reinventar ainda mais para se manter atrativa tanto para os consumidores usuais, como os novos que poderiam ser alcançados.
Sendo assim, com a parceria entre a The Pokémon Company, Nintendo e Niantic Inc., o jogo foi desenvolvido com a ideia de criar um ambiente para os usuários, onde se assemelhassem aos treinadores pokémon, caçando com auxílio do celular as diferentes espécies que se espalhavam ao redor das ruas de suas cidades, com eventos e desafios que se assemelhavam e muito aos enfrentados nos jogos e animações.
Com isso, assim que houve o lançamento em 6 de julho de 2016, o jogo se tornou uma febre mundial e até hoje — cerca de 4 anos após o lançamento — ainda coleciona diversos fãs que se mantém fiéis ao mesmo.

## 2. Objetivos

Os principais objetivos elencados quando iniciamos o planejamento do projeto, se focaram em entender para quem esse projeto seria feito e a organização necessária para alcançarmos todas as metas.
Diversos tópicos se apresentaram durante os momentos iniciais para organização, indo desde questões simples como a paleta de cores utilizada até assuntos mais complexos como a acessibilidade para pessoas de baixa visão, com a inclusão de descrições dentro das imagens, tamanho de fontes e botões além de outros tópicos.

### - Responsividade
Um ponto ao qual dedicamos maior atenção, foi quanto a questão da responsividade, pois considerando que como toda a base de jogadores se encontra em aplicativos mobile, era fundamental que mesmo no meio de uma partida, ele conseguisse obter as informações necessárias sem precisar procurar por um computador para melhor visualização.

  

## 3. Usuários

Sendo a principal parte da organização de um projeto, os usuários e suas necessidades foram um ponto crítico, ao qual dedicamos nossa atenção por vários dias a fim de entender objetivamente quais pontos eram mais fundamentais de serem abordados durante as semanas e suas necessidades.
- ### Pesquisas sobre o usuário
  Por conta da importância de entender o usuário, nossa primeira tarefa antes de realizar o projeto em si, foi entender para quem ele seria focado — as pessoas que viriam a utilizá-lo — e por conta disso, entre os dias 18 e 20 de Abril de 2020, realizamos uma pesquisa com cerca de 48 pessoas para entender suas opiniões e necessidades sobre o tema. 
Após isso, nos dias 30 de Abril até 2 de maio, realizamos uma segunda pesquisa, dessa vez focada em usabilidade e um feedback direto dos usuários sobre o primeiro MVP que havíamos terminado. 
Nisso obtivemos diversos feedbacks que iam desde sobre a intensidade das cores que criavam um contraste incômodo para os olhos, até pequenos detalhes de usabilidade como fornecer uma possibilidade do usuário limpar os campos de suas pesquisas.
Pensando nisso, como foco da segunda e terceira sprint, focamos em analisar os dados recebidos em ambas as pesquisas, e organizar eles por ordem de importância, a fim de entendermos os tópicos que deveriam ser priorizados.
  
- ### Histórias de usuário
Com base no resultado de uma das pesquisas, obtivemos os seguintes dados:
#foto aqui
Ou seja, a grande maioria dos nossos jogadores se centralizavam em pessoas que haviam jogado Pokémon Go em algum momento e estavam na média entre 18 até 29 anos.
Contudo, como os gráficos apontam, a divisão entre as outras faixas etárias era muito pequena para criarmos outro grupo de grande interesse. 
Pensando nisso, decidimos pegar 3 histórias de usuários com cenários e idades diferentes, a fim de criar um projeto que pudesse atingir esses usuários que mesmo com histórias opostas ainda buscavam o mesmo resultado.
A primeira história escolhida por nós, foi a do Gabriel:
#Gabriel aqui
Uma criança, com contato intenso e direto com a tecnologia, que conheceu os pokémons através dos pais que gostavam muito do tópico, e começou a jogar por curiosidade.
A principal necessidade dele no nosso projeto, seria unicamente algo prático, intuitivo e interativo, pois diferentemente de fãs mais antigos o foco principal dele seria encontrar o que procurava da forma mais fácil possível.

Após isso, fomos em direção a segunda história:
#Isabel aqui
Considerando que o jogo não se limitava apenas a fãs, consideramos também a possibilidade de uma mãe querer entender o jogo, antes de permitir que o filho jogasse.  Tendo a possibilidade também, de ela igualmente se interessasse pelo tema e começasse a jogar.
Sendo assim, definimos como meta criar uma área de FAQ com uma explicação sobre o que eram os pokémons além de pequenas instruções para que pessoas que não conhecessem o tema, pudessem se localizar no site.

E por último, a história final que criamos, foi diretamente em relação a um jogador experiente:
#Ana aqui
Diferentemente dos dois anteriores, o foco dela não estaria completamente na experiência com a interface, mas sim nas informações que conseguisse obter dentro do site. 
Sendo assim, focamos em criar cards com todas as informações necessárias para uma boa jogatina e acima de tudo, permitir que o filtro fosse realizado com base em fatores importantes como chance de Spawn, tempo de Spawn e etc.

## 4. Desenvolvimento

  

### 4.1 Interface

- Rascunho inicial em papel
#adicionar aqui

- Protótipo de baixa fidelidade

![alt text](https://github.com/CarolPinheiro/SAP004-data-lovers/blob/master/Layout/layout%20cel%20com%20descri%C3%A7%C3%A3o.png  "Protótipo de baixa fidelidade para o celular com descrição")

  

![alt text](https://github.com/CarolPinheiro/SAP004-data-lovers/blob/master/Layout/layout%20desktop%20com%20descri%C3%A7%C3%A3o1.png  "Protótipo de baixa fidelidade para o desktop com descrição- tela principal")

  

![alt text](https://github.com/CarolPinheiro/SAP004-data-lovers/blob/master/Layout/layout%20desktop%20com%20descri%C3%A7%C3%A3o2.png  "Protótipo de baixa fidelidade para o desktop com descrição - filtros")

  

- MVP (Mínimo Produto Viável) - 1° versão

![alt text](https://github.com/CarolPinheiro/SAP004-data-lovers/blob/master/Layout/firstmvp.png  "Primeiro MVP - Tela Principal")

  

![alt text](https://github.com/CarolPinheiro/SAP004-data-lovers/blob/master/Layout/firstmvp_filters.png  "Primeiro MVP - Tela com filtros")

  

- Pesquisa sobre usabilidade

  

### 4.2 Planejamento do site

#### Fase 1

- [x] Escolha da API a ser utilizada.

- [x] Definição do Layout.

- [x] Realização da primeira pesquisa para entender as necessidades do usuário.

- [x] Definição da primeira história de usuário.

  

#### Fase 2

- [x] Definição da tipografia.

- [x] Escolha da paleta de cores.

- [x] Desenvolvimento do Layout inicial em HTML e CSS.

- [x] Estruturação do primeiro código em JavaScript para manipulação do DOM e exibição dos cards dos pokémons.

  

#### Fase 3
- [x] Criação das Funções de filtro para tipos e ovos.
- [x] Desenvolvimento da função de Sort, para poder ordenar os cards com base nos critérios escolhidos.
- [x] Criação da função para search na barra. 
- [x] Criação da opção de retorno para a página inicial ao clicar no logo da página.
  

#### Fase 4
- [x] Possibilitar que os filtros fossem misturados, criando novos resultados para os usuários.
- [x] Escrever os testes para as funções do **data.js**.
- [x] Utilização do Fetch para buscar os dados do Pokémon.json

#### Fase 5
- [ ] Criar a página que vai receber os gráficos.
- [ ] Escrever os testes para a função de cálculo, aplicando TDD.
- [ ] Escrever a função em si.
- [ ] Aplicar ela usando a biblioteca ***Chart.js***.

#### Fase 6
- [ ] Aplicar as melhorias no CSS, considerando as opiniões recebidas via pesquisa.
- [ ] Criar uma tela de Login.
- [ ] Criar um teste para a API.


  

## 5. Instalação do projeto

Caso deseje baixar o projeto para sua máquina, há duas formas de fazer isso.
A primeira seria baixando diretamente na página do Github, clicando em "***Clone or download***" ou caso deseje manter uma cópia para si, a fim de manipular, é possível criar um fork  antes de clicar no mesmo botão copiar o link fornecido e em seu terminal, digitar:
 

    git clone <cole seu link após isso>
  O repositório será completamente baixado em sua máquina, e caso use o visual studio code, basta entrar na pasta pelo terminal e digitar:

    code .

Caso não possua o Node.js instalado, basta clicar nesse link [aqui](https://nodejs.org/pt-br/download/) e fazer o download.

Pois, para executar ele em seu computador, será necessário realizar a instalação da pasta node modules, com o uso do NPM (nativo do Node.js).

Assim que a instalação tiver sido concluída, basta digitar em seu terminal:

    npm install 
E aguardar até que o processo tenha sido completo.
Para abrir um servidor a fim de executar o projeto, é só digitar:

    npm start
  E clicar no link que vai ser disponibilizado.
  

## Autores
Projeto desenvolvido por @jessicamelise e @carolpinheiro, como segundo projeto no bootcamp da @Laboratoria.