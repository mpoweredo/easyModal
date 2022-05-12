# MODAL LIBRARY

Modal Library is a simple javascript library whose goal is making good looking modal using one line in javascript where you can set style and funcionality.

## Technology

**Vanilla JavaScript and SCSS**

## Goals

- Make documentation website
- Practice OOP Programing
- Practice using git and npm
- Practice SCSS
- Practice working with tools like eslint etc
- Create a library, which is supposed to simplify work for me and other developers

## Instalation
```
npm install easy-modal-js --save
```

## Usage

- First You have to import Google Icons library for working icons properly!

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
```

ps. You can change things in SCSS file like colors or other properties.

- To create our first modal we have to import script.

```javascript
import { EasyModal } from "yourPath/easyModal.js";
```

- Everything done! We can start making modals!

```javascript
new EasyModal({title: 'My first modal!', description: "It's my first modal using easy-modal-js library!", theme: 'dark'});
```

![PHOTO!](./readme%20photos/photo1.png)

- Also u can add buttons with 'href'!

```javascript
new EasyModal({title: 'Link to my github!', operationButton: [{content: 'My github!', href: 'https://github.com/'}]});
```

![PHOTO!](./readme%20photos/photo2.png)


ps2. You can change theme changing 'theme property'!




## Sources 

- freecodecamp.org
- https://coolors.co/446074-3b5465-334857-2a3c48-22303a-19242b-11181d-080c0e-000000
- https://fonts.google.com/
- https://fonts.google.com/icons

## Conclusions

Making this project take not that much time that i expected. Coding library like this was fun and satisfying.

