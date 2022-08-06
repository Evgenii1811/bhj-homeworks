// // Zadacha 1

"use strict";

const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

const phrases = [
    'Не понятен Ваш вопрос',
    'Напишите позже, у нас занято',
    'Тех. перерыв',
    'Повторите Ваш вопрос',
    'Через 15 минут закрываемся',
    'Закрыто, напишите завтра',
];

const HH = new Date().getHours();
const mm = new Date().getMinutes();


chat.addEventListener('click', showChat);
input.addEventListener("change", sendMsg);

function showChat(event) {
    chat.classList.add('chat-widget_active');
}


function sendMsg(event) {
messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${HH}:${mm}</div>
        <div class="message__text">
        ${event.target.value}
      </div>
    </div>
`;

event.target.value = '';

answerFromBot(phrases);
}

function answerFromBot(answer) {

const random = Math.floor(Math.random() * (answer.length))

return messages.innerHTML += `
    <div class="message">
        <div class="message__time">${HH}:${mm}</div>
        <div class="message__text">
        ${answer[random]}
       </div>
    </div>
`;
}