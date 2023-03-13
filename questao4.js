/*
    Questão 4

    Porcentual de representação das empresas de uma distribuidora
*/
const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;


// encontra a soma total 
const soma = () => {
  let total;
  total = sp + rj + mg + es + outros;
  return total;
};

// Calcula a porcentagem
const porcentagem =(estado,total)=>{
    let percent = (estado*100)/total;
    return percent;
}
// imprime na tela considerando o valor com 4 casas decimais de precisão
console.log("Percentual de representação de SP: "+porcentagem(sp,soma()).toFixed(4)+"%")
console.log("Percentual de representação de RJ: "+porcentagem(rj,soma()).toFixed(4)+"%")
console.log("Percentual de representação de MG: "+porcentagem(mg,soma()).toFixed(4)+"%")
console.log("Percentual de representação de ES: "+porcentagem(es,soma()).toFixed(4)+"%")
console.log("Percentual de representação de OUTROS: "+porcentagem(outros,soma()).toFixed(4)+"%")

