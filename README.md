# Shopping Cart Assignment with React

This is the base folder for the shopping cart exercise made with React and canned servers.

## Getting Started

Clone this repo and run following command for starting the mock server:

```
git clone git@github.com:shubham43MP/ps-shop-assigmnet-react
cd ps-shop-assigmnet-react
```

### Installing Server Dependencies

```
yarn or npm install
```

### Starting the server:

```
yarn start or npm start
```

The JSON server will get started at `localhost:3001` by default

### Installing dependencies for client 
Open another terminal and hit following commands:

```
yarn run install:client or npm install:client
```

### Adding env variables for the client
 Make a .env file at path `sc-client/.env`. There is also an `.env.example` file at `sc-client/.env.example` for the reference environment file.
 Since this project uses firebase, you should get the firebase credentials from the repository owner or make your own from [here](https://console.firebase.google.com/)

 If the backend server is started at `localhost:3001`, the env file would look like:
 ```
 REACT_APP_SERVER_BASE_URL=http://localhost:3001

# FIREBASE RELATED

REACT_APP_FIREBASE_API_KEY=<YOUR FIREBASE CRED>
REACT_APP_FIREBASE_AUTH_DOMAIN=<YOUR FIREBASE CRED>
REACT_APP_FIREBASE_PROJECT_ID=<YOUR FIREBASE CRED>
REACT_APP_FIREBASE_STORAGE_BUCKET=<YOUR FIREBASE CRED>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<YOUR FIREBASE CRED>
REACT_APP_FIREBASE_APP_ID=<YOUR FIREBASE CRED>
REACT_APP_FIREBASE_MEASUREMENT_ID=<YOUR FIREBASE CRED>
 ```
### Starting the client
 After you have followed the above steps successfully, Run the following command at your root project:

```
yarn run start:client && npm run start:client
```

The client will get started at `localhost:3000` and you can now explore the Sabka Bazaar Shopping Solution

### Developement System Configurations:
OS - MacOS
NODEJS - v14.17.6
NPM - v6.14.15
YARN - v1.22.17