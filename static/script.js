const messages = [
    "ЭЭЭЭЭ ты чооооо??",
    "Сюда низя!!!",
    "Сааашаааааа",
    "Не нажимаааай...",
    "Ты до сюда дошел??",
    "Эхх хомойдум..",
    "Шучу, Таптаан биспиппин ди..",
    "Если до сюда дошел ты мне должен мороженку))",
    "Мой Милый Дорогой Муж, не нажимай сюдаа!!!",
    "Шучу, я заставила нажамкать донт вори ахаахаха ❤️"
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


function Click() {
    window.location.href = "main.html";
}
