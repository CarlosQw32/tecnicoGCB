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

/*Neste exemplo, o array de arrays [["c", 2], ["d", 4]] é passado como argumento para a função converterArray. A função itera pelo array usando um loop for, e em cada iteração, utiliza a desestruturação para atribuir o primeiro elemento do subarray à variável chave e o segundo elemento à variável valor. Em seguida, a função atribui o par chave-valor ao objeto Geral, em que chave é usada como a chave do objeto e valor é atribuído a essa chave. Ao final do loop, o objeto Geral é retornado.*/