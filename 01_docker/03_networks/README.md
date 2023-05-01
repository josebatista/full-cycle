# Network


O docker possui um mecanismo de NETWORK, ou seja, uma rede interna. Dentre diversas funcionalidades para as networks a mais comum é fazer um container se comunicar com outro. Para conectar dois containers é preciso que eles estejam na mesma rede.

## Modos de network no Docker
- **bridge** 	-> Tipo default de network, é utilizado principalmente para facilitar a comunicação de um container com outro.
- **host** 	-> Mescla a rede da máquina host com a rede do container. Dessa forma o container consegue acessar o host (máquina local).
- **overlay**	-> Consegue realizar a comunicação de vários Dockers de máquinas diferentes ("cluster" de docker).
- **maclan**	-> Permite atribuir um mac address para um container e simular como se esse container estivesse conectado na sua rede.
- **none**	-> Nenhum, o container roda de forma isolada e não tem comunicação.

O mais comum é utilizar *bridge* e em algum casos específicos o *host*.


## Comando de NETWORK do docker
### Listar as networks existentes
- **docker network ls**

### Limpar as networks que não estão sendo utilizadas
- **docker network prune**

### Inspecionar a network (ver quais containers estão utilizando)
- **docker inspect *networkName***
> Ex.: docker inspect bridge

### Criar nova network
- **docker network create --driver bridge|host... networkName**
> Ex.: docker network create --driver bridge minharede


### Rodando container e utilizando a rede criada
- **docker run --network networkName image**
> Ex.: docker run -d --name ubuntu1 --network minharede ubuntu


### Conectando container na rede
- **docker network connect networkName containerName/containerId**
> Ex.: docker network connect minharede ubuntu3


### Exemplo de container rodando com rede host (mesclada com a maquina host)
> docker run -d --name nginx --network host nginx

Ao rodar o comando acima, seria criado um container com o NGINX que seria acessível pela porta 80 da máquina local (sem a necessidade de mapear portas), pois estaria mesclando a rede do container com a do host.


### Acessando recurso do Docker Host do container
Dentro do container pode ser acessado um serviço do docker host utilizando o endereço `host.docker.internal` ou `gateway.docker.internal`.
> Ex.: curl http://host.docker.internal:8080
> Ex.: curl http://gateway.docker.internal:8080


