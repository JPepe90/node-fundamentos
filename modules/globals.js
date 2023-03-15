console.log(global);

let i = 0;

let intervalo = setInterval(() => {
  console.log('Hola ' + i);
  
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(function() {
  console.log('Hola Inmediato!');
})

// require(); // para importar modulos

console.log(process);
console.log(__filename);

// crear variables globales
// En lo posible evitarlo, no es una buena practica.
global.miVariable = 'Valor';

console.log(miVariable);