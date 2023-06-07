function removerAninhamentos(array) {
    const arrayUnico = [];
  
    function percorrerArray(arr) {
      for (let i = 0; i < arr.length; i++) {
        const elemento = arr[i];
        if (Array.isArray(elemento)) {
          percorrerArray(elemento);
        } else {
          arrayUnico.push(elemento);
        }
      }
    }
  
    percorrerArray(array);
  
    return arrayUnico;
  }
  
  // Aplicando função
  const meuArray = [1, 2, [3], [4, 5]];  
  const arrayUnico = removerAninhamentos(meuArray);
  console.log(arrayUnico); 

  /**Neste exemplo, o array [1, 2, [3], [4, 5]] é passado como argumento para a função removerAninhamentos. A função percorre o array e identifica se cada elemento é um array aninhado. Caso seja, a função percorre esse array aninhado para extrair seus elementos. O resultado final é um novo array [1, 2, 3, 4, 5] contendo todos os elementos sem os aninhamentos. */
  