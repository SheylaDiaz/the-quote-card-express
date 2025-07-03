"use strict";
function setRandomBackground() {

  const url = `https://source.unsplash.com/1600x900?sig=${Date.now()}`;
  document.querySelector(".background-img").style.backgroundImage = `url("${url}")`;
}
const quotes = [
  { q: "All hands! Abandon ship!",               a: "Captain Picard" },
  { q: "D'oh!",                                  a: "Homer Simpson"  },
  { q: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.", a: "Eric Schmidt" }
];

function loopQuotes() {
  let i = 0;
  const qEl = document.getElementById("quote");
  const aEl = document.getElementById("author");
  const show = () => {
    qEl.textContent = quotes[i].q;
    aEl.textContent = quotes[i].a;
    i = (i + 1) % quotes.length;
  };
  show();
  setInterval(show, 3000);
}
document.addEventListener("DOMContentLoaded", () => {
  setRandomBackground();
  loopQuotes();
});

