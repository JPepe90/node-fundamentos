const { exec, spawn } = require('child_process');

// exec('dir', (err, stdout, stderr) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }

//   console.log(stdout);
// });

// exec('node modules/console.js', (err, stdout, stderr) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn('dir');

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on('exit', function() {
  console.log('El proceso termino!');
})