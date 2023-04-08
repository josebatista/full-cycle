# IMAGENS

## O que são imagems? 
Imagens a grosso modo são uma espécie de template de container que será gerado. A imagem é imutável. Todo container através de uma imagem possui uma camada de gravação de arquivos.

## Docker HUB
O Dockerhub é um repositório onde você pode disponibilizar suas imagems, de forma pública ou privada. Ao utilizar uma imagem do NGINX por exemplo, estamos utilizando uma imagem que foi enviada para o DockerHub. Resumindo é um local onde as imagens docker são armazenadas e disponibilizadas para uso.
Para que a publicação seja possível, você primeiramente você terá que realizar o login em sua conta digitando:
`docker login`


Realizado o login basta realizar o push de sua imagem:
`docker push <nome da imagem>`


Para realizar o download de qualquer imagem do DockerHub pode ser realizado utilizando o comando abaixo:
`docker pull <nome da imagem:tag>`


### Listando imagens
`docker images`

### Remover uma imagem
`docker rmi <nome da imagem>`

### Remover todas as imagens
`docker rmi $(docker images -q) -f`



## Dockerfile
É um arquivo declarativo que tem como objetivo, construir uma imagem através de outra imagem.

O Dockerfile possui toda a estrutura e comandos necessários para que ações sejam executadas no processo de "build", ou seja, no processo de construção da imagem.

### Exemplo de Dockerfile

```
FROM golang:1.14

WORKDIR /go/src/

COPY . .

RUN GOOS=linux go build main.go

EXPOSE 8081

ENTRYPOINT ["./main"]
```


Após a criação do arquivo do Dockerfile, você poderá criar sua própria imagem que poderá ser publicada no DockerHub

`docker build -t <seu-user>/<nome-da-imagem>:<versao-da-imagem> <diretorio-do-dockerfile>`
> Ex.: docker build -t pereiraze/teste-image:latest .


Você pode especificar o nome do Dockerfile através do comando

`docker build -t <seu-user>/<nome-da-imagem>:<versao-da-imagem> <diretorio-do-dockerfile> -f <nome-do-arquivo>`
> Ex.: docker build -t pereiraze/teste-image:latest . -f Dockerfile.prod


## Entendendo a estrutura do Dockerfile

- FROM baseImage 	-> Indica qual será a imagem base para o nosso container
- WORKDIR <diretorio>	-> Diretorio que você irá trabalhar no container, durante o build o mesmo será criado caso não exista.
- RUN <comando>		-> Comando que deverá ser executado durante o processo de criação do container.
- COPY <src> <dest>	-> Copia os arquivos da origem para o diretório destino no container.
- EXPOSE <port>		-> Porta que será exposta para que outros container possam ter acesso.
- ENTRYPOINT <comandos>	-> Comandos que serão executados ao iniciar o container (COMANDO FIXO). Deverá seguir o padrão '["", "", ""]. Ex.: ENTRYPOINT ["echo", "hello ", "world"]
- CMD			-> Comando que irá rodar após o ENTRYPOINT, esse poderá ser recebido por parâmetro no comando docker ao iniciar o container (COMANDO VARIÁVEL).


> *CMD* entra como parâmetro do *ENTRYPOINT*







