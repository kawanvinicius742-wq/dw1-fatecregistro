//JAVASCRIPT

const nome = window.prompt("Qual é o seu nome?");
const idade = Number(window.prompt("Qual é a sua idade?"));
const hobbie = window.prompt("Qual é o seu hobbie?");
const sexo = window.prompt('Qual é o seu sexo? Digite M (masculino) F (feminino)');
const ano = window.prompt('Qual ano você nasceu?');

document.writeln(`Olá! ${nome}!`);

// OPERADOR TERNÁRIO
let resultado = idade < 18 ? "menor" : "maior";

document.writeln(` <br> Você é <strong> ${resultado} </strong> de idade.`);

// toLowerCase joga a string toda para letras minúsculas
resultado = hobbie.toLowerCase() != 'estudar' ? 'Não seria melhor estudar?' : 'Você vai longe';

document.writeln(` <br> Seu hobby é ${hobbie}. ${resultado}`);

// toLowerCase joga a string toda para letras maiúsculas
resultado = sexo.toUpperCase == 'M' ? 'o' : 'a';
document.writeln(`<br> Prazer em conhecê-l${resultado}!`);

resultado = ano >= 2000 ? 'no' : 'antes do';
document.writeln(`<br> Você nasceu <strong> ${resultado} segundo milênio! </strong>`);

