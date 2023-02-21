---
id: 11
title: 'What is tRPC?'
date: '20-02-2023'
excerpt: 'Wait, so are we going back to use mono repository which contain the whole application? Like Java + Tomcat + Thymeleaf???'
cover: '/images/post11/cover.jpeg'
time: '8 min'
category: 'Front end'
link: 'frontend'
language: 'en'

metakeyword: 'front end, web development, trpc'
metadescription: 'TypeScript Remote Procedure Call is the most simple and lightweight library for remotely calling backend functions on the client side'
---

![What is tRPC? -fullwidth](images/post11/cover.jpeg)

First of all, I need to assume that you know what an API is or at least read the Wikipedia definition and then this article doesn't need to be long. Just for our context, Application Programming Interface is a bunch of rules that allow the client sends and receives messages from the server through the internet. If curiosity pushes you to learn about communication over the web, [check this article later](https://cassiorsfreitas.com/communication-over-the-web).

In chronological order, the first communications were through Web Sockets, where only one function was provided to send and receive bits and everything else was up to you. And you can imagine the amount of problems caused by managing bits over the web, right? Because of that, many people worked to create lighter weight solutions and then RPC was born.

## What is RPC?

A Remote Procedure Call (RPC) is a network programming model (or interprocess communication technique) that is used for point-to-point communications between softwares. Client and server applications communicate during this process. The idea behind RPC is that a computer program can call and execute a subroutine on a remote system just like it would call a local subroutine, **but the network communication details are hidden from the user**.

For that, it's necessary to create an agnostic communication bridge between client and server capable of "translating" these calls in both directions. That's when IDL (Interface Definition Language) comes into play!

![End to end testing example -fullwidth](images/post11/idl.png)

Then you can use the IDL compiler tool to generate the code stub to take care of the serialisation and deserialisation of the message for both the client and server sides. It's the same case for GraphQL nowadays: **code generation from the schema file**.

This solution was questioned a lot because it generates some negative effects such as the high coupling between the systems and a difficulty in debugging the calls. At the same time, regarding internal APIs (gRPC) it is still a good solution to consider. But that's all for now.


## What is tRPC?

TypeScript Remote Procedure Call is the most simple and lightweight library for remotely calling backend functions on the client side. I mean, there are no bodies, verbs, headers, resolvers... there is literally a call to a function in another environment. Although the suffix is called RPC, it only inherits the concept to call the remote function locally but in a more simplistic minimal way that doesn’t have the IDL file and the code generation process.

![tRPC example -fullwidth](images/post11/trpc.gif)

> TypeScript’s great inference to infer your API router’s type definitions and lets you call your API procedures from your frontend with full typesafety and autocompletion. When using tRPC, your front- and backend feel closer together than ever before, allowing for an outstanding developer experience.

If on the one hand we have more type safety and less code to worry about, on the other hand this approach encourages the use of mono repos and requires knowing TypeScript (which should be mandatory for any web developer 🤡).

## Building blocks to create modern web applications
In the context of web applications and edge functions, many technologies have emerged with purpose of generating code packages/bundles that run on the client side and others on the server side. For example, if we need to validate the session of a user who has just logged in, we can run function that checks in the backend side whether there is a valid session created. Otherwise, the protected page will not even be sent to the frontend. Cool!

```tsx
// page/index.tsx

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: session,
  }
};
```

From the frontend perspective, tRPC provides a factory that consumes the single type from the backend and creates **React Query** hooks for mutations and queries. Actually, this combo is really fantastic!

![Back To The Future Fantastic Reaction -fullwidth](images/post11/fantastic.gif)


## For frontend developers

If you know NextJs and have already worked with Prisma ORM once in your life, I huge propose starting a project using the [T3 Stack](https://create.t3.gg/) to see in code how tRPC works and see as well the great advantage that this layer of abstraction can offer to your experience as a frontend developer.

### Few clicks and you will have a great full stack project without boilerplate and scaffolding:

- [NextJS](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tRPC](https://trpc.io/)
- [Zod](https://zod.dev/)
