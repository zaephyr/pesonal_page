---
title: Mockup Blog
description: Frontend blog page made with Nuxt.js that connects to blog-api made with Node.js/Express.js
live: http://wooden-self.surge.sh/
github: https://github.com/zaephyr/blog-nuxt
color: green
---

<div class="tldr">

#### _tl:dr_
 _I have made a test account with admin privilages for  quick lookup of an app._
 
 **username:** _asdafa_       
 **password:** _asdfasdf_

</div>

## Introduction
This is fullstack mockup blog with decoupled frontend made with `Nuxt.js` and blog-api made with `Node.js/Express.js`

## Backend

As already stated backend was build with `Express.js` framework and `MongoDB` database, using `JWT` for authorization and persistence.

Links to blog-api:
> live api: https://pacific-fjord-55363.herokuapp.com/api/v1/blogs
> 
> github repo:  https://github.com/zaephyr/blog-api

You can call the API this way - `https://pacific-fjord-55363.herokuapp.com/api/v1/ROUTE/ENDPOINT`

Logging in before calling other routes than `blogs` is **necessary**. Calling `auth/login` with `username and password` will authenticate the user, create a session and generate a _JsonWebToken_ for the API to verify on each call.



### Endpoints

|     ROUTE     |   METHOD   |     ENDPOINT      |         PURPOSE          |
| :-----------: | :--------: | :---------------: | :----------------------: |
|   _`/auth`_   |  **POST**  |    _`/login`_     |        User Login        |
|   _`/auth`_   |  **POST**  |    _`/logout`_    |       User Logout        |
|   _`/auth`_   |  **POST**  |    _`/signup`_    |       User Signup        |
|   _`/user`_   |  **GET**   |      _`/me`_      |    View Your Profile     |
|   _`/user`_   |  **GET**   |   _`/me/blogs`_   |     View Your Drafts     |
|   _`/user`_   | **PATCH**  |   _`/updateMe`_   |     Update Your Info     |
|   _`/user`_   | **DELETE** |   _`/deleteMe`_   |   Delete Your Account    |
|   _`/blogs`_   |  **GET**   |                   |    Get All Blog Posts    |
|   _`/blogs`_   |  **POST**  |                   |    Create a New Post     |
|   _`/blogs`_   |  **GET**   |     _`/:id`_      |     View a Blog Post     |
|   _`/blogs`_   | **PATCH**  |     _`/:id`_      |    Update a Blog Post    |
|   _`/blogs`_   | **DELETE** |     _`/:id`_      |    Delete a Blog Post    |
| _`/blogs/:id`_ |  **GET**   |  _`/messages/`_   | Get All comments on Post |
| _`/blogs/:id`_ |  **POST**  |  _`/messages/`_   |  New Comment on a Post   |
| _`/blogs/:id`_ |  **GET**   | _`/messages/:id`_ |      View a Comment      |
| _`/blogs/:id`_ |  **PUT**   | _`/messages/:id`_ |      Edit a Comment      |
| _`/blogs/:id`_ | **DELETE** | _`/messages/:id`_ |     Delete a Comment     |

### Built with 
#### Backend 
-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [MongoDB](https://www.mongodb.com/)

#### Frontend
-   [Vue.js](https://vue.js.org/)
-   [Nuxt.js](https://nuxtjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)