// Домашнє завдання:
// 1.=========================================

function pow(x, n) {
        let result = x;
        for (let i = 1; i < n; i++) {
          result *= x;
        }
        return result;
      }
      let x = prompt("введіть число:", '');
      let n = prompt("введіть ступінь", '');
      console.log ( pow(x, n) );
