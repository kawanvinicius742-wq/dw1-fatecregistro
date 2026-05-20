// Javascript
// VARIÁVEIS
/* Variáveis podem ser
declaradar de 3 formas:
VAR, LET E CONST
*/

//VAR: No geral, evite o seu uso, pode não ser muito seguro.
//LET: Utilize quando for necessário retribuir o valor da variável.
//CONST: Utilize quando NÃO precisar retribuir o valor da variável.

// VAR
var nome = "Diego";
nome = "João";
var nome = "José";

// LET
let cidade = "Registro";
cidade = "Sete Barras";
// let cidade -> isso não pode

// CONST
const user = "pedro@email.com";
// user = "pedro@gmail.com" -> isso não pode
// const user = "" -> não poderia

// Funções do elemento WINDOW (navegador)
// Disparando uma janela de alert no site
window.alert("Bem-vindos ao JavaScript");
// Disparando uma janela de confirmação
const confirmacao = window.confirm("Vamos começar?");
if (confirmacao == true) {
  // Dispara uma janela de entrada de dados
  const nome = window.prompt("Qual é o seu nome?");
  const idade = window.prompt("Quantos anos você tem?");

  // Escrevendo no site
  document.writeln("Olá " + nome + "!"); //concatenação
  // concatenação - Template Strings
  //  document.write("Você tem " + idade + " anos");
  document.write(`Você tem ${idade} anos! <br>`);

 if (idade >= 18){
     document.writeln(" Você é de maior!");
  } 

  else {
     document.write(" Você é menor de idade!");
  }

}

/* CRIE UM SITE COM UM SCRIPT QUE PERGUNTE A IDADE DO USUÁRIO.
  SE A IDADE FOR MAIOR QUE 18, ELE MOSTRA NO SITE: "VOCÊ É MAIOR DE IDADE."
  SE NÃO ELE MOSTRA: "VOCÊ É MENOR DE IDADE." */

 


