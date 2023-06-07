function run(array, quantidade) {
    const resultado = [];
    const tamanhoSubarray = Math.ceil(array.length / quantidade);
  
    let indice = 0;
    while (indice < array.length) {
      const subarray = array.slice(indice, indice + tamanhoSubarray);
      resultado.push(subarray);
      indice += tamanhoSubarray;
    }
  
    return resultado;
  }
  
  // Exemplo de uso
  const array = [1, 2, 3, 4, 5];
  const quantidade = 2;
  const resultado = run(array, quantidade);
  console.log(resultado);
  