function criarArray(qtd, valor) {
  const array = [];
  for (let i = 0; i < qtd; i++) {
    array.push(valor);
  }
  return array;
}

// Aplicando função
const resultado = criarArray(9, 'n');
console.log(resultado); 

/*Neste exemplo, a função criarArray é chamada com os argumentos 9 e 'n'. 
Ela cria um novo array contendo 9 elementos, todos com o valor 'n'. 
O resultado é então impresso no console.*/