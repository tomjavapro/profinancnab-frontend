# ProFin CNAB - Sistema de Processamento de Arquivos de Transações Financeiras CNAB (Frontend)

![Badge de Licença](https://img.shields.io/badge/license-MIT-blue.svg)

## 📖 Sobre o Projeto

O **ProFin CNAB** é uma aplicação web full stack para processamento, armazenamento e visualização de transações financeiras a partir de arquivos no formato **CNAB** (Centro Nacional de Automação Bancária).

O sistema permite que o usuário realize o upload de um arquivo de remessa `.txt`. O backend processa este arquivo, normaliza os dados e os armazena em um banco de dados. O frontend exibe as transações de forma clara, agrupadas por loja e com os saldos totalizados.

## ✨ Funcionalidades

- **Upload de Arquivo CNAB**: Interface para envio de arquivos `.txt` contendo as transações.
- **Processamento no Backend**: API REST que recebe o arquivo, faz o parsing e armazena as transações.
- **Visualização de Transações**: Tela que lista todas as transações importadas, com informações como tipo, valor, CPF, cartão e dados da loja.
- **Saldos por Loja**: A página de visualização também exibe o saldo total para cada loja identificada no arquivo.


## 🛠️ Tecnologias Utilizadas

#### **Backend** ([profinancnab-backend/README.md](https://github.com/tomjavapro/profinancnab-backend/blob/main/README.md))
- **Java 17+**
- **Spring Boot**
- **Spring Batch** (para processamento em lote)
- **Spring Web** (para a exposição de endpoints REST)
- **Spring Data JDBC**
- **PostgreSQL** (banco de dados principal)
- **H2 Database** (para testes e desenvolvimento local)
- **Gradle** (gerenciador de dependências e build)
- **Docker** e **Docker Compose** (para orquestração de ambientes)

#### **Frontend** ([profinancnab-frontend/README.md](https://github.com/tomjavapro/profinancnab-frontend/blob/main/README.md))
- **React** (19.1.1)
- **Vite** (7.1.7)
- **Tailwindcss** (4.1.16)
- **JavaScript**
- **HTML5**
- **CSS3**
- **Font Awesome** (para ícones)
- **Docker**

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, você precisará ter o Java (JDK 17+), Maven, Node.js e NPM (ou Yarn) instalados.

### 1. Clonar o Repositório

```bash
git clone https://github.com/tomjavapro/profinancnab-frontend.git
cd profinancnab-frontend
```

### 2. Executar o Backend

- [profinancnab-backend/README.md](https://github.com/tomjavapro/profinancnab-backend/blob/main/README.md)

O servidor backend estará rodando em `http://localhost:8080`.

### 3. Executar o Frontend

Abra um novo terminal, navegue até a pasta do frontend (`profinancnab-frontend`), instale as dependências e inicie a aplicação:

```bash
npm install
npm run dev
```

A aplicação frontend estará disponível em `http://localhost:3000` e se conectará automaticamente ao backend.

### 4. Executar com Docker (Alternativo)

Como alternativa, você pode construir e executar a aplicação frontend usando Docker. Certifique-se de ter o Docker instalado e em execução.

1.  **Construa a imagem Docker:**

    Navegue até a raiz do projeto (`profinancnab-frontend`) e execute o comando abaixo para construir a imagem:

    ```bash
    docker build -t profinancnab-frontend .
    ```

2.  **Execute o contêiner Docker:**

    Após a construção da imagem, execute o seguinte comando para iniciar um contêiner. A aplicação estará disponível em `http://localhost:3000`.

    ```
    docker run profinancnab-frontend
    ```


## ⚙️ Deploy

Este projeto foi implantado utilizando os seguintes serviços:

- Backend (Spring Boot): Render.com
    - URL do Serviço: https://profinancnab-backend-webservice.onrender.com
    - Repositório GitHub: https://github.com/tomjavapro/profinancnab-backend

- Frontend: Render.com
    - URL do Serviço: https://profinancnab-frontend.onrender.com
    - Repositório GitHub: https://github.com/tomjavapro/profinancnab-frontend

- Banco de Dados (PostgreSQL): Neon.com
    - Um serviço de banco de dados PostgreSQL gerenciado foi utilizado para persistência dos dados.

A configuração de deploy no Render.com foi realizada para acessar diretamente os repositórios GitHub mencionados, facilitando a integração contínua e o deploy automático.


## 📷 Screenshots

![Print 01](screenshot/profinancnab-frontend.png "profinancnab-frontend")


## 📝 Licença

Este projeto está sob a licença MIT.