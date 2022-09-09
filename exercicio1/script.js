// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
// Faça isso:
    
// 1. Utilizando ifs aninhados
// ```jsx
//     if(expressao){
//         if(expressao){

//         }
//     }
// ```
const num1 = Number(prompt("Digite um número qualquer"))

if(num1 % 2 === 0){
    console.log("O número é divisível por 2")
} else if(num1 % 3 === 0){
    console.log("O número é divisível por 3")
} else {
    console.log("Número primo")
}

// 2. Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){ //&& para E
//     //expressao || expressao para OU     
    
//     }
// ```
if(num1 % 2 === 0 || num1 % 3 === 0){
    console.log("O número é divisível por 2 ou por 3")
} else {
    console.log("Número primo")
}