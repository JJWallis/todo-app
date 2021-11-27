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

Your users should be able to:

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

-  Live Site URL:

## My process

### Built with

-  React - JS Library
-  Typescript
-  Mobile-first workflow
-  Styled Components
-  Flexbox
-  Semantic HTML5 markup

### What I learned

```jsx
const lightTheme = {
   fontFamily: 'Josefin Sans',
   colorBg: 'hsl(236, 33%, 92%)',
   colorFg: 'hsl(0, 0%, 98%)',
   ...
}
```

Styled Components - first project | Theme toggle with ThemeProvider vs vannila JS | store in local storage (checkbox state vs theme obj itself) | mixing up styled components + rendering them in same file - really bad (styled folder + naming convention)

```jsx
const List = styled.ul<ListProps>`
   max-height: 385px;
   overflow-y: scroll
   ....
```

Negatively positioned header + main + ftr (todo list in normal flow) - viewport height wasn't responding when todo list itself positioned on top

Layout issue with positioned content overlapping footer txt - max-height + overflow: scroll to fix

```jsx
export interface AppState {
   todos: {
      id: string
      key: string
      value: string
      isCompleted: boolean
      invisible: boolean
   }[]
}
```

Typescript basics - type, interfaces, where to declare return types + params | built in React types | Styled components use | library types (+ importing them)

Modelling with obj of info in App state vs directly setting as props in later component (not modifyable - readonly - for filtering logic) | map() over obj + produce component based on it (vs direct properties)

```jsx
const handleRemoveTodo: AppState['handleRemoveTodo'] = (id) => {
   const newTodos = todos.filter((todo: any) => todo.id !== id)
   setTodos(newTodos)
}
```

Removing todos - find(todoId) with App state arr vs remove() DOM method | same with clearing compeleted - filtering through arr + removing all objs with | find myself using these techniques when returning to vanilla TS/JS (node list of dom els, array from it + destructure all in one)

```jsx
const handleTodosVisibility = (active?: string, completed?: string) => {
      const newTodos = [...todos]
      for (const todo of newTodos) todo.invisible = false
      ...
}
```

Filter system - boolean prop of each todo (invisible) + when true toggled invisible (via Styled Components) | realise for future projects - gaining a diff version of State without modifying original important (put into diff state)

```jsx
const dragOver: DnD['dragOver'] = (e) => {
   const id = e.dataTransfer.getData('todo-id')
   ...
}
```

Drag + drop - appends as last child when drag anywhere (even over same el)
Calculations needed from middle of parent | dataTransfer - way of getting info cross component (use refs later?) | vanilla JS tutorial

### Continued development

react hooks to re-factor bulky code occuring in smaller starter projects like this | useReducer() + custom hooks + other ways to pass info down excluding Context API

filtering logic (achieved stylistically - but more practice with diff versions of state without modifying original)

Organising components folder more (sub-folders)

### Useful resources

-  [Web Dev Simplified - Learn React in 30 Minutes](https://www.youtube.com/watch?v=hQAHSlTtcmY&t=1336s&ab_channel=WebDevSimplified) - Kyles yt vid (helping with toggling a todo completed)

-  [Traversy Media - Styled Components Crash Course](https://www.youtube.com/watch?v=02zO0hZmwnw&t=945s&ab_channel=TraversyMedia) - structuring styled + logic-based components | naming conventions + ThemeProvider structure (nesting objs within parent to hold shared styles)

-  [Web Dev Simplified - How to Build Sortable Drag & Drop](https://www.youtube.com/watch?v=jfYWwQrtzzY&t=582s&ab_channel=WebDevSimplified) - Dnd behaviour | needed to change className targetting + add local storage saving of order (saw YT vid claiming advance algorithm needed - potentially lack of knowledge at this point)

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()
