const quotes = [
    {
        quote: "Love yourself",
        author: "lee gubyeong",
    },
    {
        quote: "Think one more time",
        author: "lee gubyeong",
    },
    {
        quote: "Do your best in every second",
        author: "lee gubyeong",
    },
    {
        quote: "Remember the world is big",
        author: "lee gubyeong",
    },
    {
        quote: "Do not think you are best",
        author: "lee gubyeong",
    },
    {
        quote: "Help each other",
        author: "lee gubyeong",
    },
    {
        quote: "Hello Everyone",
        author: "Teacher",
    },
    {
        quote: "I'm hungry",
        author: "every time",
    },
    {
        quote: "I want to be the one",
        author: "lee gubyeong",
    },
    {
        quote: "Think flex",
        author: "lee gubyeong"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;