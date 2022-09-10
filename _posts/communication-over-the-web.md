---
id: 10
title: 'Communication over the web'
date: '12-09-2022'
excerpt: ' SOAP, REST, JSON, XML, Interoperability... wait, wait! Intero what? Lets talk about communication between applications.'
cover: '/images/post9/cover.jpg'
time: '7 min'
category: 'DevOps'
link: 'devops'
language: 'en'

metakeyword: 'devops, web communication, api'
metadescription: 'Lets talk about communication between applications over the internet.'
---

## Introduction

These days, my wife has asked me specific questions about the API topic. She threw on the table a bunch of random letters that were on her mind: SOAP, REST, JSON, XML, Interoperability... wait, wait! "Intero" what? Yeah, she is going deep in her studies. But this is a subject for another article. Let's talk about **communication between applications over the internet**.

First of all, interoperability is a fancy way for a system to say: hey, I'm able to communicate with other systems transparently and without paying royalties to anyone. Though it may seem like a new word, it has been discussed since the late 2000s that whenever there was a need to talk about properties that allow the unrestricted sharing of resources between different applications. And whoever thinks that this term is restricted to IT system is wrong.

However, bringing the term to the technology environment side, from this capacity and the growth of open standard projects different languages, systems and companies can integrate and develop a direct line of communication between them. I mean, since 'interoperability' has become widespread, the management of data transfers has improved significantly.

## Protocols

Before we talk about communication mechanisms, we need to discuss communication protocols like HTTP or FTP and the various piece of details that complicate the head of a beginner in Web programming. Keep in mind the web communication also involves sockets, processes, buffers, clients, servers, and other subtopics that would give an entire article about each one. But for now, let's look at just one of the TCP/IP layers: application layer.

![TCPIP layers and protocols -fullwidth](images/post10/image1.png)

The application layer is not an application. Instead, it is a component within an application that controls the communication method to other devices. It is an abstraction layer service that masks the rest of the application from the transmission process.
<br>
- Ensures that the receiving device is identified, reachable and ready to accept data;

- When appropriate, enables authentication between devices for an extra layer of network security;

- Makes sure necessary communication interfaces exist, such as whether there is an Ethernet or Wi-Fi interface in the sender's computer;

- Ensures agreement at both ends on error recovery procedures, data integrity and privacy;

- Determines protocol and data syntax rules at the application level;

- Presents the data on the receiving end to the user application.

## In practice

Imagine that you have an application running on port 3000. When someone on the network decides to send some information to the IP address of your computer where your application is running and sends a "request" that wants to talk to whoever is connected to that port 3000, the operating system receives this and says, "Okay, who's listening on port 3000, let's see in the table, oh it's the process PID 11, I'll send it to its open pipe". Now your program, which was just listening, starts receiving bits. At this point, he can choose to accept or reject it. This is the *accept* step.

I know, this is perhaps the best example to explain when communication between applications is started. But I believe it has become clear that this doesn’t happen magically. For a conversation to exist, both of them need to agree on which commands they accept to exchange. This agreement between the two ends is the famous protocol. Protocols are what define the commands and values that both the browser and the web server program can understand, **the right pins to the right holes in the socket**.

Remember, the main objective is to transfer data from application A to application B, so let's restrict ourselves to the Application Layer and some of its protocols.<br>
- **HTTP:**
Hypertext Transfer Protocol It is the most basic and used for browsing internet sites and also works as a connection between the client and the server. The browser sends a request to access a page. This request happens when we put the address of some website in the search field in the browser. Meanwhile, the server sends an access permission response. With it come the files that make up the page that the user accesses. In addition to the hypertext information that makes other requests to take the reader to other pages through links.

- **FTP:**
An example of another protocol was the old FTP or File Transfer Protocol that nowadays nobody uses anymore for the same reason that Telnet is not used, both precede more modern security concepts. Many old FTP servers are exposed behind a web server, like the FTP from Unicamp that I used a lot in college and today hosts Linux file mirrors. If you type [ftp.unicamp.br](http://ftp.unicamp.br/) in your browser, you will see that it puts https:// in front, indicating that you are not using the FTP protocol.

- **SSH:**
Secure Shell means Security Block. It is one of the specific security protocols for exchanging files between client and server. The SSH protocol works from a public key, which verifies and authenticates the legitimacy of the server that the client wants to access (or vice versa). This access is done by a login and password, making the connection between computers more secure.

<em>Note: At the beginning of the internet we didn't use a web browser for everything. We used separate programs like FTP to transfer files. News to read Usenet news and discussions, literally newsgroups. Telnet to open remote terminal sessions.</em>

## Web services

The protocol between pins and sockets is defined through a communication interface called API (Application Programming Interface). So, we can say that APIs are interfaces created to establish a communication protocol between two applications. And each API operates according to a specific network protocol, depending on your needs and goals. For example:

## RESTful Web Service

The acronym REST, stands for **REpresentational State Transfer.** REST is an architectural style, meaning each unique URL represents an individual object of some sort. A REST web service uses HTTP and supports several HTTP methods: **GET, POST, PUT or DELETE**. It also offers simple CRUD-oriented services.

So, as you can see REST relies on a simple URL to make a request, instead of using XML. But in some situations, you must provide additional information, but most web services using REST rely exclusively on using the URL approach.
<br>
- Is easier to use for the most part and is more flexible;

- No expensive tools require to interact with the web service;

- Smaller learning curve;

- Way more efficient than SOAP (SOAP uses XML for all messages, REST can use smaller message formats);

- Fast (no extensive processing required).

## SOAP Web Service

SOAP is defined as **Simple Object Access Protocol**. Microsoft originally developed SOAP to take the place of older technologies that don’t work well on the internet such as the Distributed Component Object Model.

This web service protocol exchanges structured data using XML and generally HTTP and SMTP for transmission. SOAP also uses WSDL (Web Services Description Language) documents to distribute a web service description model. This describes how the SOAP requests (client-side) and responses (server-side) must appear. Also, SOAP web Services have standards for security and addressing.
<br>
- Language, platform, and transport independent (REST requires use of HTTP);

- Works well in distributed enterprise environments;

- Standardized;

- Provides great pre-build extensibility in the form of the WS standards;

- Built-in error handling;

- Automation when used with certain language products.

## JSON x XML

The two data formats are widely used throughout the web to work with data, and for a good reason — they represent some of the most efficient and useful data representation methodologies available to developers. The question “which is better?” doens’t make sense because the asnwer depends on what you want to do with your API. Lets see some points about both:

**XML**
- XML is a markup language, not a programming language, that has tags to define elements;

- Data Storage: XML data is stored as a tree structure;

- Processing: Can perform processing, and formatting documents and objects;

- Speed: Bulky and slow in parsing, leading to slower data transmission;

- Document size: Document size is bulky and with big files, the tag structure makes it huge and complex to read.

![XML code example -fullwidth](images/post10/image2.png)

**JSON**
- JSON is just a format written in JavaScript;

- Data Storage: Data is stored like a map with key value pairs;

- Processing: Does not do any processing or computation;

- Speed: Very fast as the size of file is considerably small, faster parsing by the JavaScript engine and hence faster transfer of data;

- Document size: Compact and easy to read, no redundant or empty tags or data, making the file look simple.

![XML code example -fullwidth](images/post10/image3.png)

## Overview

So, let's recap. For communication over the web to happen, applications need to follow the same communication protocol (eg HTTPS). We call API, the contract/protocol and the architecture defined by these applications (eg REST). The architectures work with different types of data formats (eg JSON).

In the end, that bunch of letters my wife threw were all part of the same bucket. By the way, she has reviewed this entire article and now has a better understanding of how two applications communicate over the web. Quest completed!
