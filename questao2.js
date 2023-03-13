/*
    Questão 2
    Sequencia de FIbonacci
*/

const valor = 15;  // Valor a ser verificado na sequência de Fibonacci

const GeraFibonacci = (val) => {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;

  for (let i = 2; i < val; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]; // calculo Fibonacci
  }
  return fibonacci.find((n) => n == val); // verifica se o valor faz parte da sequência 
};


let result = GeraFibonacci(valor); // chama a função para gerar a sequência

if (result != undefined) {
  console.log("O número informado pertence a sequência Fibonacci");
} else {
  console.log("O número informado não pertence a sequência Fibonacci");
}
