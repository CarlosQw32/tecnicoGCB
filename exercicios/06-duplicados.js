function removerDuplicados(array) {
    const arraySemDuplicados = [];
    for (let i = 0; i < array.length; i++) {
      let duplicado = false;
      for (let j = 0; j < i; j++) {
        if (array[j] === array[i]) {
          duplicado = true;
          break;
        }
      }
      if (!duplicado) {
        arraySemDuplicados.push(array[i]);
      }
    }
    return arraySemDuplicados;
  }
  
 // Aplicando função
  const meuArray = [1, 2, 3, 3, 2, 4, 5, 4, 7, 3];
  const arraySemDuplicados = removerDuplicados(meuArray);
  console.log(arraySemDuplicados);
  
  /**Neste exemplo, o array [1, 2, 3, 3, 2, 4, 5, 4, 7, 3] é passado como argumento para a função removerDuplicados. A função percorre o array e verifica se cada elemento já foi encontrado anteriormente. Caso o elemento seja um duplicado, ele é ignorado. O resultado é um novo array [1, 2, 3, 4, 5, 7] contendo apenas os elementos únicos do array de entrada. */