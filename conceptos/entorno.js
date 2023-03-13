/*
Las variables de entorno en general se ponen en mayuscula (NOMBRE, WEB, 
USUARIO, etc). Es buena practica mantener este formato.
Las variables locales en el formato local (nombre, web, usuario, etc).
*/
let nombre = process.env.NOMBRE || 'Sin nombre'; // con || le doy opcion por defecto
let web = process.env.WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

