function limparNull(array){
    const arrayFull=[];
    for (let i = 0 ; i < array.length; i++){
        const item = array[i];
        if(item !== '' && item !== false && item !== undefined && item !== null && item !== 0){
            arrayFull.push(item)
        }
    }
    return arrayFull
}

// Aplicando função
const myArray = [1,'',,undefined,0,2,'teste'];
const myArrayLimpo = limparNull(myArray);

console.log(myArrayLimpo)

/*Neste exemplo, o array [1, '', undefined, 0, 2, 'teste'] é passado como argumento para a função limparNull.  A função itera pelo array usando um loop for, verificando cada elemento. Se o elemento não for null, undefined, false, uma string vazia ou 0, ele é adicionado ao novo array arrayFull. O novo array resultante contém apenas os valores válidos [1, 2, 'teste'], que são impressos no console.*/