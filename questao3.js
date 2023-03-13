/*Questão 3
 */

// leitura do arquivo .json
const fs = require("fs");
const data = fs.readFileSync("./dados.json", "utf-8");

/*
    Definição das variáveis
*/
const arr = JSON.parse(data);
const faturamentos = [];
let media = 0;
let mes_d = 0;

// Encontra o maior e o menor valor de faturamentos no mês
const init = (arr) => {
  let max = 0;
  let min = 0;
  let dias = 0;
  let faturamento = 0;

  for (let i = 0; i < arr.length; i++) {
    let data = arr[i];
    let values = Object.values(data);
    faturamentos.push(values[1]);
    if (i == 0) {
      min = values[1]; // atribui o primeiro valor mínimo
    }
    if (values[1] > max) {
      max = values[1]; // adiciona o maior valor encontrado
    } else if (values[1] < min && values[1] != 0) {
      min = values[1]; // adiciona o menor valor encontrado
    }

    // conta os dias e soma o montante
    if (values[1] != 0) {
      dias++;
      faturamento += values[1];
    }
  }

  return { max, min, dias, faturamento };
};

const result = init(arr) // chama função init passando o array com dados no parâmetro
media = result.faturamento / result.dias; // calcula a média

// calcula a quantidade de dias no mês que o faturamento é maior que a média
for (let i = 0; i < faturamentos.length; i++) {
  if (faturamentos[i] > media) {
    mes_d++;
  }
}

console.log("Menor valor de faturamento ocorrido em um dia do mês: ", result.min);
console.log("Maior valor de faturamento ocorrido em um dia no mês: ", result.max);
console.log(
  "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ",mes_d);
