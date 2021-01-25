//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const findIngreidentsEl = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(option => {
  const createLi = document.createElement('li');
  createLi.textContent = option;

  return createLi;
});

console.log(ingredientEl);

findIngreidentsEl.append(...ingredientEl);

console.dir(findIngreidentsEl);
