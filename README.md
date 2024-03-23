# Secure Forum Angular App

This is a secure Angular application that serves as a forum for different members within a department to post, view, and delete issues. It incorporates token-based authentication using JSON Web Tokens (JWT) and various security measures to ensure a secure experience.

## Key Features and Skills Demonstrated

### Authentication and Authorization

The app implements token-based authentication, allowing users to sign up and log in to obtain a JWT token. This token is then used for subsequent requests, demonstrating knowledge of authentication mechanisms and securing APIs. Additionally, the app utilizes Angular's route guards to protect certain routes from unauthorized access, ensuring that only authenticated users can access specific areas of the application.

### CRUD Operations

The app allows authenticated users to perform Create, Read, Update, and Delete (CRUD) operations on issues. Users can create new issues by sending a POST request to the backend API, fetch and display a list of existing issues from the API, and delete existing issues by sending a DELETE request to the API. This showcases the ability to handle common data operations and interact with a backend API.

### Routing and Navigation

The app uses the Angular Routing module to define different routes and associate them with corresponding components. This demonstrates the ability to set up routing and navigation within an Angular application, allowing users to navigate between different views and functionalities.

### Observables and RxJS

The app makes use of RxJS Subjects and Observables to handle asynchronous data and propagate changes between components. This demonstrates an understanding of reactive programming concepts and their implementation in Angular applications, which is crucial for building responsive and efficient user interfaces.

## Development and Testing

The project was generated with Angular CLI version 14.2.8, which provides a comprehensive toolset for Angular development. Developers can use the Angular CLI to start a development server, generate new components or services, build the project for production, run unit tests, and execute end-to-end tests. This tooling facilitates efficient development workflows and ensures code quality through testing.

## Conclusion

This secure forum Angular app showcases proficiency in various aspects of Angular development, including authentication, authorization, CRUD operations, routing, observables, and reactive programming. It demonstrates the developer's ability to build a secure, feature-rich application while adhering to best practices and incorporating necessary security measures. The app's implementation of token-based authentication, route guards, and API integration highlights the developer's understanding of secure application development principles.
