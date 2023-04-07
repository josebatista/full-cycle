# Principais Comandos

## Listar container
- **docker ps** -> listar os containers que estão rodando na máquina.
- **docker ps *-a*** -> lista também os container que estão parados no momento.



## Rodar container
- **docker run *image:version*** -> roda o container com a imagem e versão escolhida. Se não for informada a versão será pego a última versão (latest).
`Ex.: docker run *hello-world*, docker run *ubuntu*, docker run *nginx*`

### Nomeando o container
- **docker run *--name name* image** -> Define um nome para o container.

### Modo iterativo
- **docker run *-it* ubuntu *comando*** -> inicia o container com a última versão do ubuntu, e deixa o console travado na execução de um determinado comando (dentro do container).
`Ex.: *docker run -it ubuntu bash*`

### Remover container ao finalizar ele
- **docker run *--rm* ubuntu** -> ao encerrar o container o mesmo será removido e não será mantido na máquina host.



## Executar comandos dentro do container
- **docker exec *containerId* *comando*** -> executa o comando em um container que já esteja rodando previamente.
`Ex.: *docker exec 12asd ls*`

### Modo iterativo
- **docker exec *-it* *containerId* *comando*** -> executa o comando em um container já em execução e deixa o console travado na execução do comando (dentro do container).
`Ex.: *docker exec -it nginx bash*`


## Publicar portas
### Mapear porta do container para máquina host
- **docker run *-p localPort:containerPort* image** -> Mapear uma porta local para apontar para uma porta que está sendo exposta pelo container.
`Ex.: *docker run -p 8080:80 nginx* -> Irá mapear a porta 8080 da minha máquina local com a porta 80 do host, dessa forma ao acessar no navegador a porta 8080 estarei acessando a porta 80 do container.`

### Container Detach
Ao rodar determinados container o seu terminal irá ficar 'travado', para evitar isso pode ser informado o *-d* ao executar o docker run. Dessa forma o container será iniciado e seu terminal ficará livre para executar outros comandos.
`Ex.: *docker run -d -p 8080:80 nginx* -> Roda o container, mapeia a porta local 8080 para a porta 80 do container e libera o terminal`



## Parando containers
- **docker stop *containerId/containerName* -> Finaliza a execução do container.

## Removendo containers
Ao finalizar a execução do container, todos os containers se mantém ainda na máquina. Você pode remover definitivamente esses containers executando o comando:

- **docker rm *containerId/containerName*** -> Remove o container que foi/está parado. Pode ser utilizado o id ou o nome do container.
- **docker rm *containerId/containerName* -f** -> Força a parada do container e remove. Pode ser utilizado o id ou o nome do container.



## Montando/Mapeando volumes (bind mount)
### Forma antiga
- **docker run -v src:dest image** -> Iniciar o container mapeando a porta de origem (da máquina local) em um determinado destino (diretório dentro do container).
`Ex.: *docker run -p 8080:80 -v ~/site01:/usr/share/nginx/html nginx* -> Roda um container NGINX onde o conteúdo do diretório HTML do container será o conteúdo do diretório site01.`

### Forma atual
- **docker run *--mount type=bind,source=site01,target=html* image** -> Iniciar o container mapeando a porta de origem (da máquina local) em um determinado destino (diretório dentro do container).
`Ex.: *docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)/site01,target=/usr/share/nginx/html nginx* -> Roda um container NGINX onde o conteúdo do diretório HTML do container será o conteúdo do diretório site01.`

`Com o *-v* no caso do diretorio local que você esteja tentando montar não existir, será criado o diretório localmente, utilizando o *--mount*, iremos receber um erro informando que o diretório está incorreto.`



## Volumes
o docker além de mapear diretórios locais para o container (bind mount), permite também que sejam criados volumes. Dessa forma fica fácil realizar backups e até mesmo compartilhar o mesmo volume (arquivos) entre diversos containers (até mesmo simultâneamente).

### Criar volume
- **docker volume *create nomeDoVolume*** -> Irá criar um volume com o nome informado e driver local.
### Removendo volume
- **docker volume *rm nomeDoVolume*** -> Irá remover o volume com o nome informado.
### Removendo volumes que não estão mais sendo utilizados.
- **docker volume *prune*** -> Irá remover todos os volumes não utilizados.
### Listando informações do volume
- **docker volume *inspect nomeDoVolume*** -> Irá retornar um JSON com as informações do volume, como local que está sendo armazenado na máquina local por exemplo.

### Mapeando volume para diretório no container
- **docker run --name nginx -d *--mount type=volume,source=nomeDoVolume,target=/app* nginx**
- **docker run --name nginx -d *-v nomeDoVolume:/app* nginx**

