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
    p.innerHTML = 'Email válido';
    p.style.backgroundColor = 'green';
  } else if (!isEmailValid && selectEntrada.value === 'email') {
    p.innerHTML = 'Email inválido';
    p.style.backgroundColor = 'red';    
  } else if (inputText.value.length === 11 && selectEntrada.value === 'cpf') {
    p.innerHTML = 'CPF válido';
    p.style.backgroundColor = 'green';
  } else if (inputText.value.length !== 11 && selectEntrada.value === 'cpf') {
    p.innerHTML = 'CPF inválido';
    p.style.backgroundColor = 'red';
  };
  inputText.value = '';
});
