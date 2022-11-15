// Домашнє завдання:
// 1.=========================================

/* function pow(x, n) {
        let result = x;
        for (let i = 1; i < n; i++) {
          result *= x;
        }
        return result;
      }
      let x = prompt("введіть число:", '');
      let n = prompt("введіть ступінь", '');
      console.log ( pow(x, n) ); */


// 2.=========================================


let names=[];
for (let i = 0; i < 5; i++) {
  names [i] = prompt('введіть любе імя:');   
  if (names [i] == '') { 
    alert('введіть лаконічне імя!');
    //return;
  } else {
    names.push[i];
  }
}
console.log(names);

let user = prompt ('введіть імя користувача:');
if (names.indexOf(user) != -1) {
  alert(user + ' ви успішно ввійшли!');
} else {
  alert ('Помилка!');
}

// ЗНАЙШОВ В ІНТЕРНЕТІ НА ЯКОМУСЬ ФОРУМІ

// var arr = [];
// for (var i = 0; i < 5; i++) {
//     arr[i]=prompt("Введите имя ");
//  }
// console.log(arr);
// var name =prompt("Введите имя для входа");
// alert(arr.indexOf(name) != -1 ? name + ", вы успешно вошли" : "Обломись");

/* (П_Р_И_М_І_Т_К_А: indexOf/lastIndexOf(item, pos) – шукає item, починаючи з позиції pos, 
і повертає його індекс або -1, якщо нічого не знайдено.) */