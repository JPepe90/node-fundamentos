// Basicas
console.log("Algo loggeado");
console.info("Algo informado");
console.error("Algo en error!!");
console.warn("Algo como warning!");

// Tabla 
var tabla = [
  {
    a: 1,
    b: 'z'
  },
  {
    a: 2,
    b: 'Otra'
  }
];

console.table(tabla);

// Agrupacion de logs y Subagrupacion
console.group('Conversacion general agrupada');
console.log("Algo...");
console.log("Algo...");
console.group('Subconversacion!');
console.log("Algo subagrupado...");
console.log("Algo subagrupado...");
console.groupEnd('Subconversacion!');
console.log("Algo...");
console.groupEnd('Conversacion agrupada');

// Contador
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');