//Напиши скрипт, который бы при потере фокуса на инпуте,
//проверял его содержимое на правильное количество символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым,
//если неправильное - красным.

//Для добавления стилей, используй CSS-классы valid и invalid.
const findInput = document.querySelector('#validation-input');

findInput.addEventListener('focus', inputFocus);
findInput.addEventListener('blur', changeFocus);

function changeFocus(event) {
  const validLengthRef = Number(findInput.getAttribute('data-length'));
  const valueInputRef = event.target.value;
  return valueInputRef.length === validLengthRef
    ? findInput.classList.add('valid')
    : findInput.classList.add('invalid');
}
function inputFocus() {
  findInput.classList.remove('valid', 'invalid');
}
