---
id: 10
title: 'Communication over the web'
date: '12-09-2022'
excerpt: ' SOAP, REST, JSON, XML, Interoperability... wait, wait! Intero what? Lets talk about communication between applications.'
cover: '/images/post10/cover.jpg'
time: '7 min'
category: 'DevOps'
link: 'devops'
language: 'en'

metakeyword: 'devops, web communication, api'
metadescription: 'Lets talk about communication between applications over the internet.'
---

## Introduction

Lately, my wife's delving into some intricate API questions, tossing around a jumble of tech terms: SOAP, REST, JSON, XML, and something about "Intero" - wait, what's that? She's really digging deep into her studies. But that's a story for another time. Let's zone in on **communication between applications over the internet**.

Interoperability, in simple terms, means a system's knack for seamless communication with other systems, sans any royalties or complexities. While it might sound new, it's been on the tech radar since the late 2000s, whenever the need arose to discuss features enabling unhindered resource sharing among various applications. And here's the kicker: this term isn't limited to just IT systems.

In the tech sphere, leveraging this capability and the proliferation of open standard projects has allowed diverse languages, systems, and companies to connect and establish direct communication channels. With 'interoperability' in the picture, the management of data transfers has seen a significant uptick in efficiency.

## Protocols

Before diving into communication mechanisms, let's untangle the web of communication protocols such as HTTP or FTP. For beginners in web programming, these intricacies can often confound. Web communication isn't just about protocols; it encompasses sockets, processes, buffers, clients, servers, and an array of subtopics, each worthy of an entire article.

For the moment, let's narrow our focus to just one slice of the TCP/IP layers: the application layer.

![TCPIP layers and protocols -fullwidth](images/post10/image1.png)

Contrary to its name, the application layer isn't an application itself. Rather, it's a vital component nestled within an application, overseeing communication with other devices. Functioning as an abstraction layer service, it shields the inner workings of the application, masking the intricacies of the transmission process.
<br>
- Ensures that the receiving device is identified, reachable and ready to accept data;

- When appropriate, enables authentication between devices for an extra layer of network security;

- Makes sure necessary communication interfaces exist, such as whether there is an Ethernet or Wi-Fi interface in the sender's computer;

- Ensures agreement at both ends on error recovery procedures, data integrity and privacy;

- Determines protocol and data syntax rules at the application level;

- Presents the data on the receiving end to the user application.

## In practice

Picture this: Your application is humming away on port 3000. When someone on the network sends data to the IP address of your computer, aiming to connect with whoever's handling port 3000, the operating system steps in. It checks its table and identifies that process PID 11 is the listener on that port. The OS then redirects the incoming data to the open pipe connected to that process.

Now, your program, which was quietly listening, begins receiving these bits. At this juncture, it faces a decision: accept or reject? This is the pivotal acceptance moment.

Indeed, this example vividly demonstrates that communication between applications isn't a magical occurrence. For a meaningful exchange to take place, both ends must align on the commands they're willing to swap. Enter the revered protocol. Protocols define the language, the set of commands, and values that both the browser and the web server program comprehend—a synchronization of the right pins with the right holes in the socket. This agreement is what facilitates seamless communication between these entities.

When it comes to transferring data from application A to application B, our focus narrows down to the Application Layer and its protocols. This layer exclusively handles the seamless exchange of data between applications, shielding the underlying network complexities.<br>
- **HTTP:**
Hypertext Transfer Protocol It is the most basic and used for browsing internet sites and also works as a connection between the client and the server. The browser sends a request to access a page. This request happens when we put the address of some website in the search field in the browser. Meanwhile, the server sends an access permission response. With it come the files that make up the page that the user accesses. In addition to the hypertext information that makes other requests to take the reader to other pages through links.

- **FTP:**
An example of another protocol was the old FTP or File Transfer Protocol that nowadays nobody uses anymore for the same reason that Telnet is not used, both precede more modern security concepts. Many old FTP servers are exposed behind a web server, like the FTP from Unicamp that I used a lot in college and today hosts Linux file mirrors. If you type [ftp.unicamp.br](http://ftp.unicamp.br/) in your browser, you will see that it puts https:// in front, indicating that you are not using the FTP protocol.

- **SSH:**
Secure Shell means Security Block. It is one of the specific security protocols for exchanging files between client and server. The SSH protocol works from a public key, which verifies and authenticates the legitimacy of the server that the client wants to access (or vice versa). This access is done by a login and password, making the connection between computers more secure.

<em>Note: At the beginning of the internet we didn't use a web browser for everything. We used separate programs like FTP to transfer files. News to read Usenet news and discussions, literally newsgroups. Telnet to open remote terminal sessions.</em>

## Web services

APIs, short for Application Programming Interfaces, serve as communication interfaces shaping the protocol between pins and sockets. Their core purpose is to establish seamless communication between two applications. Each API operates in accordance with a specific network protocol, tailored to meet specific needs and objectives.


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

In essence, for seamless web communication, applications must align with a common communication protocol like HTTPS. APIs serve as the defined contract or protocol, shaping the interaction between applications, such as the REST architecture. These architectural models accommodate diverse data formats, such as JSON.

Ultimately, those strings of tech jargon—SOAP, REST, JSON—belong to the same realm. And kudos to your wife for reviewing this article; she now holds a clearer understanding of how web applications converse. Quest accomplished!
