// Домашнє завдання:
// 2.=========================================

let test = document.querySelector('#test');
test.innerHTML = 'Тест по програмуванню';


let questions = [
  {
    text: 'Питання №1',
    answers: [      'Варіант відповіді №1', 
              '<br/> Варіант відповіді №2', 
              '<br/> Варіант відповіді №3'],
    right: 0,
  },
  {
    text: 'Питання №2',
    answers: [      'Варіант відповіді №1', 
              '<br/> Варіант відповіді №2', 
              '<br/> Варіант відповіді №3'],
    right: 1,
  },
  {
    text: 'Питання №3',
    answers: [      'Варіант відповіді №1', 
              '<br/> Варіант відповіді №2', 
              '<br/> Варіант відповіді №3'],
    right: 2,
  },
];



let i = 1;
for (let question of questions) {
  let div = document.createElement('div');
  test.appendChild(div);

  let ul = document.createElement('ul');
  ul.innerHTML = question.text;
  div.appendChild(ul);

  let li = document.createElement('li');
  li.innerHTML = question.answers;
  ul.appendChild(li);

  let form = document.createElement('form');
  li.appendChild(form);
  form.dataset.right = question.right;

  let j = 0;
  for (let answer of question.answers) {
      let input = document.createElement('input');
      input.type = 'radio'; //checkbox
      input.name = i;
      input.dataset.answerNum = j++;
      form.append(input); 
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
});

//====================================================





// let div = document.createElement('div');
// div.className = "test";
// div.innerHTML = "Тест по програмуванню";

// document.body.append(div);



/* let ol = document.createElement('ol');
// ol.className = "test-item";
div.append(ol); */

// test.append(getListContent());






/* 
var element = document.createElement('div');
element.classList.add ('');
element.innerHTML='Тест по програмуванню';

var body = document.querySelector('.body');
// body.appendChild(element);
body.insertBefore(element, body.children[1]); */




/* let div = document.createElement('div');
div.className = "test";
div.innerHTML = "Тест по програмуванню";

document.body.append(div);

let ol = document.createElement('ol');
ol.className = "test-item";

div.appendChild(ol);


function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append('Питання №', i);
    fragment.append(li);
  }
  
  return fragment;
}

ol.append(getListContent()); */




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
