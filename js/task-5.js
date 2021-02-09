//Напиши скрипт который, при наборе текста в инпуте input#name-input
//(событие input), подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputForm = document.querySelector('input');
const spanString = document.querySelector('#name-output');

const changeSpan = () =>
  inputForm.value !== ''
    ? (spanString.textContent = inputForm.value)
    : (spanString.textContent = 'незнакомец');

inputForm.addEventListener('input', changeSpan);
