# Password-Origin

## Description

Password-Origin project was created for users to generate a random password based on criteria they've selected.  Using dynamically updated HTML and CSS powered by JavaScript, this app runs in the browser with my written code.  I built this project to understand how to accept user criteria based on prompts, implement that user criteria into a possible character set, generate a randomized password based on user criteria, and display such password onto the webpage.  This project solves the issue of needing a functional random password generator which prompts the user for criteria and generating a password that matches the selected criteria.  During this project, I learned the relationship between accepted user criteria and the generate password function through concatenation of arrays with a random character generator linked to a for-loop.  These processes must connect in order to receive a usable randomized password.

## Usage

This password generator can be used to understand the importance of JavaScript functionality for a webpage.  When opening up the webpage, users are presented with a password generator, display box, and generate password button.  After clicking the generate password button, a prompt is opened for criteria asking for character length.  Then, prompts are opened to choose the inclusion of upper case letters, lower case letters, numbers, and or special characters. Within the JavaScript file, the user's criteria is input.  That data is then used through conditional statements to concatenate respective character type arrays with a possible character set array.  This concatenated possible character array runs through a random generator function to return a random number or character based on the total number of characters possible.  Finally, these randomized characters and or numbers are added to a password string by way of a for-loop.  The for-loop repeats the addition of a single random number or character one at a time until the original character length is met.  At this point, the user is presented with a randomized password based on their criteria.  All of these features make the application dynamic with clean, polished, and responsive user interface.

Attached is a screenshot of the webpage:

![Password-Origin Screenshot](<assets/images/Screenshot (82).png>)

## Deployed Site

[Deployed Site](https://tyler-kd.github.io/Password-Origin/)

## Credits

[JavaScript Function Order](https://www.jsdiaries.com/does-javascript-function-order-matter/#:~:text=So%2C%20why%20exactly%20does%20JavaScript,functions%20in%20the%20outer%20scope)

[JavaScript Popup Boxes](https://www.w3schools.com/js/js_popup.asp)

[JavaScript Global Reference](https://www.w3schools.com/jsref/jsref_obj_global.asp)

[JavaScript Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

[JavaScript Math Object](https://www.w3schools.com/JS/js_math.asp)

[JavaScript Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

## License

MIT License

Copyright (c) 2023 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.