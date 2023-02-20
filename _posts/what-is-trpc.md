---
id: 11
title: 'What is tRPC?'
date: '20-02-2023'
excerpt: 'Wait, so are we going back to using mono repositories which contain the whole application? Like Java + Tomcat + Thymeleaf???'
cover: '/images/post11/cover.jpeg'
time: '8 min'
category: 'Front end'
link: 'frontend'
language: 'en'

metakeyword: 'front end, web development, trpc'
metadescription: 'TypeScript Remote Procedure Call is the most simple and lightweight library for remotely calling backend functions on the client side'
---

![What is tRPC? -fullwidth](images/post11/cover.jpeg)

I need to assume that you know what an API is or at least read the Wikipedia definition so this article won't be too long. Just for our context, these are rules that allow the client sends and receives messages from the server through the internet. [We already talk about it in another article, right?](https://cassiorsfreitas.com/communication-over-the-web)

In chronological order, the first communications were through Web Sockets, where only one function was provided to send and receive bits and everything else was up to you. And you can imagine the amount of problems caused by managing bits over the web, right? Because of that, many people worked to create lighter weight solutions and then RPC was born.

## What is RPC?

A Remote Procedure Call (RPC) is a network programming model (or interprocess communication technique) that is used for point-to-point communications between softwares. Client and server applications communicate during this process. The idea behind RPC is that a computer program can call and execute a subroutine on a remote system just like it would call a local subroutine, **but the network communication details are hidden from the user**.

For that, it is necessary to create an agnostic communication bridge between client and server capable of "translating" these calls in both directions. That's when IDL (Interface Definition Language) comes into play!

![End to end testing example -fullwidth](images/post11/idl.png)

Then you can use the IDL compiler tool to generate the code stub to take care of the serialisation and deserialisation of the message for both the client and server sides. Is the same case for GraphQL nowadays: **code generation from the schema file**.

This solution was questioned a lot because it generates some negative effects such as the high coupling between the systems and a difficulty in debugging the calls. On the other hand, regarding internal APIs (gRPC) it is still a good solution to consider.


## What is tRPC?

TypeScript Remote Procedure Call is the most simple and lightweight library for remotely calling backend functions on the client side. I mean, there are no routes, verbs, headers, generators... there is literally a call to a function in another environment. Although the suffix is called RPC, it only inherits the concept to call the remote function locally but in a more simplistic minimal way that doesn’t have the IDL file and the code generation process.

![End to end testing example -fullwidth](images/post11/trpc.gif)

> TypeScript’s great inference to infer your API router’s type definitions and lets you call your API procedures from your frontend with full typesafety and autocompletion. When using tRPC, your front- and backend feel closer together than ever before, allowing for an outstanding developer experience.

If on the one hand we have more type safety and less code to worry about, on the other hand this approach encourages the use of mono repos and and requires knowing TypeScript (which should be mandatory for any web developer 🤡).

## Building blocks to create modern web applications
In the context of web applications and lambdas edges (functions that run on the server side), many technologies have emerged with purpose of generating code packages/bundles that run on the client side and others on the server side.

With NextJs for example, from a development perspective, the project will be developed as a mono repository as there is a backend being generated that supports all the frontend code. It is easily possible to create functions that only run on the server side and the client will never have access. This is the perfect scenario to choose tRPC!

## For frontend developers

If you already know NextJs and already work with Prims (ORM), I recommend starting a project using the [T3 Stack](https://create.t3.gg/) to see in the code how tRPC works and the great advantage that this layer of abstraction can offer to your experience as a frontend developer.
