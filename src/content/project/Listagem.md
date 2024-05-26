---
title: "Listagem de Pedidos"
description: "Projeto Busca, filtro, ordenação e paginação com Next.js"
github_link: "https://github.com/RelancioBorgesDev/mp-filtro-ordenacao-e-paginacao-com-next-js"
web_link: ""
projectType: "Aplicação Web"
tags: ["Typescript", "React", "Next JS", "Tailwind", "shadcn/ui"]
date: 2022-12-30
card_image: "./images/listagem/listagem-pedidos.png"
video: "/videos/gifs/listagem.gif"
featured: false
---

Esse projeto é um desafio do site [codante.io](https://codante.io/). O objetivo deste projeto é criar uma aplicação web utilizando Next.js e Server Components que se conecte a uma API de listagem de pedidos. A aplicação terá funcionalidades de busca textual, filtro por status, ordenação de campos e paginação. Essas funcionalidades são totalmente server-side, refletindo as alterações na URL para permitir fácil compartilhamento e navegação.

### Desenvolvimento

- **Conexão com a API:**

  - Utilizei o endpoint principal da API fornecida pela Codante para obter a lista de pedidos.
  - Os campos necessários para exibição na tabela são: Nome do Cliente, Email do Cliente, Status, Data do Pedido e Valor do Pedido.
  - O valor do pedido é convertido para o formato brasileiro de número, exibindo-o em reais.

- **Busca Textual:**

  - Implementei uma busca textual pelo nome do cliente, totalmente server-side.
  - Os resultados da busca são refletidos na URL, de modo que quando não houver uma busca ativa, a query correspondente é removida da URL.

- **Filtro de Status:**

  - Criei um filtro de status (pending, completed) utilizando botões de filtro.
  - O filtro é realizado server-side e refletido na URL. Quando não houver filtros ativos, a query correspondente é removida da URL.

- **Ordenação de Campos:**

  - Implementei ordenação para os campos de data do pedido e valor.
  - Ao clicar no nome da coluna respectiva, a ordenação é ativada.
  - O ícone ao lado do nome da coluna é alterado para refletir o tipo de ordenação (ascendente ou descendente).
  - A ordenação é refletida na URL. Quando não houver nenhuma ordenação, a query correspondente é removida da URL.

- **Paginação:**

  - Implementei a paginação de acordo com os dados recebidos da API.
  - Os botões de próximo e anterior são ativados e desativados conforme a posição do usuário na lista de páginas.
  - A paginação é refletida na URL.

- **Server e Client Components:**
  - Decidi quais componentes são "server" e quais são de "clients", garantindo uma distribuição melhor de tarefas entre o front-end e o back-end.
