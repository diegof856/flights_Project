# Backend para Consulta de Voos

Este é o backend do projeto de consulta de voos, desenvolvido em Node.js com TypeScript. A seguir, uma documentação detalhada sobre como utilizar e entender a estrutura do projeto.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para o servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express**: Framework web para a criação da API.
- **ts-node-dev**: Ferramenta para desenvolvimento em TypeScript, que reinicia o servidor automaticamente a cada alteração.
- **dotenv**: Para gerenciar variáveis de ambiente.
- **cors**: Para habilitar o Cross-Origin Resource Sharing.

## Começando

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (geralmente instalado com o Node.js)

### Instalação

1. Clone o repositório para a sua máquina local.
2. Navegue até o diretório `back_end`.
3. Instale as dependências do projeto:

```bash
npm install
```

### Executando a Aplicação

Para iniciar o servidor em modo de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333` (ou na porta definida no seu arquivo `.env`).

## Endpoints da API

A API fornece os seguintes endpoints para consulta de informações sobre voos:

- **GET /flights**
  - Retorna uma lista paginada de voos.
  - **Query Params:**
    - `page` (opcional): Número da página (padrão: 1).
    - `limit` (opcional): Quantidade de itens por página (padrão: 10).

- **GET /flights/:id**
  - Retorna os detalhes de um voo específico.
  - **Path Params:**
    - `id`: O ID do voo.

- **GET /flights/total**
  - Retorna o balanço total e a quantidade total de voos.

## Estrutura do Projeto

O projeto segue uma arquitetura em camadas, visando a separação de responsabilidades e a manutenibilidade do código.

```
src/
├── controller/       # Controladores (recebem as requisições HTTP)
├── data/             # Arquivos de dados (ex: data.json)
├── errors/           # Classes de erro customizadas
├── infra/            # Configuração de injeção de dependência
├── mappers/          # Interfaces de mapeamento de dados
├── middleware/       # Middlewares do Express
├── server/           # Configuração do servidor e rotas
└── service/          # Lógica de negócio da aplicação
```

## Detalhes Técnicos

### Injeção de Dependência

O projeto utiliza um container de injeção de dependência simples, configurado no arquivo `src/infra/container.ts`. Este padrão de projeto ajuda a desacoplar os componentes da aplicação, facilitando a troca de implementações e os testes unitários. O padrão Singleton é utilizado para garantir que exista apenas uma instância de cada dependência.

### Padrão de Fábrica (Factory)

A lógica de criação de objetos de resposta e transformação de dados é abstraída através do padrão de fábrica, localizado em `src/service/factory/`. A implementação concreta (`factoryImpl.ts`) é responsável por formatar os dados para a apresentação, separando essa responsabilidade da lógica de negócio principal no `FlightService`.

### Tratamento de Erros

O tratamento de erros é centralizado em um middleware (`src/middleware/ErrorMiddleware.ts`), que captura os erros lançados na aplicação (instâncias de `AppError`) e retorna uma resposta HTTP formatada e com o status code apropriado.
