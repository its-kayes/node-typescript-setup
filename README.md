# Node Typescript Project Setup

This repository contains the setup for a TypeScript Node.js project named "node-typescript-setup".
The project aims to provide hassle free project setup for node typescript project using various libraries and tools such as eslint, prettier, express, mongoose, zod, etc. Also here implement `Global Error Handler` to handle and catch various kinds errors. 
 The project aims to provide a secure end-to-end solution using various libraries and tools. Below is a detailed guide on setting up, running, and maintaining the project.

## Prerequisites

Before setting up the project, ensure that you have the following installed on your system:

1. Node.js: Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

2. Yarn (optional): Although not mandatory, using Yarn can speed up the installation process. You can download it from [here](https://yarnpkg.com/getting-started/install).

## Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/its-kayes/node-typescript-setup.git
# or, if you prefer using SSH
git clone git@github.com:its-kayes/node-typescript-setup.git 

cd node-typescript-setup
```

2. Install the dependencies:

```bash
npm install
# or, if you prefer using Yarn
yarn install
```

3. Run the project:

```bash
npm run dev
# or, if you are using Yarn
yarn dev
```

## Project Structure
The project structure is organized as follows:

```
set-up/
├── dist/
├── node_modules/
├── src/
│   ├── server.ts
│   └── ... (other TypeScript files)
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package.json
└── tsconfig.json
```



* dist/: This folder contains the compiled TypeScript code generated after running the build script.

* src/: This folder contains the TypeScript source code for your project. The entry point of the application is server.ts.

* .eslintignore: This file lists the files and directories that should be ignored by ESLint during linting.

* .eslintrc.js: This file contains the ESLint configuration for the project.

* .gitignore: This file specifies the files and directories that should be ignored by Git.

* .prettierignore: This file lists the files and directories that should be ignored by Prettier during code formatting.

* .prettierrc: This file contains the Prettier configuration for the project.

* package.json: This file contains the project's metadata, scripts, and dependencies.

* tsconfig.json: This file contains TypeScript compiler options and settings.


## Scripts

The project comes with several predefined scripts to make development and testing easier. You can run these scripts using `npm run <script>` or `yarn <script>`.

* `start`: Starts the application by running the compiled JavaScript code in the dist/ directory.

* `dev`: Starts the development server using ts-node-dev, which automatically restarts the server on file changes.

* `lint:check`: Checks the project's TypeScript and JavaScript files for linting errors using ESLint.

* `lint:fix`: Fixes linting errors in the project's TypeScript and JavaScript files using ESLint.

* `prettier:check`: Checks the project's files for formatting issues using Prettier.

* `prettier:fix`: Fixes formatting issues in the project's files using Prettier.

* `lint-prettier`: Runs lint:check and prettier:check sequentially to check for both linting and formatting issues.

* `test`: Placeholder script for running tests. You can modify this script to add tests for your project.

* `build`: Compiles the TypeScript code into JavaScript and stores it in the dist/ directory.


## Dependencies
The project utilizes several external libraries to achieve its goals. The main dependencies are listed below:

* `bcryptjs`: For hashing passwords securely.

* `cookie-parser`: For parsing HTTP request cookies.

* `cors`: Middleware to enable Cross-Origin Resource Sharing (CORS) support.

* `dotenv`: To load environment variables from a .env file.

* `express`: Web framework for Node.js.

* `helmet`: For setting HTTP headers to improve security.

* `http-status`: Provides a collection of HTTP status codes.

* `jsonwebtoken`: For generating and verifying JSON Web Tokens (JWT).

* `mongodb`: Official MongoDB driver for Node.js.

* `mongoose`: ODM (Object Data Modeling) library for MongoDB.

* `morgan`: HTTP request logger middleware.

* `multer`: Middleware for handling multipart/form-data (file uploads).

* `path`: Utility module for working with file and directory paths.

* `sharp`: For image processing.

* `typescript`: TypeScript language and compiler.

* `zod`: TypeScript-first schema validation library.

## About Global Error Handler

The `globalErrorHandler` is an error handling middleware function used in an Express.js application to handle and format errors that occur during the request-response cycle. It takes four parameters: `error`, `req`, `res`, and `next`. This middleware function is typically added to the application's middleware stack to catch and process any unhandled errors that may occur in the routes or other middleware.

Description of the `globalErrorHandler` function:

1. Function Signature:
    ```bash
    const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
    // ...error handling logic...
    };
    ```
2. Parameters:
    * `error`: The error object that was thrown.
    * `req`: The Express.js request object.
    * `res`: The Express.js response object.
    * `next`: The next middleware function in the stack.

3. Error Handling Logic:
* The function starts by initializing some default values for the statusCode, message, and `errorMessages`.

* It then checks the type of error received using conditional statements to identify the specific error type.

* For each type of error, the function applies specific error-handling logic to extract relevant information such as status code, error message, and error details.

* The following types of errors are handled:
    * `ValidationError`: Errors related to validation (e.g., when using Zod schemas for validation).
    * `ZodError`: Errors specific to Zod schema validation.
    * `CastError`: Errors that occur when casting data types (e.g., when dealing with MongoDB ObjectIDs).
    * `AppError`: Custom application-specific errors (e.g., user-defined errors).
    * Generic `Error`: Any other errors that are instances of the standard JavaScript Error class.
* The function then sends an HTTP response to the client with the appropriate status code, error message, and error details in JSON format. The stack property is included in the response for development environments to provide a stack trace of the error.

* The `next()` function is called at the end of the middleware to pass control to the next middleware in the stack.

4. Response Format:
The response sent by the `globalErrorHandler` has the following format:

    ```bash
    {
        "success": false,
        "message": "Something went wrong !",
        "errorMessages": [
            {
            "path": "",
            "message": "Error message or field-specific error"
            }
        ],
        "stack": "Error stack trace (visible only in development mode)"
    }
    ```

5. Usage:
To use this middleware in an Express.js application, you would add it to the middleware stack using` app.use()` before defining your routes. This way, any unhandled errors thrown during the request-response cycle will be captured and processed by the `globalErrorHandler`.

Overall, the globalErrorHandler is a crucial part of error handling in an Express.js application, ensuring that errors are handled consistently and returned to the client in a well-formatted JSON response. It helps to provide meaningful error messages and relevant status codes to assist clients in understanding and addressing the encountered issues.

## License 
This project is licensed under the ISC License. Refer to the `LICENSE` file for more details.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have any suggestions or bug fixes.

## Acknowledgements
* Special thanks to [Developer kayes](https://dev-kayes.vercel.app/) for creating this project.

## Contact
If you have any questions regarding this project, feel free to contact me at [here](https://dev-kayes.vercel.app/)
