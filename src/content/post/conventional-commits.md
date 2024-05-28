---
title: "Beneficios de usar conventional commits em projetos grandes"
description: "Veja o que é Conventional Commits e quais os benefícios de usar esse padrão."
author: "Relancio Borges"
tags: ["GIT"]
date: 2024-05-25
card_image: "./images/conv-commits.jpg"
banner_image: "./images/conv-commits.jpg"
featured: true
---

Escrever mensagens de commit consistentes e significativas é crucial para manter um histórico de mudanças claro e compreensível em projetos grandes. No começo eu sempre ficava meio perdido no que escrever sempre que eu desenvolvia uma feature ou consertava algo no código, muitas vezes, era dificil formas de manter um padrão que facilite a navegação e compreensão do meu histórico de commits. É aqui que o Conventional Commits entra em cena, graças a ele eu descobri uma solução padronizada que ajudou a transformar a maneira com que posso gerenciar commits em projetos grandes.

### O Que São Conventional Commits?

Conventional Commits é basicamente uma convenção simples para escrever mensagens de commit, que facilita a criação de um histórico de commits claro e semântico. Essa convenção utiliza um padrão específico para as mensagens de commit, o que ajuda a manter um histórico organizado e fácil de entender.

#### Estrutura de uma Mensagem de Commit

A estrutura básica de uma mensagem de commit conforme a convenção é a seguinte:

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

**Exemplo:**

```
feat(auth): adicionar suporte para autenticação OAuth

Adiciona suporte para autenticação OAuth no módulo de autenticação. Isso permite que os usuários façam login usando provedores de OAuth.

BREAKING CHANGE: O módulo de autenticação agora requer configuração de OAuth.
```

### Benefícios de Usar Conventional Commits em Projetos Grandes

Utilizar Conventional Commits consegue trazer diversas vantagens para o gerenciamento de projetos de software, principalmente em termos de clareza, automação, comunicação, navegação e consistência.

Em primeiro lugar, um histórico de commits claro e estruturado é uma das grandes vantagens dessa prática. Com Conventional Commits, cada commit segue uma estrutura padronizada, tornando o histórico de mudanças mais fácil de ler e entender. Isso é especialmente útil em projetos grandes com múltiplos desenvolvedores, onde o histórico pode rapidamente se tornar confuso.

Além disso, Conventional Commits facilita a integração com ferramentas de CI/CD (Continuous Integration/Continuous Deployment). Mensagens de commit bem estruturadas podem acionar processos automáticos, como a geração de changelogs, versionamento semântico e até mesmo a publicação de pacotes, agilizando e simplificando a automação.

### Exemplos de Conventional Commits

#### Tipos Comuns de Commits

- **feat:** Uma nova funcionalidade.

  ```
  feat: adicionar página de login
  ```

- **fix:** Uma correção de bug.

  ```
  fix: corrigir erro no formulário de cadastro
  ```

- **docs:** Mudanças na documentação.

  ```
  docs: atualizar README com instruções de instalação
  ```

- **style:** Mudanças que não afetam o significado do código (espaços em branco, formatação, etc.).

  ```
  style: formatar código com Prettier
  ```

- **refactor:** Mudança no código que não corrige um bug nem adiciona uma funcionalidade.

  ```
  refactor: refatorar função de autenticação
  ```

- **test:** Adição ou modificação de testes.

  ```
  test: adicionar testes unitários para o módulo de usuário
  ```

- **chore:** Mudanças no processo de build ou ferramentas auxiliares.

  ```
  chore: atualizar dependências do projeto
  ```

### Implementação de Conventional Commits

Para implementar Conventional Commits em um projeto grande, você pode usar ferramentas como o commitlint e o Husky para automatizar e reforçar a conformidade com a convenção.

#### Exemplo de Configuração

1. **Instalar Dependências:**

   ```bash
   npm install --save-dev @commitlint/{config-conventional,cli} husky
   ```

2. **Configurar commitlint:**

   Crie um arquivo `commitlint.config.js` na raiz do projeto:

   ```javascript
   module.exports = { extends: ["@commitlint/config-conventional"] };
   ```

3. **Configurar Husky para Executar o commitlint:**

   Adicione um gancho de commit no `package.json`:

   ```json
   "husky": {
     "hooks": {
       "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
     }
   }
   ```

   **!Não é necessário usar o Husky para usar o padrão CC, mas é uma ferramenta que auxilia no "CommitLint", automatizando a execução antes de cada commit**

### Conclusão

Adotar Conventional Commits pode transformar a maneira como você gerencia commits em projetos grandes. Com ele fica claro o que foi feito no código, mesmo sendo em um projeto que você trabalhou sozinho, após meses sem modificar o código se você voltar nos commits, você vai conseguir ver com clareza a estrutura que foi construida por durante o processo de desenvolvimento. Usar ele pode proporcionar não apenas melhora na comunicação e a colaboração na equipe, mas também facilitam a automação e a manutenção do projeto.
