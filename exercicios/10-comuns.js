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
