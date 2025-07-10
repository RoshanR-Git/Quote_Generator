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
