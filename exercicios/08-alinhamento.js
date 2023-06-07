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
  