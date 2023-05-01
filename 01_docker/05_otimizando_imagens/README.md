# Executando os exemplos


## Realizando o build de produção do container do Laravel
> docker build -t pereiraze/laravel:prod . -f 01_Dockerfile_laravel.prod


## Realizando o build de produção do container do nginx
> docker build -t pereiraze/nginx:prod . -f 02_Dockerfile_nginx.prod

## Criando network para comunicação entre containers
> docker network create laraNet

## Rodando o container do laravel
> docker run -d --network laraNet --name laravel pereiraze/laravel:prod

## Rodando o container do nginx
> docker run -d --network laraNet --name nginx -p 8000:80 pereiraze/nginx:prod


