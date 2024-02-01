# Challenge

This repo is my delivery of a code challenge.

Make a full-stack app within a week following the requirements. 

Required stack: 
- **Backend**: NestJS
- **Database**: PostgreSQL
- **ORM**: Up to you (I chose TypeORM)
- **Frontend**: React (or Vite React)
- **Styling**: pure CSS or Tailwind (libraries not allowed, to showcase CSS skills.)

### **Instructions:**
- UX/UI: You must follow the Figma prototype. (Unfortunately, I can’t provide a link to the Figma file since I don't own it, but the deployed live version is a faithful representation of it.)
- Following the design, create a new page and place a form to add a new coffee.
- You should be able to add a new coffee using the same structure/type (id, name, description, type, price and image url).
- Don't worry about uploading the image, get a URL from Google, an image repository, or serve it as a static asset. You can prefill the image url input and set it to readonly if you like. However, the field needs to be submitted to the backend.
- Before adding a new Coffee, you should validate if an existing record with the same `name` already exists.
- The data MUST be persisted in a database.
- Provide a seeding mechanism to populate your DB.
- Your code will be checked for the following: readability, organization, robustness, layering, reusability, and extensibility. Application of best practices and design patterns. The outcome in comparison with the design.

**Extra points:**
- Testing. Your choice of what to test and how.
- Add some CSS animations or use Framer Motion
- If you haven't already, make the frontend SEO friendly
- Deploy your application

### Deployment

View my deployment at: <s>https://roasted-coffee.netlify.app/</s> // <b style="color: #ff3e00;">Due to AWS Free Tier exhaustion, the live demo doesn't have database and server hosted anymore.</b>


Deployed using the following services:

- **Database**: AWS RDS.
- **Backend**: CI/CD with AWS CodePipeline, which includes the following phases:
    - ***Source***: GitHub Version 2, pointing to this current repo main branch. IT uses tag triggers and Semantic Versioning for CI/CD.
    - ***Build***: AWS CodeBuild compiles the TypeScript code and outputs it. The buildspec.yml file provides instructions, and a optional Procfile is used (to avoid altering the package.json start script) within backend folder.
    - ***Deploy***: AWS Elastic Beanstalk receives the entire backend folder, including node_modules. Because I used yarn instead of npm and Elastic Beanstalk defaults to doing npm install, produccing some errors/conflicts with dependencies. If Elastic Beanstalk detects a node_modules already exists, it doesn't install dependencies. It uses the command in Procfile to start the app. Environmental variables are introduced using AWS console.
- **Frontend**: Netlify.

Tag trigger: (git log ; git tag v[0.0.0] [commit hash]; git push origin v[0.0.0])

### Backend:

It intends to follow NestJS best practices: modules bundling related logic, services managing business operations, and controllers handling HTTP requests.
Configuration with the database using TypeORM and data-source file, chosen for its integration with NestJS and its active community.

**Setup**:
- Create a `.env` file in the backend root folder:

```
cd backend
touch .env
```

- Then add the following variables:

```
PORT=5000

# Development:

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=1234
DATABASE_NAME=coffee-challenge-db
NODE_ENV=development

# Production:

# DATABASE_HOST=[your AWS RDS url]
# DATABASE_PORT=5432
# DATABASE_USERNAME=postgres
# DATABASE_PASSWORD=[your password]
# DATABASE_NAME=postgres
# NODE_ENV=production
```

I noticed a `yarn.lock` in both directories, so I used `yarn` instead of `npm`.
To install yarn, if you don't have it: `brew install yarn`

- Then:

```
yarn install
```

- To start the dockerized Postgres database(you should have Docker installed):

```
yarn start:dev:db
```



- The following command "`yarn setup`", for simplicity, wraps the 'yarn start:dev' and 'yarn seed' commands using `concurrently`. It allows you to populate/seed the database after a 5-second startup delay.
```
yarn setup
```

If you don't want to populate the database on startup, just run `yarn start:dev` and you can seed the database(6 coffees) later with the command `yarn seed`.

If you run the Postgres database in a Docker container and get the error: "role 'postgres' does not exist," and if you're using a Mac, you could run `$ lsof -i :5432` to check which processes are running on that same port. Then, turn off AirPlay or any other Postgres processes. That has worked for me :)

Since it's in development mode, synchronization is set to `true`. If changed to production mode, to modify the schema and then migrate, the commands are set up in `package.json`. The path to save the migrations needs to be introduced after the commands, example:

```
yarn migration:create -- src/database/migrations/[name]
```
```
yarn migration:generate -- src/database/migrations/[name]
```

### Frontend:

Built with Vite and React, uses a Service/Provider logic that interacts with Context to serve the state over the components(for small apps Redux could be overkill) and smooth interactions with the backend.

```
cd frontend
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

Great, involved myself in new technologies, appreciated the NestJS documentation, learned new ways to set up ORM and overall happy with it.

---

Improvements made after the deadline:

### Testing

Jest for unit testing NestJS components:
```
cd backend
yarn test
```
