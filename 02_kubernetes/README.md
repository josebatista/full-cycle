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

`kind create cluster --config=k8s/kind.yaml --name=fullcycle`


### Comando kubectl

- Listando os clusters ja configurados

> kubectl config get-clusters


- Alterando a configuração do kubectl para outro contexto (servidor)

> kubectl config use-context [kubernetesContextName]


- Direcionar porta do pod para validar se o pod esta funcionando corretamente no kubernetes

> kubectl port-forward pod/[podName] [localPort]:[podPort]

`kubectl port-forward pod/goserver 8080:80`


- Criar Pods/ReplicaSet/Deployment baseado em um arquivo de configuração

> kubectl apply -f [fileName]

`kubectl apply -f k8s/pod.yaml`


- Listando Pods

> kubectl get po


- Deletando um Pod

> kubectl delete pod [podName]

`kubectl delete pod go-server`


- Listando ReplicaSet

> kubectl get rs


- Deletando ReplicaSet

> kubectl delete rs [replicaSetName]

`kubectl delete rs go-server`


- Listando Deployments

> kubectl get deployments


- Deletando Deployment

> kubectl delete deployment [deploymentName]

`kubectl delete deployment go-server`


- Historico de Deployments

> kubectl rollout history deployment [deploymentName]

`kubectl rollout history deployment go-server`


- Voltando versão anterior do deploymento

> kubectl rollout undo deployment [deploymentName] --to-revision=[revisionNumber]

`kubectl rollout undo deployment go-server --to-revision=2`


- Lendo informações dos Deployments/ReplicaSet/Pod

> kubectl describe [deployment|replicaset|pod] [name]

`kubectl describe deployment go-server`




