const os = require('os');

// ----------------------------------------------------------
// Arquitectura
console.log(os.arch());
// Plataforma
console.log(os.platform());
// Informacion de los CPUs
console.log(os.cpus());
// console.log(os.cpus().length);
// Señales de bajo nivel
// console.log(os.constants);

// ----------------------------------------------------------
// Memoria RAM
// ----------------------------------------------------------
const SYZE = 1024;
function kb(bytes) { return bytes / SYZE }
function mb(bytes) { return kb(bytes) / SYZE }
function gb(bytes) { return mb(bytes) / SYZE }

// Total
console.log('Memoria RAM Total (Kb)', kb(os.totalmem()));
console.log('Memoria RAM Total (Mb)', mb(os.totalmem()));
console.log('Memoria RAM Total (Gb)', gb(os.totalmem()));

// Disponible
console.log('Memoria RAM Libre (Kb)', kb(os.freemem()));
console.log('Memoria RAM Libre (Mb)', mb(os.freemem()));
console.log('Memoria RAM Libre (Gb)', gb(os.freemem()));

// Directorios
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());