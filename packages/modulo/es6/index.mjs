// Treaer nuestro modulo
import modulo from './modulo.mjs';

// Ejecutar una funcion del modulo
// console.log(modulo);
console.log(modulo);
modulo.saludar('Javier');
console.log(modulo.prop1);

// para ejecutar modulos en ES6 con import y export en consola
// node --experimental-modules <path to file>