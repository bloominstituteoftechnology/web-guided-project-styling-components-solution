# Lesson Plan

## 1- Preliminaries

* Walk the class through the clone, install and start process of the GP repo.
* The project uses an API mocked with Mock Service Worker. No need to run separate script.

## 2- Instructor's Checklist of Things to Cover

### 2.1- npm & npx

* Installing packages globally with npm.
* Using npx (npm version 5.2.0 +).
* Using CRA with and without npx.
* The `--use-npm` flag (to force the use of npm even if Yarn is available).
* Review of scripts available in CRA apps.

### 2.2- Styled Components

* Installation of the library.
* Creation of a theme object inside `theme/index.js` to avoid hard coding values in our styles.
* Importing and using the `ThemeProvider` to wrap the app in `src/index.js`.
* We can combine Styled Components with CSS. No need to choose between one or the other.
* Declaring and using a styled component.
* Accessing the theme from within a styled component.
* Passing props into a styled component.
* Using media queries.
* Nesting rules and the `&`.
* Pseudo classes and states.
* Pseudo elements and the `content` rule.
* Transitioning `transform` and `opacity` (optional).
* Keyframes and animations (optional).
* See the style tag created inside `index.html` by Styled Components.
* See the class names created by Styled Components inside `index.html`.

### 2.3 Reactstrap

* Installation of the library.
* Using a component inside the project.

## 3- Demo of npm, npx & CRA

## 4- Demo of Styled Components

## 5- Demo of Reactstrap

## 4- Links of Interest

* [Installing npm packages globally](https://docs.npmjs.com/downloading-and-installing-packages-globally)
* [npm VS. npx](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)
* [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
* [Styled Components](https://styled-components.com/docs)
* [Reactstrap](https://reactstrap.github.io/)

## 5- Following Along and Catching Up

* The instructor should make sure students clone the starter repo without forking it.
* The instructor must make commits to a `lecture` branch and push them regularly (or use a script to do it).
* If the students work on their own named branch, `main` is kept clean so they can re-do the demo later.
* In order to catch up, the students can reset their branch to the instructor's last pushed commit:

  ```bash
    git fetch && git reset --hard origin/lecture
  ```
