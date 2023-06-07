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

