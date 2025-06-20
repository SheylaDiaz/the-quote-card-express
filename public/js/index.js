"use strict";

const elements = {
  quote: document.getElementById("quote"),
  author: document.getElementById("author"),
  credit: document.getElementById("credit") 
};

const quotes = [
  {
    quote: "All hands! Abandon ship!",
    author: "Captain Picard"
  },
  {
    quote: "Doh!",
    author: "Homer Simpson"
  },
  {
    quote: "The Internet is the first thing that humanity has built that humanity doesn't understand.",
    author: "Eric Schmidt"
  }
];

function getQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  elements.quote.textContent = quotes[random].quote;
  elements.author.textContent = `— ${quotes[random].author}`;
}

async function getRandomImage() {
  const client_id = "bbohtb1sJylpkcqu-KsDatNqvhj0zkdjaPUOjs9sRxY";
  const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    document.body.style.backgroundImage = `url("${data.urls.full}")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    elements.credit.innerHTML = `Photo by <a href="${data.user.links.html}" target="_blank">${data.user.name}</a>`;
  } catch (error) {
    console.error(error);
    elements.credit.textContent = "Could not load background.";
  }
}

getQuote();
getRandomImage();

window.getQuote = getQuote;
