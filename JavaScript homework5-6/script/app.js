// Домашнє завдання:
// 5-6.=========================================
/* 
1.Нужно сделать вот такой таймер (https://www.online-stopwatch.com/full-screen-stopwatch/).
2.Кнопка Start запускает таймер, так же нужно выводить милисекунды.
  После запуска она меняется на кнопку Pause, которая может приостанавливать таймер.
3.Кнопка Clear останавливает и обнуляет таймер.
4.Дизайн сделайте свой, используя Pure или Bootstrap.
5.Это более сложное задание, для тех кому покажется мало :)
  Не обязательно, но рекомендовано к выполнению. Сделать точно такой же таймер как здесь https://onlineclock.net/.
  Основная функциональность:
6.Start - начинается отсчет с нуля. При работе таймера выводим миллисекунды. Кнопка Start заменяется на Stop.
7.Split - засекаем текущий отсчет и выводим его под таймером с меткой Split, при этом продолжаем работу таймера.
8.Stop - останавливаем текущий отсчет. Время, которое засекли, выводим под таймером с пометкой Stop.
9.Reset - обнуляем таймер, удаляем все сохраненные отметки Split и Stop.
10.Если будет не понятно как должны работать кнопки - просто посмотрите как они реализованы на текущем таймере по ссылке. 
*/

//buttons 
let buttonStart = document.querySelector('.start');
let buttonClear = document.querySelector('.clear');

//times
const hourElement = document.querySelector('.hour');
const minElement = document.querySelector('.minute');
const secElement = document.querySelector('.second');
const msecElement = document.querySelector('.millisecond');

let hour = 00,
    min = 00,
    sec = 00,
    msec =00,
    interval

buttonStart.addEventListener('click',()=>{
    clearInterval(interval);
    if (!interval){
    interval = setInterval(timer, 10);
    buttonStart.innerText = "Pause";
    document.querySelector('.start').style.backgroundColor = "rgb(4, 235, 4)";
    } else {
    interval = null;
    buttonStart.innerText = "Continue"; 
    document.querySelector('.start').style.backgroundColor = "rgb(42, 123, 245)";
    }
})

buttonClear.addEventListener('click',()=>{
    clearInterval(interval)
    hour = 00
    min = 00
    sec = 00
    msec = 00
    hourElement.textContent = "00"
    minElement.textContent = "00"
    secElement.textContent = "00"
    msecElement.textContent = "00"

    buttonStart.innerText = "Start"
    interval = null;
})

function timer() {
    msec++
    //millisecond
    if (msec < 9){
        msecElement.innerText = "0" + msec
    }
    if (msec > 9){
        msecElement.innerText = msec
    }
    if (msec > 99){
        sec++
        secElement.innerText = "0" + sec
        msec = 0
        msecElement.innerText = "0" + msec
    }

    //second
    if (sec < 9){
        secElement.innerText = "0" + sec
    }
    if (sec > 9){
        secElement.innerText = sec
    }
    if (sec > 59){
        min++
        minElement.innerText = "0" + min
        sec = 0
        secElement.innerText = "0" + sec
    }

    //minutes
    if (min < 9){
        minElement.innerText = "0" + min
    }
    if (min > 9){
        minElement.innerText = min
    }
    if (min > 59){
        hour++
        hourElement.innerText = "0" + hour
        min = 0
        minElement.innerText = "0" + min
    }

     //hour
     if (hour < 9){
        hourElement.innerText = "0" + hour
    }
    if (hour > 9){
        hourElement.innerText = hour
    }
    if (hour > 23){
        clearInterval(interval)
    }
}
