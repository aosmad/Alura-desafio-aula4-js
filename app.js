console.log ('Boas vindas!');
let nome = "Alice";
console.log ('Olá, Alice!');
alert ('Olá, Alice!');
let linguagemDeProgramacao = prompt ('Qual a linguagem de programação que você mais gosta?');
console.log (`${linguagemDeProgramacao}`);
//soma de 2 números
let valor1;
do {
  valor1 = parseInt(prompt("Digite o primeiro valor para a soma:"));
  if (isNaN(valor1)) {
    alert("Entrada inválida! Digite um número.");
  }
} while (isNaN(valor1));

let valor2;
do {
  valor2 = parseInt(prompt("Digite o segundo valor para a soma:"));
  if (isNaN(valor2)) {
    alert("Entrada inválida! Digite um número.");
  }
} while (isNaN(valor2));

let resultado = valor1 + valor2;
console.log (`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
alert (`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
// diferença de 2 números
let valor3;
do {
  valor3 = parseInt(prompt("Digite o primeiro valor para a diferença:"));
  if (isNaN(valor3)) {
    alert("Entrada inválida! Digite um número.");
  }
} while (isNaN(valor3));

let valor4;
do {
  valor4 = parseInt(prompt("Digite o segundo valor para a diferença:"));
  if (isNaN(valor4)) {
    alert("Entrada inválida! Digite um número.");
  }
} while (isNaN(valor4));

let resultado2 = valor3 - valor4;
console.log (`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}`);
alert (`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}`);
//interação com a idade
let idade = prompt ("Qual a tua idade?");
 if (idade >= 18){
    console.log ("Ih, tá velhinha!");
    alert ("Eita, tu pode tirar habilitação!");
 }
 else{
    console.log ("Tá novinha ainda, baby years");
    alert ("Ainda sem poder tirar carteira de motorista :/");
 }
 //número positivo ou negativo
 let numeroInteiro = prompt ("Me dê um número inteiro");
 if (numeroInteiro > 0) {
    console.log("Número positivo, yey");
    alert("Número positivo, yey");
} else if (numeroInteiro < 0) {
    console.log("Número negativo, tisti");
    alert("Número negativo, tisti");
} else {
    console.log("Número nulo");
    alert("Número nulo");
}
//contagem progressiva
let contador = 0;
while (contador < 10) {
  contador++;
  console.log(contador);
}
//análise de nota
let nota = 8;
if (nota >= 7){
    console.log ("Aprovado!");
}
    else {
        console.log ("Reprovado!");
    }
//número aleatório
let numeroAleatorio = parseInt(Math.random());
console.log (`${numeroAleatorio}`);
//número aleatório de 0 a 10
let numeroAleatorio2 = parseInt(Math.random()*10 +1);
console.log (`${numeroAleatorio2}`);
//número aleatório de 0 a 1000
let numeroAleatorio3 = parseInt(Math.random()*1000+1);
console.log (`${numeroAleatorio3}`);
