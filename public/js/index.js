"use strict";

async function getRandomImage() {
    const client_id = "bbohtb1sJylpkcqu-KsDatNqvhj0zkdjaPUOjs9sRxY0";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;

    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error("Unsplash fetch failed → using fallback image", error);
    }
}

getRandomImage();
