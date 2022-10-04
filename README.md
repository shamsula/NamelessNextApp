This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run these commands:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn cy:run`

Runs tests using Cypress

I have added some UI and API tests - they should suffice for now.

### `yarn cy:open`

Open Cypress and preview the tests in action (requires app server to be running at [http://localhost:3000](http://localhost:3000))

## How to get the Inspirational Quotes API to work

The app doesn't crash without this setup but it's still nice to be inspired. My app helps with that - delivering you inspiration quotes at the click of a button.

To make it work, you have to subscribe to this API: 
[Universal Inspirational Quotes](https://rapidapi.com/HealThruWords/api/universal-inspirational-quotes/endpoints)

Once you have your api key, place them in a `.env` file like so:
```shell
REACT_APP_QUOTE_KEY=yourpersonalquotekeyhere
```

### Thats about it 

## Speaking of "About"
This is just an app I built to dump stuff from my art portfolio. Nothing too complicated.
