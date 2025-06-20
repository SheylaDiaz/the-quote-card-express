async function getQuote() {
  const quoteEl = document.getElementById("quote");
  const creditEl = document.getElementById("credit");
  const button = document.querySelector("button");

  quoteEl.textContent = "Loading...";
  creditEl.textContent = "";
  button.disabled = true;

  try {
    const quoteRes = await fetch("/quote");
    const quoteData = await quoteRes.json();
    quoteEl.textContent = quoteData.quote;

    const bgRes = await fetch("/background");
    const bgData = await bgRes.json();
    document.body.style.backgroundImage = `url(${bgData.imageUrl})`;
    creditEl.innerHTML = `Photo by <a href="${bgData.authorUrl}" target="_blank">${bgData.author}</a> on Unsplash`;
  } catch (err) {
    console.error("Fetch failed", err);
    quoteEl.textContent = "Something went wrong.";
  } finally {
    button.disabled = false;
  }
}


window.onload = getQuote;
