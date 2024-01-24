# Addis-School Project

This repository contains the codebase for the Addis-School project.

## Important Note

Please notice that the project does not include a mongoDB connection setup. The connection setup procedure varies from environment to environment:

- **Local Development**: You are required to create a `config.js` file within the config directory, which should export your `db.uri` connection. An example of this setup is provided in `config/config.example.js`. This file will be ignored by git, ensuring the safety of your database credentials upon deployment.
- **Production**: As the config file does not get pushed during deployment, you need to specify your database URI in Heroku. Follow the instructions in this [tutorial](https://devcenter.heroku.com/articles/config-vars) to set the URI in Heroku. Make sure to name the environment variable "DB_URI".

## Getting Started

This repository demonstrates the application of MERN stack technology and includes a descriptive file structure as a base. The project is aimed at clear readability and the application of good coding practices.

The project contains both the client and server applications; therefore, there will be Node modules in two separate places. The locations are as follows:

- addis-school
  - school-api/package.json
  - school-dashboard/package.json

A script embedded in the `package.json` makes this application ready to be deployed to Heroku. This script automatically handles the build and deployment of the app. For more information about Heroku deployments, refer to the resources provided at the end of this file.

## File Structure

- ### `school-dashboard` - Contains the client application
  - `public` - Holds all static files
  - `src`
    - `assets` - Holds assets such as images, docs, and fonts
    - `components` - Includes all the different components that constitute our views
    - `views` - Correspond to a unique page on the website i.e. Home or About
    - `App.js` - Renders all our browser routes and different views
    - `index.js` - Renders the react app by rendering `App.js`.
  - `package.json` - Defines npm behaviors and packages for the client
- ### `school-api` - Contains the server application
  - `config`  - Holds configuration files, like mongoDB URI
  - `controllers` - Holds all callback functions that each route will call
  - `models` - Contains data models
  - `routes` - Contains HTTP to URL path associations for each unique URL
  - `tests` - Contains all server tests
  - `server.js` - Defines npm behaviors and packages for the client
- ### `package.json` - Defines npm behaviors and scripts
- ### `.gitignore` - Denotes which files git should ignore
- ### `README` - This document!

## Available Scripts

Within the project directory, the provided scripts aid in running the project during different stages of development:

- ### `npm run-script dev` - Runs both the client and server applications in development mode. Access the client application [here](http://localhost:3000).

- ### `npm run-script client` - Runs only the client application in development mode. Access the client application [here](http://localhost:3000).

- ### `npm run-script server` - Runs only the server in development mode.

- ### `npm run build` - Bundle React in production mode and optimizes the build for the best performance. This does not need to be run if deploying to Heroku, as it is handled by the `heroku-postbuild` script. Refer to the [deployment](https://facebook.github.io/create-react-app/docs/deployment) section for more information.

To get additional information, check the following resources:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/)
- [Guide to deploy a full-stack web app to Heroku](https://daveceddia.com/deploy-react-express-app-heroku/)
- [React documentation](https://reactjs.org/)

## Troubleshooting

If `npm run build` fails to minify, move to this [link](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).
