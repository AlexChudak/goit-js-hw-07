//Напиши скрипт для создания галлереи изображений по массиву данных.
//Используй массив объектов images для создания тегов img вложенных в li.
//Для создания разметки используй шаблонные строки и insertAdjacentHTML().

//Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//Добавь минимальное оформление галереи флексбоксами или гридами
//через css - классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const findUlRef = document.querySelector('#gallery');

const imageRef = images.map(image => {
  const createLi = document.createElement('li');

  //const createImg = document.createElement('img');
  createLi.insertAdjacentHTML('afterbegin', `<img src=${image.url}> </img>`);
  //createLi.insertAdjacentHTML('beforeend', `<img alt:${image.alt}>`);
  createLi.insertAdjacentHTML('beforeend', '<img width=200></img>');
  //const findImgRef = document.querySelector('img');
  //findImgRef.setAttribute('width', '200');
  //findImgRef.setAttribute('height', '200');
  //createLi.append(createImg);
  return createLi;
});

console.dir(imageRef);

findUlRef.append(...imageRef);

console.log(findUlRef);
