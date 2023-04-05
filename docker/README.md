## Containers

Um container é um padrão de unidade de software que empacota código e todas as dependências de uma aplicação fazendo que a mesma seja executada rapidamente de forma confiável de um ambiente computacional para outro. *Fonte: docker.com*

São processos que ficam rodando no sistema operacional. 

Esse processos são baseados em 3 pilares.

**Namespaces** - isola os processos
- Pid
- User
- Network
- File system

No final das contas um container é um processo com sub-processos rodando dentro dele emulando um sistema operacional.

**cgroups** - controla os recursos
- memory = 500MB
- cpu_shares = 512

Isola os recursos computacionais para não inteferir nos outros processos na maquina.

**file system** - OFS (Overlay File System)
- layers individualizads


## Imagens

- Dockerfile 
	* Cria as imagens/containers de forma declarativa.
	* Através do Dockerfile é possível geara uma imagem (processo de build).

Uma imagem tem um estado imutável, ou seja, essa imagem não é alterada de forma alguma.
Possui uma camada de *read*/*write*, que permite criar e ler arquivos no container, porém, ao finalizar o processo esses dados são perdidos.

É possível gerar uma imagem de um container que esteja rodando (com suas alterações) realizando um *commit*.

As imagens ficam armazenadas dentro de um local denominado *Image Registry*.

## Docker


Docker é uma solução que consegue integrar namespace, cgroups e file system, denominado Docker Host.

- **Docker host**: 
	* é um processo (deamon) que disponibiliza uma API que fica rodando no computador host. 
	* Também é composto por um cache para armazenar as imagens utilizadas (baixadas do Image Registry).
	* Realiza o gerenciamento de volumes (compartilhamento de volume para persistencia de dados).
	* Realiza o gerenciamento da comunicação entre containers utilizando o conceito de Networks.

- **Docker client**: 
	* Programa que faz chamadas na API do docker host para criar containers.
	* Faz pull, push e roda imagems.

