---
id: 4
title: 'SSG, SPA and SSR. Pick one!'
date: '02-11-2021'
excerpt: 'In the last decade, front end development went through multiple paradigm changes that make it hard to follow.'
cover: '/images/post4/structure.jpg'
time: '5 min'
category: 'Front end'
link: 'frontend'
language: 'en'

metakeyword: 'front end, web development, patterns'
metadescription: 'In the last decade, front end development went through multiple paradigm changes that make it hard to follow.'
---

In the last decade, front end development went through multiple paradigm changes that make it hard to follow. SSG? SPA? SSR? Which one?

I thought that could be important to talk about the main structures of a front end website. Above all, to explain the main consequences each interface imposes and that some people just catch at the end of the project.

So, let's see the differences and when to use!

## Application types

Even if you've never developed for front end before, you've probably heard of React JS, Vue JS, Angular, etc. These are some examples of frameworks and libraries that have grown a lot in the last 5 years and the reason is simple: they all improved the web development experience and delivered ready-made packaged "solutions". In addition making building web applications "easier", it also ensures more security, performance and scalability.

However, each of these libraries and frameworks suggest a front end architectural pattern. In this article, we are going to talk about Static Site Generation, Single Page Application and Server Side Rendering.

## Static Site Generation (SSG)

We all know that we can create pure static HTML, CSS and Javascript files and serve them through a server, right? I mean, you write yourself file by file defining the entire structure of your project. Besides this way, it is also possible to generate these same files from other tools without having to write all files as before.

There are a lot of famous static generators like Gatsby, Hexo, Next and so on. In this case, the generators basically get the data through an API or markdown file, for example, do some processes and in the end generate the same HTML, CSS and JS files.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/1zhT23VDVDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Pros**

- Low server usage. If everything is rendered before (HTML, CSS and JS), that is, the server only has the role of serving the files already built;

- Can be served through a CDN (best cache);

- Best performance among all others;

- Flexibility to use any server, no matter the server language, everything is static.

**Cons**

- High build time. If there are many pages in your project, the build time will be longer;

- Difficulty scaling large applications;

- Difficulty to perform constant updates.

**When to use?**

- Simple website with little user interaction;

- The site has a single author;

- The site's content changes very rarely;

- When performance is extremely important.

_**3 Exemples: Landing pages, Blogs and Portfolios.**_

## Clint Side Rendering (CSR) or Single Page Application (SPA)

In this context, the static files are not ready. Yes, there are still HTML, CSS and JS files in the project, but a special JS file will download all data and insert it into other files after the user accesses the main page. **Everything happens at runtime on the client side!**

Because of that, normally in SPA applications it is possible to see a "loading" animation, precisely because it is looking in the API for all the data that will be rendered and presented.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/4-Lel1oaV7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Pros**

- Allows pages with lots of interactions without needing to reload. A single initial load and every application is ready to receive the requested data at runtime;
- Fastest site after initial load;

- Great for web applications;

- It has several libraries.

**Cons**

- Sometimes the initial load can be too big;

- Performance can be unpredictable. It can happen that pages have different file sizes and data, making it difficult to predict performance in general;

- Difficulties with SEO. Every site is crawled by search engines and needs to be read to index later. If it is necessary to request the contents to view, it can be difficult to understand these bots. Most of the content available is not yet indexed, mainly for data requested by APIs. [Read more about SEO](https://cassiorsfreitas.com/seo-peca-chave-para-o-seu-negocio).

**When to use?**

- Indexing information on Google (search engines) is not important;

- There is a lot of user interaction and a lot of route usage;

- Private routes with different information for each user.

_**3 Examples: Twitter Web, Facebook Web, Spotify Web;**_

## Server-side Rendering (SSR)

SSR is the exact opposite of CSR/SPA. Is the ability of an application to contribute by displaying the web-page on the server instead of rendering it in the browser. In other words, the process of fetch data happens in server side even before files are sent to the browser to display to the user.

All the "hard work" is done on the server side, from requests for external APIs to communicating with databases. After that, static files will be forwarded to the server and presented normally.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/0bvo6UKkNDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Pros**

- Great at SEO - Why? Because everything is rendered server-side beforehand;

- Meta tags with more suitable previews;

- Better performance for the user. Content can be viewed in full faster;

- Code shared with backend in Node;

- Less client-side processing.

**Cons**

- TTFB (Time to first byte) higher, the server will prepare all content to deliver;

- Larger HTML, all ready, assembled and ready to be displayed (it can be considered an advantage as it is faster and readable than a JS);

- Full reload on route changes.

**When to use?**

- When there is a need for a SPA, but with faster loading;

- Content changes frequently;

- Large number of pages or lots of content;

- Need for good Google indexing.

_**3 Examples: E-commerce, News Sites and Wikis.**_

## Pick a render

So far, we realize that there are a lot of types of web applications and different tools to think about, right? Furthermore, this types will be responsible for all the advantages and disadvantages mentioned above.

I know, there are a lot of considerations to make like load time, level of interaction, update frequency, etc., and to make this process a little "easier", I created a simple project with **common questions** that will eventually suggest an architecture.

![Piack a Render preview cover -fullwidth](images/post4/pickarenderpreview.png)

[Pick A Render](https://pickarender.vercel.app/) is available through this link and also in my [GitHub](https://github.com/cassiorsfreitas/pickarender) repository. The goal is to present these architectures and behavior in a simple way. I hope this will help with your decision on your next project!
