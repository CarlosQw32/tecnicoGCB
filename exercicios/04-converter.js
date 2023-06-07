function converterArray(arr) {
    const Geral = {};
    for (let i = 0; i < arr.length; i++) {
      const[chave,valor] = arr[i]
      Geral[chave]=valor
    }
    return Geral;
}

// Aplicando função
const meuArray= ([["c",2],["d", 4]])
const arrayFinal = converterArray(meuArray)
console.log(arrayFinal);

