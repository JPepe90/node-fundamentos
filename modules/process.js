// const proc = require('process');

process.on('uncaughtException', (err, origen) => {
  console.error('Se nos olvido capturar este error', err.message);
  console.error('El lugar del error fue', origen);
});

process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('El proceso termino');
});

fnError();