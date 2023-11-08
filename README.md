# MVST Challenge

## Feedback

---

### Backend:

It intends to follow NestJS best practices: modules bundling related logic, services managing business operations, and controllers handling HTTP requests.
Configuration with the database using TypeORM and data-source file, chosen for its integration with NestJS and its active community.

Setup:
-Create a `.env` file in the backend root folder:

```
cd backend
touch .env
```

-Then add the following variables:

```
PORT=5000

# Development:

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=1234
DATABASE_NAME=mvst-coffee-challenge-db
NODE_ENV=development
```

I noticed a `yarn.lock` in both directories, so I used `yarn` instead of `npm`.
To install yarn, if you don't have it: `brew install yarn`

Then:

```
yarn install
```

```
yarn setup
```

This command, for simplicity, wraps the 'yarn start:dev' and 'yarn seed' commands using `concurrently`. It allows you to populate/seed the database after a 5-second startup delay.

If you don't want to populate the database on startup, just run `yarn start:dev` and you can seed the database(6 coffees) later with the command `yarn seed`.

If you run the Postgres database in a Docker container and get the error: "role 'postgres' does not exist," and if you're using a Mac, you could run `$ lsof -i :5432` to check which processes are running on that same port. Then, turn off AirPlay or any other Postgres processes. That has worked for me :)

Since it's in development mode, synchronization is set to `true`. If changed to production mode, to modify the schema and then migrate, the commands are set up in `package.json`. The path to save the migrations needs to be introduced after the commands, example:

```
yarn migration:create -- src/database/migrations/[name]
```

### Frontend:

Built with Vite and React, uses a Service/Provider logic that interacts with Context to serve the state over the components(for small apps Redux could be overkill) and smooth interactions with the backend.

```
yarn install
yarn dev
```

---

### What would you improve if given more time?

Improve responsiveness for mobile phone display.
Add more functionalities, like delete, search, put...
Add unit testing and e2e with Cypress.
Deploy app, database on AWS RDS, frontend on netlify and backend on fly .io or AWS Elastic Beanstalk.
(During this week I could do it)

### How was your experience doing this challenge?

Great, involved myself in new technologies, appreciated the nestjs documentation, learned new ways to set up ORM and overall contented with it.

---
