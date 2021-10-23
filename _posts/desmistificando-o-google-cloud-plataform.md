---
id: 3
title: 'Desmistificando o Google Cloud Plataform'
date: '17/10/2021'
excerpt: 'A GCP é o conjunto de servidores do Google que dão suporte para desenvolvedores nos seus projetos.'
cover: '/images/post3/image-google.jpg'
time: '4 min'
category: 'DevOps'
link: 'devops'

metakeyword: 'programação em nuvem'
metadescription: 'A GCP é o conjunto de servidores do Google, distribuídos no mundo todo e que dão suporte para desenvolvedores nos seus projetos em nuvem.'
---

**Programação em nuvem** e **soluções de infraestrutura** são expressões cada vez mais presentes no mercado de tecnologia. Já faz tempo que a Amazon deixou de ser apenas um grande e-commerce e passou a oferecer suas soluções de armazenamento, segurança e escalabilidade, através dos seus robustos datacenters, por exemplo.

A Microsoft, que já apresentava soluções para infraestruturas corporativas em nuvem, seguiu o mesmo caminho e entrou na corrida com o Azure, capaz de disputar diretamente com qualquer player do mercado. Bem, a Google não poderia ficar de fora, certo?

Então, entes de falarmos sobre o Google Cloud Plataform (GCP), precisamos dar um passo atrás para entender o que precede esse ecossistema e o que está na base desses serviços.

## Olhando para as nuvens

> Computação em nuvem, do inglês _cloud computing_, é uma tecnologia que é capaz de acessar diferentes arquivos e executar diversas tarefas por meio da internet.

A definição é justa, porém, simples demais, na minha opinião. Isso ocorre porque o termo nuvem abstrai uma gigantesca estrutura física e pode ser facilmente interpretado de maneira simplória, visto atuar desde à substituição de um simples pendrive até à exponencialização neural de uma inteligência artificial, de acordo com o ritmo de aprendizado dela.

Em outras palavras, tudo <del>ou quase tudo</del> que uma aplicação precisa para sobreviver na web pode ser facilmente posto sobre uma estrutura terceira de alta performance e requisitada via internet de "qualquer lugar". Estas estruturas, por sua vez, funcionam de maneira independente da aplicação de modo que não é preciso se preocupar com manutenção, segurança, recurso consumido e diversos outros fatores.

##### _Qualquer lugar_ → Empresas globais trabalham com um sistema de zona/região que leva em consideração a distância e tempo de resposta entre cliente e servidor (latência).

Como dito anteriormente, a GCP é a terceira da fila. Segundo os cálculos da Gartner, este vai ser o setor de tecnologia com maior investimento nos próximos 10 anos. Mark Hurd, CEO da Oracle, já afirmou que em 2025 80% de todas as aplicações de ambientes corporativos estarão rodando em nuvem. Assim, tarefas repetitivas ficarão para trás, pois a chave da computação em nuvem é a automação. Vamos por parte!

## Sopa de letrinhas

Em geral, existem três tipos de serviços que se consolidaram a partir da computação em nuvem: SaaS, PaaS e IaaS. Você verá que as diferenças se dão a partir do nível de responsabilidade entre contratante e contratada, ou seja, o quanto ficará (ou não) sob a gestão do quem contrata.

- O SaaS (Software as a Service ou Software como Serviços) é um grupo de aplicações terceirizadas acessíveis por meio dos navegadores, como o G Suite. Nessa faixa de recursos, estão o Gmail e os softwares CRMs (Customer Relationship Management ou Gestão de Relacionamento com o Cliente), como o Pipedrive e o **[Salesforce](https://multiedro.com.br/salesCloud.html)**. O sistema SaaS é econômico, já que não é necessário adquirir todas as licenças. O cliente pode pagar uma mensalidade, escolhendo apenas os instrumentos tecnológicos que forem úteis a ele.

- Já a camada PaaS (Platform as a Service ou Plataforma como Serviço) oferece componentes de softwares aos desenvolvedores. Assim, a empresa consegue trabalhar com base em códigos de aplicação pré-configurados, o que reduz o número de codificações necessárias à produção de um app próprio. Aliás, essa camada serve justamente para companhias que preferem aplicações exclusivas. A PaaS oferece, ainda, as diversas qualidades dos sistemas cloud, como escalabilidade, acessibilidade e funcionalidades diversas. Mais um ganho importante é o serviço de Business Intelligence, que ajuda a transformar dados desordenados em informações ricas para a estratégia do negócio.

- IaaS (Infrastructure as a Service ou Infraestrutura como Serviço) é um nível associado à infraestrutura. As aplicações e o banco de dados são rodados nele, o que evita despesas muito altas com a gestão de servidores físicos privativos, como os data centers próprios. Trata-se de uma modalidade de serviços cloud voltada às empresas que não se interessam em manter seus próprios hardwares. Assim, os custos com as máquinas, como energia e climatização, são arcados pela Google, que cobra das companhias apenas a parte dos recursos da GCP que realmente for usufruída. Com a IaaS, cada recurso é disponibilizado como um elemento isolado. Dessa forma, o provedor de serviços de cloud computing faz o gerenciamento da infraestrutura, enquanto as contratantes instalam, configuram e operam seus softwares próprios, como sistemas operacionais, apps e middlewares.

## Automação e Abstração

A chave de todo esse conceito chamado _"cloud"_ está no nível de automação e abstração oferecido pelos seus serviços. Abstraindo a infraestrutura e entendendo que os recursos em nuvem são "infinitos" e sob demanda, automatizar tarefas é a grande estrela deste cenário. Não confunda:

- Programação em nuvem é a execução de cargas de trabalho em nuvens;

- A automação é o uso de tecnologia para executar tarefas com o mínimo possível de assistência humana.

A modalidade em nuvem permite que os recursos sejam adaptados de acordo com a necessidade, em _runtime_, ou seja, através de tarefas automatizadas é possível tornar flexível o número de recursos disponíveis e a quantidade que será consumida por cada um deles. Via de regra, o número de serviços utilizados e a carga consumida influenciam no custo final.

## Olá, Google Cloud Plataform

![Logo Google Cloud Plataform -fullwidth](images/post3/example-logo-gcp.jpg)

Agora que tudo ficou mais claro, vamos direto ao ponto. O GCP se propõe a ser um sistema de nuvem global, ou seja, além de trabalhar com Regiões, como a AWS, ele gerencia globalmente todos os dados de maneira muito mais efetiva através do que eles chamam de Zona, Região e Multi Região.

Por ter a sua própria rede de comunicação, a conexão entre os seus Data Centers é feita através de uma rede privada, quais sejam cabos do Google que se ligam diretamente, sem passar pela internet entre continentes, e cobrem todo o globo. Neste caso, são apenas os seus CDNs que fazem a interação com a Internet, cujos pontos de contato são chamados de POPs (Points of Presence).

Na prática, todas as regiões e zonas são conectadas por uma conexão de fibra intercontinental. Isto permite uma implementação de load balance, gestão de carga, entre instâncias da sua aplicação implementada na cloud. No caso do GCP, este recurso pode também ser automatizado de acordo com a origem da requisição (incrível!). Um bom exemplo é o aplicativo de música Spotify, que utiliza a GCP para ofertar uma alta disponibilidade a seus usuários em qualquer lugar do mundo.

Dentre os vários recursos disponíveis, o GCP destaca soluções prática como:

- **Google App Engine:** esse segmento da plataforma permite que os desenvolvedores tenham acesso a hospedagens escalonáveis da Google, uma vez que as ferramentas de desenvolvimento de softwares podem ser utilizadas para criar no próprio App Engine;

- **Google Compute Engine:** esse serviço permite aos usuários a hospedagem de _workloads_;

- **Google Container Engine:** com essa ferramenta, é possível gerir _containers dockers_, executados dentro da própria plataforma de Cloud da Google. O Container Engine é baseado na tecnologia container Google Kubernets;

- **Google Cloud Storage:** projetada para o armazenamento específico de grandes volumes de dados, a Cloud Storage fornece aos usuários muitas opções de armazenamento de bancos de dados, como o Cloud SQL para _fully-relational_ MySQL, o Cloud Datastore para NoSQL, armazenamento não relacional, entre outros.

Além das suas principais funcionalidades - criação de máquinas virtuais, armazenamento de dados em nuvem, big data e aplicativos de gestão de produtividade - e diferenciais como o seu sistema live migration, eu não poderia deixar de citar uma grande vantagem do Google Cloud Plataform em relação aos principais concorrentes: _**redundant backups**_!

Esta característica permite armazenar dados de forma redundante, com verificações automáticas, para garantir a integridade dos dados. A beleza do armazenamento multirregional é que ele também é georedundante, ou seja, o armazenamento em nuvem guarda seus dados de forma redundante em pelo menos duas regiões dentro das localizações disponíveis. No que diz respeito à hospedagem do Google Cloud, tal funcionalidade garante que você nunca perderá seus dados, mesmo no caso de um desastre.

Para finalizar, é possível que você esteja pensando "com tanta estrutura disponível, automatizada e independente, qual será o papel do desenvolvedor nessa história?". Bem, de maneira muito simples, o desenvolvedor continuará sendo importante para desenhar essas e outras estruturas, inovar e assegurar que tudo está dentro da necessidade do projeto. A resposta completa fica pra um próximo post.
