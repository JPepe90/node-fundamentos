console.log("Hola mundo!");

let i = 0;

// Esto ejecutará en forma asíncrona
setInterval(function() {
  console.log(i);
  i++;

  // Esto dará error en tiempo de ejecucion!!
  // if (i === 5) {
  //   var a = 3 + z;
  // }
}, 1000);

console.log("Segunda Instruccion");