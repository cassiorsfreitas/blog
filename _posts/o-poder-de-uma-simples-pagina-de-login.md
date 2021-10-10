---
id: 2
title: 'O poder de uma simples página de login'
date: '10/10/2021'
excerpt: 'Entenda a estrutura básica de uma pagina de login e o quanto ela pode testar seus conhecimentos.'
cover: '/images/post2/image-login.png'
time: '3 min'
category: 'Front end'
link: 'frontend'

metakeyword: 'desenvolver login'
metadescription: 'Dentre os infinitos projetos possíveis e sugeridos, desenvolver uma página de login web é uma das melhores práticas e você vai entender o porquê.'
---

Hoje é bastante comum encontrar artigos e listas com o título _"5 projetos front end para melhorar suas habilidades"_ e, definitivamente, eu não tenho nada contra calculadores, lista de tarefas, páginas de captura e etc. No entanto, dentre os infinitos projetos possíveis e sugeridos, desenvolver uma página de login web é uma das melhores opções e você vai entender o porquê.

A título de curiosidade, a ideia de entrar em rotas privadas através de um sistema de log (login), ou seja, um sistema de registro de histórico do usuário, surgiu com a necessidade de restringir o acesso a conteúdos privilegiados: dados sensíveis, permissões, administrações e etc.

E, por mais "inofensiva" que possa parecer, quando estamos falando sobre estrutura básica de uma página de login, em outras palavras estamos falando sobre os seguintes pontos:

- Comunicação entre Cliente e Servidor;

- Autenticação e Autorização de usuário;

- Controle de rotas públicas e privadas;

- Gerenciamento e armazenamento local;

- Design/Layout;

Vamos ser agnósticos a respeito das possíveis arquiteturas front end, construir uma breve introdução sobre os pontos acima e listar sugestões de estudo para começar hoje.

## Comunicação entre Cliente e Servidor

Uma das tarefas fundamentais de qualquer aplicação web é realizar a comunicação entre cliente (navegadores) e servidor através do protocolo HTTP. Olhando para uma página de login, isto acontece após o usuário preencher os campos do formulário e clicar em "Entrar". A partir daí, uma requisição (ou mais) será feita a fim de verificar a idoneidade dos dados fornecidos e aprovar ou não a sua entrada no sistema. Simples assim.

Por sua vez, requisições (requests) são pedidos que contém uma série de dados que são usados para descrever exatamente o que o cliente precisa. Por exemplo de uma requisição Post abaixo:

![Exemplo de uma requisição utilizando axios -fullwidth](images/post2/example-axios.png)

Em outras palavras, realizar requisições, aguardar respostas e gerenciar dados, são aprendizados básicos que qualquer desenvolvedor front end precisa dominar para criar esta comunicação de maneira eficiente e segura.

**_Links de apoio_**

- _[Client-Server Overvire](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)_
- _[Fetch vs. Axios.js for making http requests](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5)_
- _[What Is a REST API?](https://www.sitepoint.com/rest-api/)_
- _[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)_

---

## Autorização e Autenticação de usuário

Antes de tudo, me permita explicar a diferença entre "autorização" e "autenticação". Imagine um prédio corporativo onde os funcionários precisam entrar todos os dias. Para entrar, eles apresentam um cartão que os identificam como colaboradores e dão a eles autorização para aceder, ou seja, eles possuem permissão para frequentar os espaços corporativos. Todas as vezes que um funcionário mostra o seu cartão magnético e entra com sucesso, ele acabou de ser autenticado.

Seguindo essa analogia, no universo web, a segurança deste processo é feita através do Token Based Authentication que utiliza um token JWT para realizar um pedido de autorização em nossa aplicação ou quando queremos realizar troca de informações.

![Exemplo de um Token JWT -fullwidth](images/post2/example-token.jpeg)

Você pode estar se perguntando "Mas por que tanta burocracia para realizar uma autenticação, quando eu poderia fazer quase tudo do lado do cliente?". Então, conselho de amigo: qualquer camada de segurança do lado do cliente é passível de engenharia reversa. É como uma porta sem tranca. Você pode colocar várias para dificultar o acesso, mas alguém com paciência ~~e mal intencionado~~ vai conseguir debugar o seu código e abrir todas uma por uma.

**_Links de apoio_**

- _[Introduction to JSON Web Tokens](https://jwt.io/introduction)_
- _[Sensitive data exposure: What is it and how it’s different from a data breach](https://us.norton.com/internetsecurity-privacy-sensitive-data-exposure-how-its-different-from-data-breach.html)_

---

## Controle de rotas públicas e privadas

Como consequência dos pontos anteriores, agora que já sabemos que tem permissão e está autenticado, podemos prover conteúdos exclusivos, certo? Err... não! Além de trabalhar para que só usuários com autorização possam aceder às rotas privadas, é necessário criar checkpoints sempre que o usuário necessite fazer mais alguma requisição.

Normalmente, as rotas privadas possuem middleware que verifica se o solicitante ainda tem as permissões necessárias, considerando seus nível de permissão e ação requisitada. A boa prática é: estude sobre re autenticação e não torne o seu token um objeto inflado de informações sensíveis.

A notícia boa é que a maioria das bibliotecas e frameworks front end que estão em alta (React, Next, Angular, Vue, etc.) possuem boas soluções de controle e gerenciamento de rotas públicas e privadas.

**_Links de apoio_**

- _[Using middleware with ExpressJS](https://expressjs.com/en/guide/using-middleware.html)_
- _[React Training / React Router](https://reactrouter.com/web/guides/quick-start)_

---

## Gerenciamento e armazenamento local

O objeto de resposta do back end após a autenticação precisa ser armazenado em algum lugar localmente. Assim, em pontos futuros, é possível reaproveitar estas informações e utilizar em outros pontos da aplicação. Os navegadores fornecem basicamente 3 tipos de armazenamentos: Local Storage, Cookies e Sessions.

**LocalStorage:**

- O armazenamento na web pode ser visto de maneira simplista como uma melhoria nos cookies, oferecendo uma capacidade de armazenamento muito maior. O tamanho disponível é de 5 MB, o que representa consideravelmente mais espaço para trabalhar do que um cookie típico de 4KB;

- Os dados não são enviados de volta ao servidor para cada solicitação HTTP (HTML, imagens, JavaScript, CSS, etc) — reduzindo a quantidade de tráfego entre o cliente e o servidor;

- Os dados armazenados no local storage persistem até serem excluídos explicitamente. As alterações feitas são salvas e estão disponíveis para todas as visitas atuais e futuras ao site;

- Funciona na política de mesma origem. Portanto, os dados armazenados só estarão disponíveis na mesma origem.

**Cookies:**

- Podemos definir o tempo de expiração para cada cookie;

- O limite de 4K é para o cookie inteiro, incluindo nome, valor, data de expiração, etc. Para suportar a maioria dos navegadores, mantenha o nome abaixo de 4000 bytes e o tamanho geral do cookie abaixo de 4093 bytes;

- Os dados são enviados de volta ao servidor para cada solicitação HTTP (HTML, imagens, JavaScript, CSS, etc) — aumentando a quantidade de tráfego entre o cliente e o servidor.

**SessionStorage:**

- É semelhante ao local storage;

- As alterações só estão disponíveis por janela (ou em navegadores como o Chrome e o Firefox). As alterações feitas são salvas e disponibilizadas para a página atual, bem como futuras visitas ao site na mesma janela. Depois que a janela é fechada, o armazenamento é excluído;

- Os dados estão disponíveis somente dentro da janela / guia na qual foram definidos;

- Os dados não são persistentes, isto é, serão perdidos quando a janela / guia for fechada. Como o localStorage, ele funciona na política de mesma origem. Portanto, os dados armazenados só estarão disponíveis na mesma origem.

**_Links de apoio_**

- _[Local Storage vs Session Storage vs Cookie](https://krishankantsinghal.medium.com/local-storage-vs-session-storage-vs-cookie-22655ff75a8)_
- _[How and When to Apply Session Storage with JavaScript](https://www.section.io/engineering-education/how-and-when-to-apply-session-storage-with-javascript/)_

---

## Design/Layout

Mesmo que o seu objetivo não seja testar as suas habilidades de design web, lembre-se que este é um dos pontos de contato do usuário mais comuns com uma aplicação, ou seja, não negligencie. As páginas de login precisam ser versáteis o suficiente para garantir uma boa experiência do usuário, respeitando tipografia, proporções, responsividade e etc, e ágeis o suficiente para tratar quaisquer que seja o resultado da ação dele.

Dicas rápidas:

- Usuários não gostam de preencher formulário, portanto, seja objetivo para garantir uma rápida interação;

- Diferencie o formulário de login do formulário de cadastro e recuperação de senha;

- Se o foco é ser eficiente, apresentar a opção pro usuário escolher um provedor social para efetuar o login é sempre uma boa alternativa;

- Se possível, apresente também a opção de se manter conectado e avise sempre que a função Caps Lock estiver ativa.

**_Links de apoio_**

- _[18 UX Design Tips for Registration and Login Forms](https://uxplanet.org/18-ux-design-tips-for-registration-and-login-forms-f897557358ba)_
- _[15 Tips for Better Signup / Login UX](https://learnui.design/blog/tips-signup-login-ux.html)_

---

Espero que tenha ficado claro a relevância e o quanto pode ser absorvido ao desenvolver uma página de login web. O mais importante de todos os pontos citados é que o conhecimento adquirido neste estudo será reutilizado em diversas partes da maioria dos sistemas que existem no mercado.