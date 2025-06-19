"use strict";


const quoteEl = document.getElementById("quote");
const creditEl = document.getElementById("credit");


async function getQuote() {
  try {
    const res = await fetch("/quote");
    const data = await res.json();
    quoteEl.textContent = data.quote;
  } catch (err) {
    quoteEl.textContent = "Error loading quote.";
  }
}


async function getBackground() {
  try {
    const res = await fetch("/background");
    const data = await res.json();
    
    document.body.style.backgroundImage = `url("${data.imageUrl}")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    creditEl.innerHTML = `Photo by <a href="${data.authorUrl}" target="_blank">${data.author}</a>`;
  } catch (err) {
    creditEl.textContent = "Could not load background.";
  }
}


getQuote();
getBackground();


window.getQuote = getQuote;
