# Lesson Plan

## 1- Preliminaries

* Walk the class through the clone, install and start process of the GP repo.
* The project uses an API mocked with Mock Service Worker. No need to run separate script.

## 2- Demo of npm, npx & CRA (20')

1. Verify version of node and npm as npx requires at least npm 5.2.0.
2. Demo installing CRA globally and using it to scaffold a project.
3. Explain the `--use-npm` flag to force CRA to use npm even if Yarn is available.
4. Demo listing all global npm packages with `npm list -g --depth=0`.
5. Demo uninstalling CRA and using CRA with npx instead.
6. Review the available scripts.

## 3- Demo of Styled Components (70')

### 3.1- Getting Started

1. Show the docs and install library.
2. Explain can combine Styled Components with CSS. No need to choose between one over the other.
3. Create a theme object inside `theme/index.js` to avoid hard coding values in our styles.
4. Move inside `src/index`, import `ThemeProvider` and the theme object and wrap `App` with it.

### 3.2- StyledFriend.js

1. See the CSS inside `styles.css` that targets `.friend` and comment it out.
2. We will create a styled component for `components/Friend` instead, using those rules we commented out.
3. Add `color` and `background-color` rules pulling in values from the theme.
4. Demo adding a media query, improve by pulling in the breakpoint from the theme.
5. Demo a `&:hover` changing `background-color`. Improve by adding a transition.
6. Demo a `&::before` with the `content` rule.
7. Demo nesting a rule for the button.
8. Demo the sc taking data throgh a prop and using it inside the styles.
9. Open Dev Tools and inspect the `index.html` and find the style tag and classnames used by sc.
10. Optional: demo keyframes and animation.

### 3.3- Details.js

1. Give students freedom to experiment adding a styled component for `components/Details`.
2. Make the point we can build smaller, more reusable sc for buttons and other elements.

## 4- Demo of Reactstrap (15')

1. Show the docs and install library.
2. Import a component from Reactstrap.
3. Make the point this brings all of Bootstrap's styles with it.
4. Perhaps makes more sense on pages that already have Bootstrap.

## 5- Links of Interest

* [Installing npm packages globally](https://docs.npmjs.com/downloading-and-installing-packages-globally)
* [npm VS. npx](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)
* [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
* [Styled Components](https://styled-components.com/docs)
* [Reactstrap](https://reactstrap.github.io/)

## 6- Following Along and Catching Up

* The instructor should make sure students clone the starter repo without forking it.
* The instructor must make commits to a `lecture` branch and push them regularly (or use a script to do it).
* If the students work on their own named branch, `main` is kept clean so they can re-do the demo later.
* In order to catch up, the students can reset their branch to the instructor's last pushed commit:

  ```bash
    git fetch && git reset --hard origin/lecture
  ```
