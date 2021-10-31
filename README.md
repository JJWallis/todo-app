# Frontend Mentor - Todo App solution

This is a solution to the [Todo App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW).

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Users should be able to:

-  View the optimal layout for the app depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Add new todos to the list
-  Mark todos as complete
-  Delete todos from the list
-  Filter by all/active/complete todos
-  Clear all completed todos
-  Toggle between light and dark mode
-  Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.png)

### Links

-  Solution URL:
-  Live Site URL:

## My process

### Built with

-  React
-  Typescript
-  Mobile-first workflow
-  Styled Components
-  Flexbox
-  Semantic HTML5 markup

### What I learned

```jsx
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
   color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
   console.log('🎉')
}
```

### Continued development

react hooks to re-factor bulky code occuring in smaller starter projects like this | useReducer() + custom hooks + other ways to pass info down excluding Context API

filtering logic (achieved stylistically - but more practice with diff versions of state without modifying original)

Organising components folder more (sub-folders)

### Useful resources

-  [Web Dev Simplified - Learn React in 30 Minutes](https://www.youtube.com/watch?v=hQAHSlTtcmY&t=1336s&ab_channel=WebDevSimplified) - Kyles yt vid (helping with toggling a todo completed)

-  [Traversy Media - Styled Components Crash Course](https://www.youtube.com/watch?v=02zO0hZmwnw&t=945s&ab_channel=TraversyMedia) - structuring styled + logic-based components | naming conventions + ThemeProvider structure (nesting objs within parent to hold shared styles)

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

###### TODO

Modelling with obj of info in App state vs directly setting as props in later component (not modifyable - readonly - for filtering logic) | map() over obj + produce component based on it (vs direct properties)

Theme toggle within React + Styled Components - ThemeProvider vs vannila JS | store in local storage (checkbox state vs theme obj itself)

Pseudo els for completed todo checkbox + layering bg imgs

Drag + drop - appends as last child when drag anywhere (even over same el)
Calculations needed from middle of parent

Removing todos - find(todoId) with App state arr vs remove() DOM method | same with clearing compeleted - filtering through arr + removing all objs with

Filter system - boolean prop of each todo (invisible) + when true toggled invisible (via Styled Components) | realise for future projects - gaining a diff version of State without modifying original important

Layout issue with positioned content overlapping footer txt - max-height + overflow: scroll to fix
