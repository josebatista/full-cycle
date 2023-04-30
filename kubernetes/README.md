# Kubernetes, um gerenciador/orquestrador de containers

"Kubernetes (K8s) é um produto Open Source utilizado para automatizar a implantação, o dimensionamento e o gerenciamento de aplicativos em contêiner" Fonte: https://kubernetes.io/pt

Foi criado pelo Google	- Borg
			- Omega
			- Kubernetes


## Pontos importantes
- Kubernetes é disponibilizado através de um conjunto de APIs.
- Normalmente acessamos a API usndo CLI: **kubectl**.
- Tudo é baseado em estado. Você configura o estado de cada objeto.

- Kubernetes Master
	- Kube-apiserver
	- Kube-controller-manager
	- Kube-scheduler

- Outros Nodes:
	- Kubelet
	- Kubeproxy



Conceitos básicos:

- **Node**: Instância de máquina (como uma VM).
- **Cluster**: Conjunto de máquinas (Nodes).
	- Cada Máquina possui uma quantidade de vCPU e Memória.


- **Pods**: Unidade que contém os containers provisionados.
	- O Pod representa os processos rodando no cluster.
	- Normalmente você estará rodando um container por Pod.

- **Deployment**: Tem por objetivo provisionar os Pods.
	- ReplicaSet: Quantidade de replicas do pod que serão criadas.

- **Services**: É uma forma de agregar um conjunto de pods para então implementar políticas de visibilidade.


## Kind
É uma ferramenta para rodar localmente clusters do Kubernetes utilizando o Docker. (Utilizar para estudos).
Também existe o Minikube, porém essa ferramenta utiliza uma VM e não Docker.


### Comandos básicos

- Criando cluster utilizando o kind
> kind create cluster

- Listando os clusters criados
> kind get clusters

- Removendo clusters utilizando o kind
> kind delete clusters [name]

- Criando clusters utilizando arquivo de configuração
> kind create cluster --config=[file] --name=[cluterName]
	- > kind create cluster --config=k8s/kind.yaml --name=fullcycle




