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
