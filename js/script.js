const nome = prompt('Scrivi il tuo nome');

const cognome = prompt('Scrivi il tuo cognome');

const colore = prompt('Scrivi il tuo colore preferito');

const numero = prompt('Scrivi un numero per rendere piu sicura la password');

const password = nome + cognome + colore + numero;

console.log(password);

document.getElementById("txt-password").innerHTML =`
Ciao ${nome},<br>
Questa e la tua nuova password : <strong class="${"color"}">${password}</strong> 

`