# Front End

Este projeto é uma aplicação web para visualização do histórico de voos. Ele permite aos usuários ver uma lista paginada de seus voos anteriores e visualizar informações detalhadas para cada voo, incluindo recompensas.

## Pilha Tecnológica

*   **Framework:** [React](https://react.dev/)
*   **Ferramenta de Build:** [Vite](https://vitejs.dev/)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Roteamento:** [React Router](https://reactrouter.com/)
*   **Estilização:** [CSS Modules](https://github.com/css-modules/css-modules) e CSS puro.

## Estrutura de Pastas

O projeto está organizado nos seguintes diretórios principais:

*   `public/`: Contém ativos estáticos que não são processados pela ferramenta de build, como `logo.svg` e `text.svg`.

*   `src/`: Contém o código fonte principal da aplicação.

    *   `assets/`: Contém ativos estáticos que são importados para os componentes, como imagens e ícones.

    *   `components/`: Contém componentes reutilizáveis que são compartilhados em diferentes partes da aplicação.
        *   `Error.tsx`: Um componente para exibir uma mensagem de erro.
        *   `ListFlights.tsx`: Um componente que exibe uma lista de voos.
        *   `Loading.tsx`: Um componente para exibir um indicador de carregamento.
        *   `NavBar.tsx`: A barra de navegação superior da aplicação.

    *   `hooks/`: Contém hooks React personalizados.
        *   `useFetch.tsx`: Um conjunto de hooks personalizados (`useFetchHome`, `useFetchById`, `useFetchTotal`) para buscar dados da API de backend.

    *   `pages/`: Contém as páginas principais da aplicação.
        *   `Details/`: A página que exibe os detalhes de um voo específico.
        *   `Home/`: A página principal da aplicação, que exibe o histórico de voos.

    *   `utlis/`: Contém funções utilitárias.
        *   `Utils.tsx`: Contém funções utilitárias usadas na aplicação.

## Como Rodar o Projeto

1.  **Instalar dependências:**

    ```bash
    npm install
    ```

2.  **Iniciar o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    A aplicação estará disponível em `http://localhost:5173`.

## Principais Funcionalidades e Componentes

### Histórico de Voos (página `Home`)

*   Exibe uma lista paginada de voos.
*   Mostra um indicador de carregamento durante a busca de dados.
*   Exibe uma mensagem de erro se a busca de dados falhar.
*   Fornece um botão "Total de Saldo" que abre um modal com o saldo total e o número total de voos.
*   Usa os hooks personalizados `useFetchHome` e `useFetchTotal` para buscar dados.
*   Componentes chave:
    *   `Home.tsx`: O componente principal para a página inicial.
    *   `ListFlights.tsx`: Renderiza cada voo na lista.
    *   `Pagination.tsx`: Lida com a lógica de paginação.
    *   `ModalTotal.tsx`: O modal que exibe o saldo total.

### Detalhes do Voo (página `Details`)

*   Exibe informações detalhadas sobre um voo específico.
*   Mostra as recompensas do voo, incluindo ganhos totais, XP e bônus.
*   Fornece um link para retornar à página de histórico de voos.
*   Usa o hook personalizado `useFetchById` para buscar os detalhes do voo.
*   Componentes chave:
    *   `Details.tsx`: O componente principal para a página de detalhes.
    *   `TotalEarnings.tsx`, `StarXp.tsx`, `Bonus.tsx`: Componentes para exibir as recompensas.
    *   `ListFlights.tsx`: Reutilizado para exibir os detalhes do voo.
