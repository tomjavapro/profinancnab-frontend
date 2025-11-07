# Usando no Node 18
FROM node:18

# Trabalhando no diretório app, onde a aplicação irá executar.
WORKDIR /app

# Copiando apenas o package e o package-lock para o WORKDIR.
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando tudo do host para o container
COPY . .

# Para construir os estáticos na máquina do container.
RUN npm run build

# Comando para executar a aplicação.
# Na porta 9090
# Propriedade host para habilitar o acesso a aplicação a partir de qualquer máquina. bind host 0.0.0.0.
ENTRYPOINT [ "npm", "run", "preview", "--", "--port", "9090", "--host", "0.0.0.0" ]




# # Imagem base Node.js 18 Alpine
# FROM node:18-alpine

# # Define diretório de trabalho
# WORKDIR /app

# # Copia arquivos de dependências
# COPY package*.json ./

# # Instala dependências
# RUN npm install

# # Copia código fonte
# COPY . .

# # Build da aplicação
# RUN npm run build

# # Expõe porta 3000
# EXPOSE 3000

# # Comando para iniciar a aplicação
# CMD ["npm", "start"]