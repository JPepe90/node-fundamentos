const fs = require('fs');
const { stdout } = require('process');
const stream = require('stream');
const util = require('util');

let data = '';
let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.on('data', function(chunk) {
//   console.log(chunk);
//   console.log(chunk.toString());
// });

// ------------------------------------------------------------------
// Operacion de lectura por Stream
readableStream.setEncoding('UTF8');
readableStream.on('data', function(chunk) {
  console.log(chunk);
});

readableStream.on('data', function(chunk) {
  data += chunk;
});

readableStream.on('end', function() {
  console.log(data);
});


// buffer de salida
// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');



// ------------------------------------------------------------------
// Operacion de escritura por Stream

const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
}

let mayus = new(Mayus);

readableStream
  .pipe(mayus)
  .pipe(process.stdout);