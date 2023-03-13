/*
    Questão 5

    String Invertida
*/
const palavra = "Desafio"

// função que inverte a string
const invert =(word)=>{
    let revert=""
   
    for(let i=word.length;i>=0;i--){
        if(word[i]!=undefined){
            revert+=word[i]  // inverte a string
        }    
    }
     return revert;
}
console.log("String de Entrada: ", palavra)
console.log("String de Invertida: "+invert(palavra))