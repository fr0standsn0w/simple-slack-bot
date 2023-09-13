# Slack bot application

### Preparing project for local dev and production
```sh
cp .env.example .env
```

### Local development
```sh
docker-compose up --build
``` 

### Production build
```sh
TARGET=executor docker-compose up --build
```