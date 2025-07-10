# Quote_Generator
## Date: 10.07.2025
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quote Generator</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <div class="container">
    <h1>InspireMe!!!</h1>
    <div class="Quote-box">
        <p class="quote">Your Motivational Quote will appear here.</p>
        <p class="author">-Author Name</p>
    </div>
    <button class="button">Get Quote</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 
{
  color: #333;
  margin-bottom: 25px;
}
.quote {
  font-size: 24px;
  color: #555;
  font-style: italic;
  margin-bottom: 30px;
}
.quote-box
{
    display:flex;
    justify-content: center;
    margin-left:150px;
}
.author 
{
  font-size: 18px;
  color: #888;
  margin-bottom: 30px;
  margin-left: 380px;
}
.button
{
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 177px;
}
.button:hover {
  background-color: #0056b3;
}
```
## JS Code:
```
const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James"
  }
];

const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const button = document.querySelector('.button');

button.addEventListener('click',() =>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteselected = quotes[randomIndex];

    quoteElement.innerText = `"${quoteselected.text}"`;
    authorElement.innerText = `-"${quoteselected.author}"`;
});
```
## Output:
<img width="1919" height="875" alt="Screenshot 2025-07-10 212353" src="https://github.com/user-attachments/assets/dac11ca7-e0b0-41d6-a01a-9c3926610516" />

## Live Webpage:

## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
