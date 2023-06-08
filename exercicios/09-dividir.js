function dividir(array, quantidade) {
  let resultado = [];
  let tamanhoSubArray = Math.ceil(array.length / quantidade);

  
  for (let i = 0; i < array.length; i += tamanhoSubArray) {
      let subarray = array.slice(i, i + tamanhoSubArray);
      resultado.push(subarray);
    }

  return resultado;
}

// Exemplo de uso
const array = [1, 2, 3, 4, 5];
const quantidade = 3;
const resultado = dividir(array, quantidade);
console.log(resultado);

/**A função retorna um novo array com os subarrays criados a partir do array original, onde cada subarray tem um tamanho aproximadamente igual, exceto o último subarray que pode ter um tamanho menor.
No exemplo de uso fornecido, o array [1, 2, 3, 4, 5] é dividido em 3 subarrays. O resultado é armazenado na variável "resultado" e é exibido no console. */