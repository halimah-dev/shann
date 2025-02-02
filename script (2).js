const messages = [
    "Sure ka na?",
    "Sure na sure??",
    "Really sureeee??",
    "Love please...",
    "Pag isipan mo mabuti please",
    "If mag no ka iiyak ako",
    "no:(",
    "Please...",
    "ok di na kita kukulitin:(((",
    "Joke lang, please mag yes ka na :>"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}