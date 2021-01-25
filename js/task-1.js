//Напиши скрипт, который выполнит следующие операции.
//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Получится 'В списке 3 категории.'.
//Для каждого элемента li.item в списке ul#categories,
//найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории
//(всех вложенных в него элементов li).
//Например для первой категории получится:

//Категория: Животные
//Количество элементов: 4

const ulRef = document.querySelector('ul').children.length;
console.log(`В списке ${ulRef} категории`);

const items = document.querySelectorAll('.item');
items.forEach.call(items, element => {
  const title = element.querySelector('h2').innerHTML;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title}`);
  console.log(`Количество элементов: ${itemsLength}`);
});
