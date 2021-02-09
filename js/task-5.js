//Напиши скрипт который, при наборе текста в инпуте input#name-input
//(событие input), подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.output.textContent !== ''
    ? (refs.output.textContent = event.currentTarget.value)
    : (refs.output.textContent = 'незнакомец');
}

//Через remove снять слушателя и вернуть "незнакомец"
//  console.log(event.currentTarget.value);
//  refs.output.textContent = event.currentTarget.value;

// const inputForm = document.querySelector('input');
// const spanString = document.querySelector('#name-output');

// const changeSpan = () =>
//   inputForm.value !== ''
//     ? (spanString.textContent = inputForm.value)
//     : (spanString.textContent = 'незнакомец');

// inputForm.addEventListener('input', changeSpan);
