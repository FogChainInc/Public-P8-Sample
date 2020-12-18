# Getting Started with P8 Sample Application

> This provided sample app is used for demonstration purposes only.

## Available Scripts

In the project directory, you can run:

### Install Dependencies

```bash

yarn

```

### Start Application (Default port 3000)

 ```bash
 
 yarn start
 
 ```

## Prometheus 8 Testing Platform Script

To start test on Prometheus 8, you will need to visit `User Management` page to view your **registration code** and `Test Run` page for the test run info.

### Run P8 Tests

```bash

node runTest.js $RegistrationCode $CompanyID $ProjectID $TestRunID $OS $Browser $BrowserVersion $Platform

```

### Example

```bash

node runTest.js 599hGAwvsROKKNCB 72 497 397 win10 chrome 70.0.3538.0 web

```
