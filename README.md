# PDI 2019
  Este repositório tem como objetivo a comprovação dos estudos e análises viabilizadas para o Plano de Desenvolvimento Individual (PDI) 2019.

# Descrição do projeto
  O projeto foi construído durante um curso feito pela empresa [RocketSeat](https://rocketseat.com.br/), onde foi apresentada a proposta 
para construção de um projeto baseado na stack Node.js, ReactJS e ReactNative.

  A aplicação foi desenvolvida para permitir o agendamento/aluguel de locais de trabalho para desenvolvedores autônomos que buscam um local
com infraestrutura adequada para desempenhar suas funções, inspirando-se no AirBnB.

### Banco de Dados
  Na criação do projeto, foi definido que seria utilizado banco de dados NoSQL, mais especificamente o [**MongoDB**](cloud.mongodb.com).
  Foram abordados os seguintes aspectos:
  * Criação do servidor no cloud
  * Criação e publicação dos Clusters
  * Controle de acesso e uso do banco de dados
  
  Dentre as características de um banco não relacional, para mim destacam-se:
  * Performance interessante
  * Versionamento de documentos
  * Fácil integração
  
  Sobre as deficiências do banco, notei as seguintes:
  * Limite de 16 MB do documento
  * Complexidade para realizar relacionamentos - Quando preciso ter um documento com uma quantidade considerável de relacionamentos,
  a escrita começa a ficar muito verbosa e complicada. Nesses casos é melhor utilizar um banco de dados relacional.
  * Grande alocação de memória - O banco de dados aloca já de início, 64 MB de mémória. Quando esse tamanho é atingido, ele começa a      alocar de forma escalar (128, 256, 512, 1024 e finalmente 2048 Mb. A partir de então todo novo arquivo possuirá 2 Gb de tamanho)
    
  > Caso deseje criar o servidor e o cluster para testes do projeto, utilize usuário: ``` omnistack ``` e senha: ``` omnistack ```

### Backend
  O backend foi desenvolvido em Node.js. Foi possível explorar aspectos da liguagem, tais como: 
  * Criação de **API REST**
  * Conexão com **banco não relacional**
  * Como disponibilizar o **servidor**
  * Padrão **MVC**
  * **Upload** de arquivos
  * Construção e direcionamento de **rotas**
  * *Extra:* Uso do **Insomnia** para visualização/manipulação de rotas e registros do banco de dados.
  
  > Para iniciar o servidor, acione o comando ```npm run dev``` (Necessário ter o npm instalado)
  > Para visualizar o repositório do backend, [clique aqui](backend)
    
### Frontend
 Para o desenvolvimento do Frontend, utilizei o ReactJS como framework. Durante o processo de desenvolvimento consegui:
 * Aprender os princípios do ReactJS
 * Notar as vantagens do framework 
    * Baixa curva de aprendizado
    * Código pouco verboso
    * Facilidade ao criar e manipular interfaces bonitas e para o usuário
    * Comunidade crescente e disposta a auxiliar
    * Agilidade no desenvolvimento

 > Para rodar a aplicação, acione o comando ```npm start``` (Necessário ter o npm instalado). Caso queira iniciar pelo **Electron**, 
 acione o comando ```npm start electron .```
 > Para visualizar o repositório do frontend, [clique aqui](frontend)

# Telas da aplicação
  Para demonstração do projeto, segue abaixo o print das telas desenvolvidas durante o curso
  > Login
      ![Login](files/apresentacao.png?raw=true "Apresentação login")
    
  > Cadastro de spots
      ![Login](files/cadastro.png?raw=true "Cadastro de Spots")
    
  > Spots do usuário
      ![Login](files/spots.png?raw=true "Spots do usuário")
