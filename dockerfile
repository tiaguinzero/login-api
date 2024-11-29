# Usar uma imagem base do Node.js
FROM node:14

# Criar um diretório de trabalho
WORKDIR /usr/src/app

# Copiar o package.json e instalar as dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta em que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]
