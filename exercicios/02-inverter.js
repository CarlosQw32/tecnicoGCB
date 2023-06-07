function inverterArray(array) {
    const arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  }
  
  // Aplicando função
  const meuArray = [1, 2, 3, 4, 5];
  const arrayInvertido = inverterArray(meuArray);
  console.log(arrayInvertido); 
  
  /*Neste exemplo, o array [1, 2, 3, 4, 5] é passado como argumento para a função inverterArray. 
  A função itera pelo array de trás para frente usando um loop for, adicionando cada elemento ao novo array arrayInvertido.
  Ao final do loop, o novo array é retornado e impresso no console.*/