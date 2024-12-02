import './style.css';
import isEmail from 'validator/lib/isEmail';


const inputText = document.querySelector('#input-text');
const selectEntrada = document.querySelector('#entrada');
const button = document.querySelector('#btn');
const p = document.querySelector('#retorno');


button.addEventListener('click', () => {
  const isEmailValid = isEmail(inputText.value);
  console.log(inputText.value.length);
  
  if (isEmailValid && selectEntrada.value === 'email') {
    p.innerHTML = `Email: ${inputText.value} é válido,
    porém isso não representa que ele realmente exista.`;
    p.style.backgroundColor = 'green';
  } else if (!isEmailValid && selectEntrada.value === 'email') {
    p.innerHTML = `Email: ${inputText.value} é inválido`;
    p.style.backgroundColor = 'red';    
  } else if (inputText.value.length === 11 && selectEntrada.value === 'cpf') {
    p.innerHTML = `CPF: ${inputText.value} é válido,
    porém isso não representa que ele realmente exista.`;
    p.style.backgroundColor = 'green';
  } else if (inputText.value.length !== 11 && selectEntrada.value === 'cpf') {
    p.innerHTML = `CPF: ${inputText.value} é inválido`;
    p.style.backgroundColor = 'red';
  };
  inputText.value = '';
});
