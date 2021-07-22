# Frontend Mentor - Calculator app solution

This is a fully functioning calculator app inspired by the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)



## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Javascript


### What I learned

The aim of this project was to reinforce lessons learnt on the first half of the [Web Development Bootcamp 2021](https://www.udemy.com/share/101W9C2@FG1KfUtgc1EKcUBFCnFzfj5u/). Some of the major learnings while working through this project include:   

Arrow functions:
```js
const add = (a, b) => a + b;
```

Event Listeners 
```js
// assign click event listener to each button 
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        displayed.innerHTML = clicked(btn[i].value); // upon clicking clicked() is executed parsing in the button's corresponding value
    });
}

// keyboard key-value pairs
const keyboard = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0',
    'Backspace': 'del',
    'Enter': '=',
    '=': '=',
    '-': '-',
    '+': '+',
    '/': '/',
    '*': '*',
    'x': '*',
    '.': '.'
}

// add keydown event listener 
document.addEventListener('keydown', e => {
    try {
        // 
        displayed.innerHTML = clicked(keyboard[e.key]);
    }
    catch {
        console.log('Invalid key');
    }
});
```

Array methods:
```js
total = [...result.toString()]; 
return argument1.reduce((total, num) => total + num);
```


### Useful resources

- [Tristate Toggle Switch](https://dev.to/sanaz/tristate-toggle-switch-509n) Good step-by-step explanation on how to style radio buttons into a tridtate toggle switch



