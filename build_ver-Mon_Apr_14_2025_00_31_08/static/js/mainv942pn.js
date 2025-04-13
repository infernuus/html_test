"use strict";

document.getElementById('burgerMenu').addEventListener('click', function () {
  var mobileMenu = document.getElementById('mobileMenu');

  // Переключение класса active
  mobileMenu.classList.toggle('active');

  // Можно также добавить анимацию для бургер-меню
});
"use strict";
'use strict';

var positionX = 0,
  positionY = 0;
var coordXprocent = 0,
  coordYprocent = 0;
window.onload = function () {
  var paralax = document.querySelector('.paralax');
  var bublesL = document.querySelector('.images-paralax__bubles-l');
  var bublesR = document.querySelector('.images-paralax__bubles-r');
  var forBublesL = 40;
  var forBublesR = 20;
  var speed = 0.1;
  function setMouseParalaxStyle() {
    var distX = coordXprocent - positionX;
    var distY = coordYprocent - positionY;
    positionX += distX * speed;
    positionY += distY * speed;
    bublesL.style.cssText = "transform: translate(".concat(positionX / forBublesL, "%, ").concat(positionY / forBublesL, "%);");
    bublesR.style.cssText = "transform: translate(".concat(positionX / forBublesR, "%, ").concat(positionY / forBublesR, "%);");
    requestAnimationFrame(setMouseParalaxStyle);
  }
  setMouseParalaxStyle();
  paralax.addEventListener('mousemove', function (e) {
    var paralaxWidth = paralax.offsetWidth;
    var paralaxHeight = paralax.offsetHeight;
    var coordX = e.pageX - paralaxWidth / 2;
    var coordY = e.pageY - paralaxHeight / 2;
    coordXprocent = coordX / paralaxWidth * 100;
    coordYprocent = coordY / paralaxHeight * 100;
  });
};
"use strict";
"use strict";
"use strict";

// Устанавливаем начальное время (10 минут)
var initialTime = 10 * 60; // 10 минут в секундах
var totalTime = initialTime; // Устанавливаем текущее время на начальное

var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');
var timerInterval; // Объявляем переменную для таймера заранее

function updateTimer() {
  var hours = Math.floor(totalTime / 3600);
  var minutes = Math.floor(totalTime % 3600 / 60);
  var seconds = totalTime % 60;

  // Обновляем элементы на странице
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');

  // Уменьшаем общее время на одну секунду
  if (totalTime > 0) {
    totalTime--;
  } else {
    totalTime = initialTime; // Сбрасываем таймер на начальное значение
  }
}

// Обновляем таймер каждую секунду
timerInterval = setInterval(updateTimer, 1000);

// Инициализируем таймер сразу при загрузке страницы
updateTimer();
var buttons = document.querySelectorAll('.card__button');
buttons.forEach(function (button) {
  var cardInner = button.closest('.card').querySelector('.card__inner');
  var cardMessage = button.closest('.card').querySelector('.card__message');
  var cardPrice = button.closest('.card').querySelector('.card__text-price');
  var isLastCard = button.closest('.card').parentElement.lastElementChild === button.closest('.card');
  button.addEventListener('mouseenter', function () {
    // cardInner.style.background = '#9564AA';
    cardMessage.style.display = 'flex';
    if (isLastCard) {
      cardInner.style.background = '#aa6464';
    } else {
      cardInner.style.background = '#9564AA';
    }
    button.style.color = 'rgba(0, 0, 0, 1)';
    cardPrice.style.color = 'white';
  });
  button.addEventListener('mouseleave', function () {
    // cardInner.style.background = 'rgba(149, 100, 170, 0.1)';
    if (isLastCard) {
      cardInner.style.background = '#AA646433';
    } else {
      cardInner.style.background = 'rgba(149, 100, 170, 0.1)';
    }
    cardMessage.style.display = 'none';
    button.style.background = '#FFFFFF';
    button.style.color = 'rgba(0, 0, 0, 0.2)';
    cardPrice.style.color = 'black';
  });
});
var cardsInner = document.querySelector('.cards__content-inner');
var dotsContainer = document.querySelector('.sim-slider-dots');
var cards = document.querySelectorAll('.card');
var totalCards = cards.length;

// Создаем точки в зависимости от количества карточек
for (var i = 0; i < totalCards; i++) {
  var dot = document.createElement('div');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
}

// Функция для обновления активной точки
function updateActiveDot(index) {
  var dots = document.querySelectorAll('.dot');
  dots.forEach(function (dot, i) {
    dot.classList.toggle('active', i === index);
  });
}

// Обработчик события прокрутки
cardsInner.addEventListener('scroll', function () {
  var scrollLeft = cardsInner.scrollLeft;
  var cardWidth = cards[0].offsetWidth + 50; // Ширина карточки + отступ между ними

  // Определяем индекс активной карточки
  var activeIndex = Math.round(scrollLeft / cardWidth);

  // Обновляем активную точку
  updateActiveDot(activeIndex);
});

// Инициализация активной точки при загрузке страницы
updateActiveDot(0);