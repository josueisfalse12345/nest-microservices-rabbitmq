# Usamos la imagen de Node.js 20
FROM node:20-alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g nx
COPY . .

# Exponemos el puerto del microservicio
EXPOSE 3001
EXPOSE 3333

# Comando para iniciar el microservicio usando nx
CMD ["npx", "nx", "serve", "number-action"]
CMD ["npx", "nx", "serve", "gateway"]
