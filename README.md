# 🍅 Pomodoro

![CD](https://github.com/quibaritaenperdresatrompe/pomodoro/workflows/CD/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/7fb90efc-283b-4d21-a35a-71c4e7a699d0/deploy-status)](https://app.netlify.com/sites/qbaepst-pomodoro/deploys)

Manage and monitor your work sessions with [Pomodoro method](https://en.wikipedia.org/wiki/Pomodoro_Technique) on a single app.

Inspired by https://github.com/kigiri/timer.

## Features

- [x] Start a work or break session
- [x] Set an emoji to illustrate the session
- [x] Play an alarm on timer expiration
- [x] Mute the alarm
- [x] ~~Create a nicer alarm sound with the Web Audio API~~ Use a nicer alarm
- [x] Add a light/dark theme selector
- [ ] Make the alarm sound customizable
- [ ] Store (on browser Local Storage) and visualize past sessions
- [ ] Store (on Firebase) and visualize past sessions, n.b. Google Sign-In integration is required

## Available Scripts

In the project directory, you can run:

### `start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `commit`

Run the [`git-cz`](https://github.com/streamich/git-cz) CLI to generate commit messages according to the [_Conventional Commit specifications_](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification).

### `format`

Prettify code with [Prettier](https://prettier.io/).

See configuration on [`@qbaepst/prettier-config`](https://github.com/quibaritaenperdresatrompe/prettier-config) package.

### `lint`

Lint code with [ESLint](https://eslint.org/).

### `release`

Create a release with [`semantic-release`](https://semantic-release.gitbook.io/).
