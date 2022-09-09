// # Exercício 3

// Reescreva os códigos do arquivo script.js utilizando o if ternário.

// **Relembrando o if ternário**
// ```jsx
// condição ? expr1 : expr2
// ```

// Onde :

// `condição` é uma expressão que é avaliada como `true` ou `false`.

// `expr1`, `expr2` são xpressões com valores de qualquer tipo.

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

const nome = prompt("Qual é o seu nome?")
nome === "Jose" ? console.log("Oi, Zé!") : console.log(`Olá, ${nome}`)

const idade = Number(prompt("Qual é a sua idade?"))
idade >= 18 ? console.log("Pode tirar carteira de motorista") : console.log("Ainda não pode tirar a carteira de motorista")