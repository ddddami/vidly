# Vidly Application
Vidly is a web application for managing and renting movies. Users can browse a collection of movies, view movie details, and rent their favorite films. This project is based on the "Mastering React" Course by Mosh Hamedani (2018).
 
## What I Learnt in the Course
### React Basics
- Extend knowledge on Javascript (ES6 specifically)
- Understanding the fundamentals of React, including components, props, state, and class components.
- Creating reusable UI components with both functional and class components and composing them to build complex interfaces, lifiting state up.

### Forms and Validation (using Joi)
- Building interactive forms for user input using controlled components.
- Validating form data (ontype and onsubmit) and providing feedback to users.

### Class-Based Components
- Understanding component lifecycle methods and their use cases.
- Managing component updates, mounting, and unmounting.
- Share functionality by inheriting from genreic components e.g LoginForm ... Form

### Pagination, Filtering, and Sorting
- Implementing pagination to manage large data sets effectively.
- Adding filtering functionality and search to display specified data.
- organize data in ascending or descending order.

### React Router
- Implementing client-side routing with React Router (v6).
- Creating routes, nested routes, private routes and handling route parameters.

### State Management
- Managing state more efficiently using React's Context API.
- Centralizing and sharing state across components.

### HTTP Services
- Logging erros with Sentry
- Connecting the React app to a server using Axios for HTTP requests.
- Handling API calls, data retrieval, and asynchronous operations.

### CRUD Operations
- Implementing Create, Read, Update, and Delete operations in the application.
- Connecting frontend actions to backend API endpoints.
  
### Authentication and Authorization
- Implementing user authentication with JWT (JSON Web Tokens).
- Handling user sessions, registration, and protected routes.
- Handling permissions (showing elements based on user's roles)

### Project Structure and Best Practices
- Organizing the project structure for better code maintainability.
- Applying coding best practices, naming conventions, and file organization.
- Creating clean interfaces for consumers (components) to consume, abstracting the complex logic under the hood. Just like a remote control. We only press a button to power on, we do not care about the internal components of the remote talking to each other, we only press a button and the tv is turned on magically. E.g a movieService proving a function getMovies. Here, our consumer doesn't care how movie is gotten (network request, file stream), it only calls a function and get the list of movies.

## Why the Course? + Challenges I faced.
So, why did I decide to try a very outdated course? Firstly, I think Mosh (author) is an awesome tutor, I knew there was a lot I could learn from the course evn though it's outdated. I was probably in JSS1 when the course was written. Also, I'm passionate about web development and coding in general and the course, being old gave me opportunity to challenge my problem-solving skills because a lot of stuffs did break, some didn't work anymore I had to figure out things sometimes I got frustrated too why am I stressing myself over this outdated stuff where 90% of the libraries work totally differently. But I think I really do admire the fact that i was able to complete the course, despite the age, ship in new things, and really excited about the opportunites the project threw at me to solve real world problems cuz a lot of things broke. I also used to have this little imagination a company with a really old codebase would employ me and i will rewrite the whole stuff for them using latest technologies.. Since the course heavily used class components, this was a bonus. And my imagination? LOL!

### Challenges I faced
- The backend the app(client) consumed was built using node which is as old as this one. I tried running this backend on my machine, installed mongodb, everything but no, what a stupid idea. The terminal was a pool of red blood (not blue). Since I didn't have any experience with node(express) I built the backend myself using my old natvive language python(django). Thought I could knock it out in like two days, but no. I was a bit rusty at coding school did me well lol and had issues with deployment.

- **One other big issue** I faced was with react router. I used v6 which was a bad idea, cux that version doesn't really support class components and I couldn't convert them to functional component because of they were benefits of using class components and it made sense (at least at the time the course was produced. but now, there's react-query and stuffs). So essentially, I had to use hacky solutions with rrd6, hocs, stackoverflow stuffs and stuffs.

- There were issues with a whole lot of other libraries too, alot. Like Joi, the way to define schemas is different and this makes sense evolution or what do I call it. Sentry too gave me issues. But one library that didn't change is axios although, there are new features, but they were no breaking changes, nice 

If you've read to this point, wow
Tech stack: Javascript (react), Python (Django), Postgresql
## The Project
You can play around with here -> [vidly](http://vidly-theta.vercel.app)
### Test Users for the App

| Type          | username      | password         |
| ------------- | ------------- | ---------        |
| admin         | realdami      | realpassword     |
| user          | fakedami      | fakepassword     |
### Features
- **Sign up** - You can signup in this app by navigating to the register page (in the navbar)
- **Login** - You can login navigating to the login page (in the navbar)
- **NOTE:** you don't have to signup to use the app, you  can use the users in the table above
- **Filter, Sort, Search, Paginate** You can search in the search bar, click on the caret on the tableheaders to sort, you can filter movies by their genres and paginate
- **Edit or Submit a new movie** Just note that to do those, you have to login as the admin user in the table.. then you can edit a movie, delete and create one.

## Screenshots
### Homepage
![Screenshot (78)](https://github.com/ddddami/vidly/assets/82976159/132cd5bb-70a1-46d0-af98-6c41775e6145)
---
### Login Page (with field validation)
![Screenshot (79)](https://github.com/ddddami/vidly/assets/82976159/c65c577b-f85a-42a3-ad09-d3382bc046de)
---
### MovieForm Page
![Screenshot (77)](https://github.com/ddddami/vidly/assets/82976159/21023509-5a09-4de4-a524-8dd3552df123)
---
### Filtering TIn Action
![Screenshot (75)](https://github.com/ddddami/vidly/assets/82976159/94b28cab-e51b-4bec-9e9c-5901619335d5)

## Setting up this projects
For some weird reasons, you might see this project and want to clone it. Simple!
```
git clone https://github.com/ddddami/vidly
cd vidly
npm i
npm start
```

## Contact
For some weird reasons again, you might want to contact me, lol😂.. Twitter should do [twitter](https://www.twitter.com/_ddddami)
---
If you read to this point, wow I'm happy or I'll be happy I don't even know what to say. What to know what I'll be doing? will be taking another react course (react + typescript) this would give me an opportunity to learn typescript. I want to learn typescript in detail too. Then I'll learn about next.js just found about why it was necessary today from a book. i always taught next.js was a stupid idea, what's the whole point of static side generation or server side rendering. And don't worry, I've been coding for a while now, so I know i won't learn anything by learning everything at once.. nahh. Made mistakes like this when I started out coding.. Tainkyu for reading😉
