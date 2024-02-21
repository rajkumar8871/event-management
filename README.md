# EventManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Setup

Run `npm install` for install dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## How to work
# Login
When you go to `http://localhost:4200/` it will show mobile, then you can enter any 10 digit random number, then click on send OTP, you can see OTP box, to enter OTP you again enter 6 digits. Enter. You can enter the random OTP then click on Sign In.

# Home
Here you can see list of Events.
1) Add New:- Add New button is used to create new Event.
2) Search Box:- You can search Events in Search Box based on Event Type.
    # Note:- You can customize the search `other field` based on changing the `searchKey` in the `EventComponent`
3) Laod More:- When you add more then 5 event then Load more will work and when you click on Load more it will load 5 more events on every single click.
    # Note:- You can change the `EventComponent -> count` to optimize loading a Less/larger number of events.
4) When you click on table body it will show Event Details.
5) You can Edit or Delete Event.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
