"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};
async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        return receivedPhotoUrl;
    } catch (error) {
        console.error(error);
    }
}
/*async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        return receivedPhotoUrl;
    } catch (error) {
        console.error(error);
    }
}

/*async function getRandomImage() {
    const client_id = "bbohtb1sJylpkcqu-KsDatNqvhj0zkdjaPUOjs9sRxY";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json()
        console.log(returnedData)
    } catch (error) {
        console.error(error)
    }
}
require("dotenv").config();
const cors = require("cors");

app.use(cors());
getRandomImage();
/*const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
    },

    {
        quote: "Doh!",
        author: "Homer Simpson",
    },

    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    }
]
function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}
setTimeout(loopThroughQuotes, 3000);*/