function filtrarArray(array, itensRemover) {
    return array.filter(item => !itensRemover.includes(item));
  }
  
  // Aplicando função
  const meuArray = [5, 4, 3, 2, 5];
  const itensRemover = [5, 3];
  const arrayFiltrado = filtrarArray(meuArray, itensRemover);
  console.log(arrayFiltrado); 
  