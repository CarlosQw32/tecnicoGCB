function filtrarArray(array, itensRemover) {
  return array.filter(item => !itensRemover.includes(item));
}

// Aplicando função
const meuArray = [5, 4, 3, 2, 5];
const itensRemover = [5, 3];
const arrayFiltrado = filtrarArray(meuArray, itensRemover);
console.log(arrayFiltrado);

/**Neste exemplo, o array [5, 4, 3, 2, 5] é passado como argumento para a função filtrarArray, juntamente com o conjunto de itens a serem removidos [5, 3]. A função utiliza o método filter do array para criar um novo array contendo apenas os elementos que não estão presentes no conjunto de itens a serem removidos. O resultado é [4, 2], pois os valores 5 e 3 são removidos do array de entrada. */