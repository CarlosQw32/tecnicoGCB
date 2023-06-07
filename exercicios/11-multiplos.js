function multiplos(arrays) {
    if (arrays.length === 0) {
        return [];
    }

    let juncao = arrays[0];

    for (let i = 1; i < arrays.length; i++) {
        const arrayAtual = arrays[i];
        const temp = [];

        for (let j = 0; j < juncao.length; j++) {
            const valor = juncao[j];

            if (arrayAtual.includes(valor)) {
                temp.push(valor);
            }
        }

        juncao = temp;
    }

    return juncao;
}

// Aplicando função
const arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
const resultado = multiplos(arrays);
console.log(resultado);
