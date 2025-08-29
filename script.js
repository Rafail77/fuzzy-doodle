// ===== Функция для синей кнопки =====
function openGoogle() {                             // Определяем функцию openGoogle
  window.open("https://www.google.com", "_blank");  // Открываем Google в новой вкладке
}

// ===== Функция для зелёной кнопки =====
function changeBackground() {                       // Определяем функцию changeBackground
  const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"]; // Массив возможных цветов
  const randomColor = colors[Math.floor(Math.random() * colors.length)];  // Выбираем случайный цвет
  document.body.style.background = randomColor;     // Применяем выбранный цвет как фон страницы
}

// ===== Функция для красной кнопки =====
function showTime() {                               // Определяем функцию showTime
  const now = new Date();                           // Получаем текущее время
  const timeString = now.toLocaleTimeString();      // Переводим его в строку (формат ЧЧ:ММ:СС)
  document.getElementById("time-output").textContent = "Current time: " + timeString; // Записываем в <p>
}

// ===== ФИОЛЕТОВАЯ КНОПКА =====
let clockInterval;                               // Переменная для хранения таймера

function startClock() {                          // Функция запуска часов
  if (clockInterval) return;                     // Если часы уже запущены — ничего не делаем

  clockInterval = setInterval(() => {            // Запускаем таймер, обновляющий каждую секунду
    const now = new Date();                      // Берём текущее время
    const timeString = now.toLocaleTimeString(); // Формат ЧЧ:ММ:СС
    document.getElementById("time-output").textContent = 
      "Watch: " + timeString;                    // Выводим в <p>
  }, 1000);                                      // Интервал = 1 секунда
}

// ===== ЖЁЛТАЯ КНОПКА (переключатель) =====
function toggleClock() {
  const btn = document.getElementById("toggleClockBtn"); // Получаем кнопку
  if (clockInterval) { 
    clearInterval(clockInterval);   // Останавливаем часы
    clockInterval = null;           // Сбрасываем переменную
    document.getElementById("time-output").textContent = "The clock has stopped"; 
    btn.textContent = "Start the clock"; // Меняем текст кнопки
  } else {
    startClock();                   // Запускаем часы
    btn.textContent = "Stop the clock"; // Меняем текст кнопки
  }
}

// ===== ФУНКЦИЯ ДЛЯ АНИМАЦИИ =====
function animateTime(element) {
  element.classList.remove("show-time"); // Сначала убираем класс
  void element.offsetWidth;              // Хак: перезапускаем анимацию
  element.classList.add("show-time");    // Добавляем снова
}