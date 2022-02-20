---
id: 5
title: 'Hello, Containers'
date: '20-02-2022'
excerpt: 'Like the real world example of a container, the contents is isolated. Let me show you.'
cover: '/images/post5/cover.jpg'
time: '4 min'
category: 'DevOps'
link: 'devops'
language: 'en'

metakeyword: 'front end, web development, patterns'
metadescription: 'In the last decade, front end development went through multiple paradigm changes that make it hard to follow.'
---

Imagine that you are able to guarantee the same behavior of your application on your machine and on the user's machine. And doesn't matter the OS, machine settings or anything like that. As if a "box wrapped" your application during the development and after that it will be exactly duplicate in the production environment. I mean, same versions of dependencies, libraries, node and so on. This is just an example of applying the concept of containers.

## Problem and solution

Containers have become so famous and popular for a good reason. Delivering production software that behaves exactly as it was developed is, of course, the classic problem that crosses generations of developers and still present today. Now, even without understanding how a container works, you already know that one of the main benefits of a container is the ability to completely isolate the environment where an application is running and being able to move this entire context wherever you want.

When I say "isolate applications" I mean "isolate processes". In other words, each application firmly believes that it has access to all resources managed by the operating system kernel. Also, each container doesn't carry just one application. In fact, they also load all the necessary environment for this application to run. Including data (volumes).

![Containerized Applications -fullwidth](images/post5/container.png)

## Virtual machines (VMs) or containers?

If we look at the advantages of VMs and Containers, we might think they are the same things. After all, they simulate an isolated and independent environment capable of managing host machine resources. HOWEVER, looking under the hood, we can see that their structures are different.

![Virtual Machines and Docker Containers -fullwidth](images/post5/virtual.png)

**Ok, wait! What Is Virtualization and Hypervisor?** Virtualization is the process of creating a simulated computing environment that’s abstracted from the physical computing hardware. The software that enables virtualization is called a hypervisor. Simple.

As the image shows, each VM requires its own OS. The OS and any applications running on an individual VM share hardware resources from a single host server, or from a pool of host servers. With containers, instead of virtualizing the underlying computer like a VM, just the OS is virtualized. Containers sit on top of a physical server and its host OS, typically Linux or Windows. Each container shares the host OS kernel and, usually, the binaries and libraries, too.

There are many points that determine the choice of a VM or Container. My goal is just to help you think about them. To explain each point, let's consider the most popular cloud services on the market: AWS, Azure, Google Cloud Platform (link).

### Complexity

- VM - Today it is possible to upload virtual servers with few clicks and without worrying about configuration details. Sometimes a simple server with your application installed is enough.

- Container - But, if the need to use containers, we will hardly see just a single server. Typically, we see two servers and an orchestrator like Kubernetes or ECS, for example. In this case, several new layers are needed to manage, that is, it has more variables, more steps and more software to organize.

### Creation speed

- VM - Let's assume that the setup time for a virtual machine is 5 hours. Whenever it is necessary to have a new server, the time to create will be the same (5 hours).

- Container - The creation time of the container ecosystem is significantly longer than a VM at the first time. Following the same example, creating servers, configuring Orchestrators, and managing containers would take approximately 10 hours. However, every next time it will only take 1 hour, as we will already have the image (blueprint) of this ecosystem.

### Portability

- VM - In a normal environment, applications are developed on different operating systems, with different versions and (sometimes) different supporting software. This is a point to be careful!

- Container - As I said before, one of the great advantages of using a container is to develop the application inside the same container that it will be served in production. In other words, there are no compatibility issues.

### Number of servers and costs

- VM - If your project needs a few servers to run, for example, one for the application and one for the database, working with VMs will be less expensive initially and easier to maintain.

- Container - However, if your application needs many servers and scalability, containers and orchestrators ensure more stability, load balance, ips management and so on. In the medium and long term, it will be the cheapest option.

## Docker

It's impossible to talk about Containers and not talk about that! Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. As we saw talking about container, Docker containers are always portable as well. This means that you can build containers locally and deploy containers to any docker environment (other computers, servers, cloud, etc …).

[After install](https://docs.docker.com/desktop/), check some of the initial commands, but you can find the official [documentation](https://docs.docker.com/) for these commands from Docker’s documentation page:

- **docker –version**

  This command is used to get the currently installed version of docker.
  ![Virtual Machines and Docker Containers -fullwidth](images/post5/code1.png)

- **docker pull**

  This command is used to pull images from the docker repository(hub.docker.com).
  ![Virtual Machines and Docker Containers -fullwidth](images/post5/code2.png)

- **docker run**

  This command is used to create a container from an image.
  ![Virtual Machines and Docker Containers -fullwidth](images/post5/code3.png)

- **docker ps**

  This command is used to list the running containers.
  ![Virtual Machines and Docker Containers -fullwidth](images/post5/code4.png)

- **docker ps -a**

  This command is used to list the running containers.
  ![Virtual Machines and Docker Containers -fullwidth](images/post5/code5.png)

- **docker exec**

  This command is used to access the running container.
  ![Virtual Machines and Docker Containers -fullwidth](images/post5/code6.png)

- **docker stop**

  This command stops a running container.
  ![Virtual Machines and Docker Containers -fullwidth](images/post5/code7.png)

- **docker kill**

  This command kills the container by stopping its execution immediately. The difference between ‘docker kill’ and ‘docker stop’ is that ‘docker stop’ gives the container time to shutdown gracefully, in situations when it is taking too much time for getting the container to stop, one can opt to kill it.

- **docker commit**

  This command creates a new image of an edited container on the local system.

- **docker login**

  This command is used to login to the docker hub repository.

- **docker push**

  This command is used to push an image to the docker hub repository.

- **docker images**

  This command lists all the locally stored docker images.
  ![Virtual Machines and Docker Containers -fullwidth](images/post5/code8.png)

- **docker rm**

  This command is used to delete a stopped container.

- **docker rmi**

  This command is used to delete an image from local storage.

- **docker build**

  This command is used to build an image from a specified docker file.

## Finally

Fortunately, more than half of my projects use docker (containers), which means that I will be talking about this infrastructure again here on the blog. Hope you enjoyed reading!
