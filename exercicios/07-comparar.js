function compararArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    
    return true;
  }
  
  // Aplicando função
  console.log(compararArrays([1, 2, 3, 4], [1, 2, 3, 4])); // return:true
  console.log(compararArrays([1, 2, 3, 4], [1, 2, 3, 5])); // return:false
  
  /**Neste exemplo, os arrays [1, 2, 3, 4] e [1, 2, 3, 4] são passados como argumentos para a função compararArrays. A função verifica se os arrays têm o mesmo tamanho e, em seguida, compara cada elemento dos arrays. Como os elementos de ambos os arrays são iguais em suas respectivas posições, a função retorna true.

  No segundo exemplo, os arrays [1, 2, 3, 4] e [1, 2, 3, 5] são passados para a função. Novamente, a função verifica o tamanho dos arrays e, em seguida, compara os elementos. Como o quarto elemento é diferente nos dois arrays, a função retorna false. */