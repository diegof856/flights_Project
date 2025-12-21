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

### Arquitetura e Pontos Técnicos

-   **Estrutura de Pastas**: O projeto segue uma estrutura organizada, separando responsabilidades em `controller`, `service`, `mappers`, `infra` e `middleware`.
-   **Injeção de Dependência**: O arquivo `src/infra/container.ts` utiliza um padrão de injeção de dependência (Singleton) para instanciar e fornecer as classes `FlightService` e `FlightController`, desacoplando as camadas da aplicação.
-   **Fonte de Dados**: A API utiliza um arquivo `src/data/data.json` como uma fonte de dados estática, simulando um banco de dados.
-   **Roteamento**: As rotas da API são definidas em `src/server/routes/router.ts`.

### Endpoints da API

-   `GET /flights`: Retorna uma lista paginada de todos os voos.
-   `GET /flights/:id`: Retorna os detalhes de um voo específico pelo seu ID.
-   `GET /flights/total`: Retorna um balanço total (ganhos e número de voos).

### Como Executar

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

### Como Executar

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
