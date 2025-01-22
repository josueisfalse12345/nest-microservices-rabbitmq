# README

## Cómo ejecutar la aplicación con Docker

Este proyecto demuestra un microservicio usando **NestJS** y **RabbitMQ**. Sigue los pasos a continuación para configurar y ejecutar los servicios.

### Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- Docker
- Docker Compose

### Pasos para ejecutar

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Construye y levanta los contenedores:
   ```bash
   docker-compose up -d
   ```

   Este comando:
   - Construirá las imágenes de Docker para los microservicios.
   - Iniciará los servicios, incluyendo RabbitMQ y el microservicio.

3. Verifica que RabbitMQ está funcionando accediendo a su interfaz de gestión:
   - URL: [http://localhost:15672](http://localhost:15672)
   - Usuario: `guest`
   - Contraseña: `guest`

### Acceder al Microservicio

Para probar el microservicio, utiliza el siguiente comando curl de ejemplo:

```bash
curl "http://localhost:3333/api/process-number?number=5"
```

Este endpoint procesa un número pasado como parámetro de consulta (`number=5` en este ejemplo). Reemplaza `5` con cualquier otro número para probar diferentes entradas.

### Notas adicionales

- El archivo `docker-compose.yml` asegura que todos los servicios necesarios estén correctamente enlazados y en ejecución.
- El servicio de RabbitMQ está configurado para ejecutarse con credenciales por defecto (`guest/guest`).

### Detener los servicios

Para detener y eliminar todos los contenedores en ejecución, usa:

```bash
docker-compose down
```