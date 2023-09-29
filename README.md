# ClientApp

This is the client application for the ClientApp application. It is developed using the Angular framework. Current
angular version: 15.1.3.

## Create Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Run unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Run end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Run linting

Run `ng lint` to execute linting diagnostics on the porject. This will show any errors or warnings related to the syntax
and formatting.

## Documentation

Run `npm run compodoc:build-and-serve` to build and serve compodoc. Navigate to `http://127.0.0.1:8080` to see the
locally hosted compodoc. Here you can see documentation for the entire client application.

## .TS Lint and .scss Lint (Formatter)

In this project we are using prettier/eslint to format .ts files. To automatically run the formatter, you should enable
format on save in your edito and set prettier as the default formatter look here:
https://www.youtube.com/watch?v=EBlXDDzE_8Y&ab_channel=Learn2CodeMZANSI.

We should investigate at some point if it necessary to have stylelint enabled
(https://stylelint.io/user-guide/rules#empty) for formatting scss files properly.
