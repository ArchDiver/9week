#Patient API Documentation


### Day1 - TODOs 
-Create ROutes for API
-Install Middleware for Express
-Install Database ORM Package (Knex)

# Get started here:
- clone the repo
- Once download is finished - cd into the patient-api dir
-Then run `npm install` to install dependencies
- To RUN: `npm run start` 

# API Routes
##### Patient API ENDPOINTS:
- /patients => GET request -- Show All patients
-/patients/:id => GET request -- SHow 1 patient based on ID
-/patients/update/:ID => POST request a patient basde on ID
-/patients/create/ => POST request -- create a new patient
-/patients/delete/:ID - Delete based on ID

#### USER Auth Endpoints:
- /api/user/register => POST request -- Create a new user
- /api/user/login => POST request -- Login user with creds and produce a signed API key

#### Project Dependencies
-bcryptjs
-body-parser
-cors
-dotenv
-express
-jsonwebtoken (node version)
- knex (ORM)
- nodemon (hot-reload server on saves)
- pg (POSTGRES)