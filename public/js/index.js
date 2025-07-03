
"use strict";
async function getRandomImage() {
  const ACCESS_KEY = "bbohtb1sJylpkcqu-KsDatNqvhj0zkdjaPUOjs9sRxY0";
  const endpoint   = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=${ACCESS_KEY}`;

  try {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error(`Unsplash responded ${res.status}`);

    const data = await res.json();
    const imgUrl = data.urls.regular;

    document.querySelector(".background-img").style.backgroundImage =
      `url(${imgUrl})`;
  } catch (err) {
    console.error("Unsplash fetch failed → using fallback image", err);
    document.querySelector(".background-img").style.backgroundImage =
      `url("./img/mockup.jpg")`;               // fallback local image
  }
}

const elements = {
  quote : document.getElementById("quote"),
  author: document.getElementById("author"),
};

const quotes = [
  { quote: "All hands! Abandon ship!", author: "Captain Picard" },
  { quote: "D'oh!",                    author: "Homer Simpson" },
  { quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.", author: "Eric Schmidt" }
];

function loopThroughQuotes() {
  let i = 0;
  const show = () => {
    elements.quote.textContent  = quotes[i].quote;
    elements.author.textContent = quotes[i].author;
    i = (i + 1) % quotes.length;
  };
  show();                
  setInterval(show, 3000); 
}

document.addEventListener("DOMContentLoaded", () => {
  getRandomImage();
  loopThroughQuotes();
});
