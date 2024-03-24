# Boilerplate Application: UI5 with Node.js API for OpenAI Integration

This repository contains a monorepo setup for a boilerplate application demonstrating the integration of SAPUI5 frontend and a Node.js/Express backend with OpenAI. The purpose of this boilerplate is to provide a starting point for applications leveraging SAPUI5 for the UI and Node.js for server-side logic, particularly for those looking to integrate with OpenAI services.

## Structure

The monorepo consists of two primary directories:

- `/ui` - Contains the SAPUI5 application built with TypeScript and UI5 Tooling 3.0.
- `/api` - Houses the Node.js and Express project configured to interact with OpenAI's API.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (Refer to the `package.json` files in both `/ui` and `/api` directories for the required version)
- npm (Node Package Manager)

Additionally, for the API to interact with OpenAI, you'll need:

- An OpenAI API key, obtainable by creating an account with OpenAI and generating a key from your dashboard.

## Setup

### API Configuration

1. Navigate to the `/api` directory:

    ```sh
    cd api
    ```

2. Install the required npm packages:

    ```sh
    npm install
    ```

3. Create a `.env` file in the `/api` directory and add your OpenAI API key:

    ```
    OPENAI_API_KEY=<Your OpenAI API Key Here>
    ```

4. Start the API server:

    ```sh
    npm run start-server
    ```

This command launches the backend server, making it ready to handle requests from the UI5 frontend.

### UI Configuration

1. Open a new terminal and navigate to the `/ui` directory:

    ```sh
    cd ui
    ```

2. Install the necessary npm packages:

    ```sh
    npm install
    ```

3. Start the UI5 application:

    ```sh
    npm run start
    ```

This command compiles the TypeScript code and launches the SAPUI5 application in your default web browser.

## Conclusion

With both the UI and API projects set up and running, you are now ready to explore and extend this boilerplate application further. This setup serves as a foundation for building sophisticated applications with SAPUI5 on the frontend and Node.js on the backend, integrated with the powerful capabilities of OpenAI.

For further details on each project, refer to the README files within the respective `/ui` and `/api` directories.
