---
id: 7
title: 'Short discussion of frontend tests'
date: '08-06-2022'
excerpt: 'Testing always involves decisions and tradeoffs. Let me show what have been my "philosophy".'
cover: '/images/post7/cover.jpg'
time: '6 min'
category: 'Front end'
link: 'frontend'
language: 'en'

metakeyword: 'front end, web development, tests'
metadescription: 'Testing always involves decisions and tradeoffs. Let me show what have been my "philosophy".'
---

![Short discussion of frontend tests cover -fullwidth](images/post7/cover.jpg)

Testing always involves decisions and tradeoffs. I want to talk about why I make the decisions that I do and what have been my "philosophy" about tests for frontend applications. This will be an introductory theme on this blog. However, let's use some technologies seen previously to make this introduction practical:
- React

- React Testing Library

- Jest

- Cypress

- NextJS

If "tests" is something new to you, let me quickly explain why we should write tests. Well, imagine that you have a large code base and you have many developers. You want to make sure that any new changes introduced to the code base don't create bugs, right? But, as you also imagine, when a code base is distributed among many developers, it's really hard to know sometimes how your changes are going to affect other parts of the code. A comprehensive suite of tests helps you feel confident that your changes will still work harmoniously with the rest of the code base. Simple: If the tests pass, that's a good signal that your changes haven't introduced problems.

And of course, this doesn't just apply to the developer team. Even working alone, you also need to add new features and do a lot of refactors. I mean, the guarantee that new code won't break old code is, again, testing. I hope I've convinced you that writing tests is a good idea.

## Type of tests

### **Unit testing**

The first type of testing is unit testing. Here, we have piece of code, one on top of each other, like a lego. In other words, unit of code might be a function, react component or API route. In this type of testing, we want to test just one piece of code. And often you'll isolate that piece of code by mocking dependencies using just mocks or mock service worker or other ways of mocking dependencies.

![Unit testing example -fullwidth](images/post7/example1.png)

An interesting (and somewhat obvious, I know) thought is: if you're testing a single unit of code and that test fails, you know exactly where to investigate in your implementation. Sounds good, right?

### **Integration testing**

Integration testing is testing that two or more units work in conjunction with each other. For example, with a parent and child react component. Or between database and the API calling the correct commands such that the database updates in the expected way. In this case, we hope to test cause and effect, action and reaction between units.

### **End to end testing**

Finally, we have end to end testing, which is often abbreviated E2E. Here we're testing a user flow from beginning to end. For example, a user logs in purchases a ticket and then looks at their list of purchase tickets and we want to see that! End to end tests often use a browser to interact with the front end and that would be with Cypress or Selenium, or there are other applications that help with that.

![End to end testing example -fullwidth](images/post7/example2.png)

## How decide what to test?

Without a doubt, after learning the basics, this was the question I always asked when I needed to create tests. The answers to this question came after I started thinking: what I want to know about if it test XYZ fails? I mean, what is so important to the spec of the application that you want an alert? Probably the answers will reveal everything that is essential to follow the application!

BUUUUUUT, pay close attention, as important as the previous questions, I'd like to address here is a best practice for testing front end applications: we want to test behavior, not implementation.

Imagine a page that has a language selector. An example of testing implementation for this feature would be to run the “onChange” function for that language dropdown and pass Spanish as the argument and then check that the language state what you're. And the reason that this is not a best practice is because this is not related to the user experience.

Testing behavior, we would render the component (or components that are necessary for this dropdown), locate the language dropdown in the rendered DOM, simulate a user choosing Spanish and finally we would check that the page heading reads “bienvenido”.  Now, we know that if the user interacts with the element on the page, it is going to have the desired effect that the user sees. Testing behavior is much more likely to tell you whether or not your app is working in a way that a user experiences working as opposed to in a way that a developer experiences working.

## Diagnosis vs. Maintenance

Do you remember that we saw at the beginning of this article that in addition to decisions there would be tradeoffs? We have seen that it is possible to test a small speck of code or an entire code. That is, we are talking about the granularity of the tests. For example, if we're testing whether the language switch functionality works, why would we test whether the language dropdown is rendering correctly?

![Diagnosis and Maintenance -fullwidth](images/post7/example2.png)

The more granular tests you have, the less time you spend diagnosing these end to end or less granular tests. The tradeoff is that you are going to spend more time writing and maintaining these more granular tests then you will with the end to end tests. If you have fewer tests, then you are going to by definition, spend less time writing and maintaining the tests. So that's the tradeoff!

## Test suggestions

The testing suggestions below will all be presented in NextJS. To create a NextJS project with all the technologies I mentioned earlier, [click here](https://nextjs.org/docs/testing). Briefly run in terminal:

![Test suggestions example -fullwidth](images/post7/exemplo3.png)

### 1. Testing a Static Page

![Testing a Static Page example -fullwidth](images/post7/exemplo4.png)

### 2. Testing SSG Props

![Testing SSG Props example -fullwidth](images/post7/examplo5.png)

### 3. Testing component with Mock Service Worker

![Testing component with Mock Service Worker example -fullwidth](images/post7/example6.png)

### 4. Static Route (with Cypress)

![Static Route (with Cypress) example -fullwidth](images/post7/example7.png)

### 5. Dynamic Route (with Cypress)

![Dynamic Route (with Cypress) example -fullwidth](images/post7/example8.png)

### 6. Testing a Route with URL Param

![Testing a Route with URL Param example -fullwidth](images/post7/example9.png)

That’s it! This article is a brief overview of the frontend testing world that I've been proving myself over the last few months. To recap, we talked about the importance of tests, the types of tests, the granularities of tests, the difference between testing implementation and testing behavior, and finally, some testing suggestions.

If testing is already part of your routine as a programmer, I hope I have reinforced the theme. And if you're seeing tests for the first time, I hope I've introduced the theme in the best way. In either case, it will be a pleasure to talk more about it.
