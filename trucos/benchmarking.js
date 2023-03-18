let suma = 0;
let suma2 = 0;

// ------------------------------------------------------------------
// Funciones Sincronas
// Mostrar tiempo en consola y nombre del conteo
console.time('Todo');

console.time('bucle1');
for (let i = 0; i < 000000000; i++) {
  suma += 1;
}
console.timeEnd('bucle1');

console.time('bucle2');
for (let i = 0; i < 1000000000; i++) {
  suma2 += 1;
}
console.timeEnd('bucle2');

console.time('funcion asincrona');
console.log('Empieza la funcion asincrona');
Asincrona()
  .then(() => {
    console.timeEnd('funcion asincrona');
  });

console.timeEnd('Todo');

// ------------------------------------------------------------------
// Funciones Asincronas

function Asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Termina el proceso Asincrono');
      resolve();
    }, 1800);
  });
}