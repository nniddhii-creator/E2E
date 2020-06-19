# Environment Setup for Automation Task

## Prerequisites
* Node.js should be installed and available from command line
  * To check that Node.js is installed, run `npm` command in console
* Visual Studio Code is installed as development IDE
  * For convenience you can use build-in command line in Visual Studio Code (ctrl + ~)
* Google Chrome browser is installed

## Solution setup
* Run `npm install` command to fetch all prequired packages

## Running Web Application
Run `npm run start` for launching of local web server. Keep this instance of command line alive as web server is running there. Navigate to `http://localhost:4200/`

## Running end-to-end tests
Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure your app is available by `http://localhost:4200/`.

## Task Implementation
1. The task has been implemented with the above details mentioned.
2. The set of test cases will run in both Chrome and FF browser.
3. In order to run the test cases on FF, run the below command to update the webdriver-manager on your  terminal - node node_modules/protractor/bin/webdriver-manager update

## GUI tests, Functional Tests and Bug reports
1. GUI Tests - GUI.PDF
2. Functional Tests - Functional Tests.PDF
3. Bugs - Bug.PDF
