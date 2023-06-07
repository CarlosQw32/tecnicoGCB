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
  