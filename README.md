# TP de Engenharia de Software UFMG

## Descrição do Projeto

Este projeto é uma aplicação web desenvolvida como parte do curso de Engenharia de Software da UFMG. Ele inclui um backend para gerenciamento de dados, um frontend para interação com o usuário e uma infraestrutura DevOps para automação e deploy.

## Membros da Equipe

- André Luiz Alves Costa
- Riquelme Batista
- Thalys Vinícius Barbosa Gonzaga

## Cargos

- **PO:** Riquelme
- **SM:** [Adicionar nome]
- **Backend:** [Adicionar nomes]
- **Frontend:** [Adicionar nomes]
- **DevOps:** André
- **UI/UX:** [Adicionar nome]

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias para o desenvolvimento e operação do sistema:

### Backend

- **Linguagem:** [Node.js](https://nodejs.org/) (versão 22.14), TypeScript
- **Framework:** [Fastify](https://www.fastify.io/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) (versão 17.4)
- **Testes:** [Jest](https://jestjs.io/)

### Frontend

- **Linguagem:** [Node.js](https://nodejs.org/) (versão 22.14), TypeScript
- **Biblioteca:** [React.js](https://reactjs.org/)
- **Estilo:** [Material UI](https://mui.com/), [Styled Components](https://styled-components.com/)
- **Testes:** [React Testing Library](https://testing-library.com/), [Jest](https://jestjs.io/)

### DevOps

- **Servidor Web:** [Nginx](https://www.nginx.com/) (versão 1.27.4)
- **Contêineres:** [Docker](https://www.docker.com/) (versão 28.0.1), Docker Compose
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)
- **Hospedagem:** [VM Azure](https://azure.microsoft.com/) (Ubuntu 24.04)

## Estrutura do Projeto

- `/api`: Código do servidor backend, incluindo rotas, controladores e modelos.
- `/client`: Código da aplicação frontend, incluindo componentes React e estilos.
- `/`: Configurações de infraestrutura, como arquivos Docker e CI/CD.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter os seguintes itens instalados em sua máquina:

- [Docker](https://www.docker.com/) (versão 28.0.1 ou superior)
- [Docker Compose](https://docs.docker.com/compose/)

## Como Executar

Siga os passos abaixo para executar o projeto utilizando Docker:

1. **Clonar o Repositório**

   ```bash
   git clone https://github.com/Riquelme3m/Software_Engineering_UFMG.git
   cd Software_Engineering_UFMG
   ```

2. **Configurar Variáveis de Ambiente**

   - Criar .env do docker compose na raiz do projeto.
   - Exemplo de `.env`:

   ```env
   DB_CONTAINER_NAME=db_container
   DB_VERSION=17.4-alpine
   DB_PORT=5432
   DB_NAME=db_software_engineering
   DB_USER=admin
   DB_PASSWORD=admin123

   API_CONTAINER_NAME=api_container
   API_IMAGE_NAME=api_image
   API_PORT=5050
   NODE_VERSION=22.14-alpine

   CLIENT_CONTAINER_NAME=client_container
   CLIENT_IMAGE_NAME=client_image
   CLIENT_PORT=5000

   NGINX_CONTAINER_NAME=nginx_container
   NGINX_IMAGE_NAME=nginx_image
   NGINX_VERSION=1.27.4-alpine

   RESTART_POLICY=always
   ```

3. **Construir e Iniciar os Contêineres**

   - Execute o comando abaixo para construir e iniciar os serviços:

   ```bash
   docker compose up --build -d
   ```

4. **Acessar Sistema**

   - O frontend estará disponível em: http://localhost:5000
   - O backend estará disponível em: http://localhost:5050

5. **Parar os Contêineres**

   - Para parar os serviços, execute

   ```bash
   docker compose down
   ```
