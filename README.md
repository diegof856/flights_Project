# Projeto Flights_Project

Este é um projeto full-stack que consiste em uma API back-end construída com Node.js e um aplicativo cliente front-end construído com React.

## Visão Geral

O projeto é dividido em duas pastas principais:

-   `back_end/`: Contém a API RESTful responsável por fornecer os dados dos voos.
-   `front_end/`: Contém a aplicação de página única (SPA) que consome e exibe os dados dos voos.

---

## Back-end

O diretório `back_end` contém uma API Node.js desenvolvida com Express e TypeScript.

### Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução para o JavaScript no servidor.
-   **Express**: Framework web para a construção da API RESTful.
-   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
-   **ts-node-dev**: Ferramenta para executar o projeto em TypeScript em ambiente de desenvolvimento com hot-reloading.
-   **CORS**: Habilitado para permitir que o front-end acesse a API.
-   **Swagger**: Documentação da API gerada automaticamente e disponível em `/docs`.

### Arquitetura e Pontos Técnicos

-   **Estrutura de Pastas**: O projeto segue uma estrutura organizada, separando responsabilidades em `controller`, `service`, `mappers`, `infra` e `middleware`.
-   **Injeção de Dependência**: O arquivo `src/infra/container.ts` utiliza um padrão de injeção de dependência (Singleton) para instanciar e fornecer as classes `FlightService` e `FlightController`, desacoplando as camadas da aplicação.
-   **Fonte de Dados**: A API utiliza um arquivo `src/data/data.json` como uma fonte de dados estática, simulando um banco de dados.
-   **Roteamento**: As rotas da API são definidas em `src/server/routes/router.ts`.
-   **Manipulação de Erros**: Um middleware (`src/middleware/ErrorMiddleware.ts`) centraliza o tratamento de erros da aplicação.

### Endpoints da API

-   `GET /flights`: Retorna uma lista paginada de todos os voos.
-   `GET /flights/:id`: Retorna os detalhes de um voo específico pelo seu ID.
-   `GET /flights/total`: Retorna um balanço total (ganhos e número de voos).
-   `GET /docs`: Endpoint da documentação Swagger.

### Como Executar (Desenvolvimento Local)

1.  Navegue até o diretório `back_end`:
    ```sh
    cd back_end
    ```
2.  Instale as dependências:
    ```sh
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```
4.  O servidor estará em execução em `http://localhost:3333`.

---

## Front-end

O diretório `front_end` contém uma aplicação cliente construída com React e Vite.

### Tecnologias Utilizadas

-   **React**: Biblioteca para a construção de interfaces de usuário.
-   **Vite**: Ferramenta de build moderna e rápida para o desenvolvimento front-end.
-   **TypeScript**: Garante a tipagem e a robustez do código.
-   **React Router DOM**: Para o gerenciamento de rotas na aplicação.
-   **CSS Modules**: Utilizado para estilização local e escopada dos componentes (`*.module.css`).

### Arquitetura e Pontos Técnicos

-   **Estrutura de Componentes**: A aplicação é organizada em `pages` (páginas principais como `Home` e `Details`) e `components` (elementos de UI reutilizáveis).
-   **Roteamento no Cliente**: O arquivo `src/App.tsx` configura o roteamento principal da aplicação usando `react-router-dom`, com as rotas `/` e `/flights/:id`.
-   **Hooks Customizados**: O arquivo `src/hooks/useFetch.tsx` é um ponto central da arquitetura. Ele exporta três hooks customizados (`useFetchHome`, `useFetchById`, `useFetchTotal`) que abstraem a lógica de busca de dados da API.
    -   Cada hook gerencia seu próprio estado de `loading`, `error` e `data`.
    -   Isso torna os componentes mais limpos e focados apenas na renderização da UI.
-   **Comunicação com a API**: A aplicação faz chamadas para a API back-end (`http://localhost:3333/flights`) para buscar os dados que serão exibidos.

### Como Executar (Desenvolvimento Local)

1.  Navegue até o diretório `front_end`:
    ```sh
    cd front_end
    ```
2.  Instale as dependências:
    ```sh
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```
4.  A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

---

## Como Executar com Docker

Este projeto está containerizado e pode ser executado facilmente com o Docker.

### Back-end (API)

Para executar a API, utilize os seguintes comandos:

1.  **Baixar a imagem do Docker Hub:**
    ```sh
    docker pull diegof603/apiflights:latest
    ```
2.  **Executar o contêiner:**
    ```sh
    docker run -d -p 3333:3333 --name api-flights diegof603/apiflights:latest
    ```
    -   `-d`: Executa o contêiner em modo detached (em segundo plano).
    -   `-p 3333:3333`: Mapeia a porta 3333 do contêiner para a porta 3333 do seu host.
    -   `--name api-flights`: Define um nome para o contêiner para facilitar o gerenciamento.

A API estará disponível em `http://localhost:3333`.

### Front-end (SPA)

Para executar a aplicação React, utilize os seguintes comandos:

1.  **Baixar a imagem do Docker Hub:**
    ```sh
    docker pull diegof603/spaflights:latest
    ```
2.  **Executar o contêiner:**
    ```sh
    docker run -d -p 5173:80 --name spa-flights diegof603/spaflights:latest
    ```
    -   `-p 5173:80`: Mapeia a porta 80 do contêiner (onde o Nginx serve a aplicação) para a porta 5173 do seu host.
    -   `--name spa-flights`: Define um nome para o contêiner.

A aplicação estará acessível em `http://localhost:5173`.

