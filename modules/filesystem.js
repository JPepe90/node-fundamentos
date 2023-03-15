const fs = require('fs');

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    // leido
    if (!err) {
      console.log(data.toString());
    }
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function(err) {
    if (err) {
      console.error('No he podido escribir el archivo en la ruta');
    } else {
      console.log('Se ha escrito correctamente');
    }
  })
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

leer(__dirname + '/archivo.txt', );
escribir(__dirname + '/archivo-salida.txt', 'Soy la salida del archivo', console.log)

borrar(__dirname + '/archivo-salida.txt', console.log);