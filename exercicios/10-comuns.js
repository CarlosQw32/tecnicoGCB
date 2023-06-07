function valoresComuns(array1, array2) {
    const commonValues = [];

    for (let i = 0; i < array1.length; i++) {
        const value = array1[i];
        if (array2.includes(value) && !commonValues.includes(value)) {
            commonValues.push(value);
        }
    }

    return commonValues;
}

// Aplicando função
const array1 = [6, 8];
const array2 = [8, 9];
const resultado = valoresComuns(array1, array2);
console.log(resultado);

/**No exemplo dado, o array1 contém os elementos [6, 8] e o array2 contém os elementos [8, 9]. A chamada da função valoresComuns(array1, array2) retorna o array [8], pois o valor 8 é o único valor presente em ambos os arrays, sem repetições. */