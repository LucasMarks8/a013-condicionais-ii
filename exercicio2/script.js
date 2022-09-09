// # Exercício 2

// Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. 
// No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!

let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

switch (nacionalidade) {
    case "brasileiro":
        console.log("a pessoa é do BRASIL!");
        break;
    case "argentino":
        console.log("a pessoa é da ARGENTINA!");
        break;
    case "uruguaio":
        console.log("a pessoa é do URUGUAI!");
        break;
    case "chileno":
        console.log("a pessoa é do CHILE!");
        break;
    case "colombiano":
        console.log("a pessoa é da COLOMBIA!");
        break;
    default:
        console.log("Nacionalidade não encontrada")
}