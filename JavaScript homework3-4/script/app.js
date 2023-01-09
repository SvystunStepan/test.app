// Домашнє завдання:
// 3-4.=========================================
/* Создать объект с методами, которые будут динамически генерировать DOM вот такой страницы.
Это будет тест, который мы будем разрабатывать в следующих заданиях.
Сейчас вам нужно только динамически создать html, методы должны храниться в одном объекте.
Для того чтоб страница выглядела красиво можете использовать Bootstrap и создавать DOM-элементы с готовыми бутстраповскими классами.
Изначально на странице должен быть только <body>, вызывая методы объекта нужно создать dom-элементы */

let div = document.createElement('div');
div.className = "test";
div.innerHTML = "<h2>Тест по програмуванню</h2>";
document.body.append(div);

let questions = [
  {
    text: 'Питання №1',
    answers: [ 
              'Варіант відповіді №1', 
              'Варіант відповіді №2', 
              'Варіант відповіді №3'
            ],
    right: 0,
  },
  {
    text: 'Питання №2',
    answers: [ 
              'Варіант відповіді №1', 
              'Варіант відповіді №2', 
              'Варіант відповіді №3'
            ],
    right: 1,
  },
  {
    text: 'Питання №3',
    answers: [
              'Варіант відповіді №1', 
              'Варіант відповіді №2', 
              'Варіант відповіді №3'
            ],
    right: 2,
  },
];


for (let i = 0; i < questions.length; i++) {
  let form = document.createElement('form');
  div.appendChild(form);
  //form.dataset.right = questions.right; //

  let h4 = document.createElement('h4');
  h4.innerHTML = questions[i].text;
  form.appendChild(h4);

  let ul = document.createElement('ul');

  for (let j = 0; j < questions[i].answers.length; j++) {
     let li = document.createElement('li');
     li.innerText = questions[i].answers[j];

     /*добавити label>input + text*/
    let label = document.createElement('label')//
    //label.innerText = questions[i].answers[j];
    
      let input = document.createElement('input')
      input.setAttribute('value', j)
      input.setAttribute('type', 'radio')
      input.setAttribute('name', 'answers'+i)

    label.appendChild(input); //

    li.prepend(label); //li.prepend(input);

   ul.appendChild(li); //ul.appendChild(li);
  }
  form.appendChild(ul)
}

let button = document.createElement('button');
button.innerHTML = "Перевірка";
div.append(button);

//console.log(questions[0].right); //(як вивести правильну відповідь в консоль)




/* //==== перевірка на правильність (не фуричить) =====

// let button = document.querySelector('#button');
button.addEventListener('click', function() {
  let forms = document.querySelectorAll('form'); //('div form')

  for (let form of forms) {
    form.classList.remove('correct');
    form.classList.remove('incorrect');

    let inputs = form.querySelectorAll('input');

    for (let input of inputs) {
      if (input.checked) {
        if (input.value == questions[0]['right']) { // if (input.dataset.answerNum == form.dataset.right) {
        form.classList.add('correct');
      } else {
        form.classList.add('incorrect');
      }

      break;
      }
    }
  }
}) */



//=================стягнув з youTube =================

/* let test = document.querySelector('#test');

let questions = [
  {
    text: 'Питання №1',
    right: 0,
    answers: ['Варіант відповіді №1','Варіант відповіді №2','Варіант відповіді №3'],
  },
  {
    text: 'Питання №2',
    right: 1,
    answers: ['Варіант відповіді №1','Варіант відповіді №2','Варіант відповіді №3'],
  },
  {
    text: 'Питання №3',
    right: 2,
    answers: ['Варіант відповіді №1','Варіант відповіді №2','Варіант відповіді №3'],
  },
];

let i = 1;
for (let question of questions) {
  let div = document.createElement('div');
  test.appendChild(div);

  let p = document.createElement('p');
  p.innerHTML = question.text;
  div.appendChild(p);

  let form = document.createElement('form');
  test.appendChild(form);
  form.dataset.right = question.right;

  let j = 0;
  for (let answer of question.answers) {
      let input = document.createElement('input');
      input.type = 'radio';
      input.name = i;
      input.dataset.answerNum = j++;
      form.appendChild(input);
  }

i++;

}

let button = document.querySelector('#button');
button.addEventListener('click', function() {
  let forms = document.querySelectorAll('#test form');

  for (let form of forms) {
    form.classList.remove('correct');
    form.classList.remove('incorrect');

    let inputs = form.querySelectorAll('input');

    for (let input of inputs) {
      if (input.checked) {
        if (input.dataset.answerNum == form.dataset.right) {
        form.classList.add('correct');
      } else {
        form.classList.add('incorrect');
      }

      break;
      }
    }
  }
}); */
