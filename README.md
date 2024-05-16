# PZ Cheeseria
<b>Project File Hierarchy</b>

`app` : 
* `home` : folder contains the files for displaying the home page
* `datacontroller` : provides interaction with the back-end, contains unit tests for front-end api interaction
* `images` : contains image of each cheese
* `back-end` : folder contains Node.js with express for routing and API access
  * `server.js` : contains code that runs server
  * `database` : contains cheese data in a json
  * `routes` : folder contains routes files
      * `api` : contains CRUD interaction with database
      * `web` : routes server backend to frontend

* `Dockerfile` : run to build docker container for code execution

<b>Multi-Stage Docker Build</b>
A build pipeline for the structure of a multi-stage Docker build would utilise multiple images to compile the container using multiple `FROM` calls. In the context of this project the front end and the back-end would each have an image of them generated as they are independant of one another. These images would then be called in the Dockerfile when building the final container.

<b>Features to add</b>

> Implementation of code for optional calculator function as specified by programming challenge

> Proper implementation of `OpenAPI`/`Swagger` automatic API documentation

> Load back-end database and store it in local memory to prevent unnecessary calls to back-end

> Code in all of the API functions for full `CRUD` compatibility.

> Use `MongoDB` + `Mongoose` for database handling

> Dynamically generate pages for each cheese that is present in the database that would provide more information about a specific cheese, similar to provided website https://cheese.com/

> Proper `Unit Tests`

> Utilise `CSS`

<b>Learning points</b>

> Learnt about modern tech stacks and their interaction with one another. No university course covered this during my education

> Automating documentation with third party software simplifies project documentation (`Swagger` for API in this example). 

> First time using `Docker`. Utilising `Docker` simplifies code environment setup and the isolation from other environments

> Refamiliarisation with `NodeJS` and `Angular`, as well as front-end and back-end development methodologies, I have much more learning and growth to do

<b>Issues Encountered</b>

> `Docker`: Building of image for program challenge failed to correctly use `NodeJS`, believe it is a `package.json` issue but deletion and reinitialisation of `node_modules` and `package-lock.json`. Testing with a simple applications proved to be no issue

> `Swagger`: Implementation failed as I couldn't run it in Docker after many attempts, decided to move forward and work on other tasks

> `front-end`: Dynamically generating page content through the use of `document.createElement()` and `document.appendChild()` in home. This generated content fails to propagate to the html page, even with a test database